from django.shortcuts import render, redirect
from django.views.generic import CreateView, DetailView, UpdateView, ListView
from django.views.generic.edit import ModelFormMixin
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.exceptions import PermissionDenied
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth.models import User
from users.models import Profile

from .models import Question, Response

from taggit.models import Tag

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import json

from devolio.settings import firebase, SLACK_SLACK2DEVOLIO_TOKEN
from firebase import FIREBASE_JS_CONFIG

from slackclient import SlackClient
from devolio.settings import SLACK_TOKEN, BASE_URL

from annoying.functions import get_object_or_this

def send_to_firebase(reply):
    thread = "question-responses/{}".format(reply.question.id)
    firebase.database().child(thread).push({
                "body": reply.body_html,
                "user": reply.user.username,
                "user_id": reply.user.id,
                "reply_db_id": reply.id
        })


def paginate(qs, size, request):
    """takes a QS, size `request` and returns paginated data"""
    paginator = Paginator(qs, size)
    page = request.GET.get('page')

    try:
        qs = paginator.page(page)
    except PageNotAnInteger:
        qs = paginator.page(1)
    except EmptyPage:
        qs = paginator.page(paginator.num_pages)
    return qs


class QuestionCreateView(LoginRequiredMixin, CreateView):
    model = Question
    fields = ('title', 'body_md', 'tags')
    template_name = "questions/question_form.html"
    form = ModelFormMixin

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(QuestionCreateView, self).form_valid(form)


class QuestionUpdateView(LoginRequiredMixin, UpdateView):
    model = Question
    fields = ('title', 'body_md', 'tags')
    template_name = "questions/question_form.html"

    def get_object(self, *args, **kwargs):
        obj = super(QuestionUpdateView, self).get_object(*args, **kwargs)
        if obj.user != self.request.user:
            raise PermissionDenied()
        return obj


class QuestionDetailView(DetailView):
    model = Question

    def get_context_data(self, **kwargs):
        context = super(QuestionDetailView, self).get_context_data(**kwargs)
        slug = self.kwargs['slug']
        context['responses'] = Response.objects.filter(question__slug=slug)
        context['firebase_config'] = json.dumps(FIREBASE_JS_CONFIG)
        return context

    template_name = "questions/question_detail.html"


def tag_questions_list(request, slug):
    return render(request, 'questions/questions_list.html',
        {
        'questions': Question.objects.filter(tags__name=slug).order_by('-created'),
        'tag_name': Tag.objects.get(slug=slug).name,
        'tags': Tag.objects.all().order_by('name'),
        })


@login_required
def new_response(request):

    data = json.loads(request.body)
    print('this', len(data.get('body')))
    if not data.get('qid') or not data.get('body'):
        return HttpResponse('Some/all data is missing. Or server error.', status=400)

    r = Response()
    r.user = request.user
    question = Question.objects.get(id=data.get('qid'))
    r.question = question
    r.body_md = data.get('body')
    r.save()

    # push to firebase
    send_to_firebase(r)

    return HttpResponse('Response successful.')


def questions_list(request):
    return render(request, 'questions/questions_list.html',
        {
        'questions': paginate(Question.objects.all().order_by('-created'), 20, request),
        'tags': Tag.objects.all().order_by('name')
        })

HELP_MSG = """
Hi {}, *@devolio* helps you publish your question on Devolio.
It doesn't matter if you have an account on devolio.net but it is _highly_ recommended.
After signing up, please link your Devolio account to DevChat on Slack (the purple button).


*How can I publish my question on Devolio?*:
- Start your question with *@devolio*, so we can receive your message.
- Leave a space and type your a brief title.
- On a new line, describe your question/problem in more detail.
- You can use Markdown, including code blocks.

*Example*:
>@devolio How do I select an HTML tag in JavaScript?
>I'm new to JavaScript and was wondering what the best way to do it. This is what
>I've already tried:
>```
document.querySelector('h1')
```
>Is This correct?

"""


def slack_msg(text, channel):
    """
    Sends a message back to the channel the original msg came from.
    """
    if SLACK_TOKEN:
        sc = SlackClient(SLACK_TOKEN)
        sc.api_call(
        "chat.postMessage",
        channel=channel,
        text=text
        )

    return HttpResponse('ok')



def slack_question_msg(question):
    return {
        "title": question.title,
        "author_name": "@{}".format(question.user.username),
        "author_link": "{}/@{}".format(BASE_URL, question.user.username),
        "color": "#f78250",
        "title_link": "{}{}".format(BASE_URL, question.get_absolute_url()),
        "pretext": "Ok, I published your question on Devolio!",
        "footer": "devolio.net",
        }


def slack_question(question, channel):
    if SLACK_TOKEN:
        sc = SlackClient(SLACK_TOKEN)
        sc.api_call(
        "chat.postMessage",
        channel=channel,
        attachments=[slack_question_msg(question)]
        )


def parse_title(msg):
    """
    Receives a message and tries to figure out the tilte.
    The official format is that the title is the alphanumeric string before
    the first new line character `\n`.
    If this doesnt return a valid title we take the string before and including
    the first question mark.
    If nothing matches, we will return `None`.
    """

    # remove brackets from Slack links
    msg = msg.replace('<', '').replace('>', '')
    sn = msg.split('\n')
    sq = msg.split('?')

    title1 = sn[0] if len(sn) > 1 else None
    title2 = "{}?".format(sq[0]) if len(sq) > 1 else None
    title = title1 or title2 or msg

    return title if title and len(title) >= 30 else None


@csrf_exempt
def slack2devolio(request):
    """
    Receives a message from Slack and creates a question based on the content.
    This endpoint get triggered, only if the Slack message contains a trigger
    word, usually '@devolio' or 'devolio'.
    """

    payload = request.POST

    # make sure the request is coming from Slack
    if payload.get('token') != SLACK_SLACK2DEVOLIO_TOKEN:
        return HttpResponse('Wrong token.', status=401)

    slack_username = payload.get('user_name')
    channel_name = payload.get('channel_name')
    trigger_word = payload.get('trigger_word')

    raw_msg = payload.get('text')
    msg = raw_msg[len(trigger_word):] # remove the trigger word from the msg

    if not msg or msg.strip() == 'help':
         return slack_msg(HELP_MSG.format(slack_username), channel_name)

    if len(msg) < 30:
        return slack_msg('The question is too short. Type `@devolio help` for help.',
                        channel_name)

    q = Question()

    # get and validate title
    q.title = parse_title(msg)
    if not q.title:
        return slack_msg('The message title is too short. Type `@devolio help` for help.',
                        channel_name)

    # the body
    q.body_md = '' if msg == q.title else msg.replace(q.title, '')

    # if Slack user has  Devolio account, link the question to them. Otherwise,
    # link it to the 'anonymous' user.
    anon = User.objects.get(username='anonymous')
    q.user = get_object_or_this(User, anon, profile__slack_handle=slack_username)
    q.save()
    q.tags.add(channel_name.replace('_', '-'))
    slack_question(q, channel_name)

    return HttpResponse('ok')
