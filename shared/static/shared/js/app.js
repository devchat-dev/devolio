/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var firebase = (function(){
/*! @license Firebase v3.7.5
    Build: 3.7.5-rc.1
    Terms: https://firebase.google.com/terms/ */
var firebase = null; (function() { var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,l=function(){l=function(){};k.Symbol||(k.Symbol=ba)},ca=0,ba=function(a){return"jscomp_symbol_"+(a||"")+ca++},p=function(){l();var a=k.Symbol.iterator;a||(a=k.Symbol.iterator=
k.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return m(this)}});p=function(){}},m=function(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},da=function(a){p();a={next:a};a[k.Symbol.iterator]=function(){return this};return a},r=this,t=function(){},u=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);
if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},v=function(a){return"function"==u(a)},ea=function(a,
b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},w=function(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return w.apply(null,arguments)},x=function(a,b){var c=Array.prototype.slice.call(arguments,
1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},y=function(a,b){function c(){}c.prototype=b.prototype;a.ha=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,h){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[c].apply(a,e)}};var A;A="undefined"!==typeof window?window:"undefined"!==typeof self?self:global;
var __extends=function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)},__assign=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a},__rest=function(a,b){var c={},d;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var e=
0;for(d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&(c[d[e]]=a[d[e]])}return c},__decorate=function(a,b,c,d){var e=arguments.length,h=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,g;g=A.Reflect;if("object"===typeof g&&"function"===typeof g.decorate)h=g.decorate(a,b,c,d);else for(var f=a.length-1;0<=f;f--)if(g=a[f])h=(3>e?g(h):3<e?g(b,c,h):g(b,c))||h;return 3<e&&h&&Object.defineProperty(b,c,h),h},__metadata=function(a,b){var c=A.Reflect;if("object"===typeof c&&"function"===
typeof c.metadata)return c.metadata(a,b)},__param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,h){function g(a){try{q(d.next(a))}catch(n){h(n)}}function f(a){try{q(d["throw"](a))}catch(n){h(n)}}function q(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(g,f)}q((d=d.apply(a,b)).next())})},__generator=function(a,b){function c(a){return function(b){return d([a,b])}}function d(c){if(h)throw new TypeError("Generator is already executing.");
for(;e;)try{if(h=1,g&&(f=g[c[0]&2?"return":c[0]?"throw":"next"])&&!(f=f.call(g,c[1])).done)return f;if(g=0,f)c=[0,f.value];switch(c[0]){case 0:case 1:f=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++;g=c[1];c=[0];continue;case 7:c=e.G.pop();e.I.pop();continue;default:if(!(f=e.I,f=0<f.length&&f[f.length-1])&&(6===c[0]||2===c[0])){e=0;continue}if(3===c[0]&&(!f||c[1]>f[0]&&c[1]<f[3]))e.label=c[1];else if(6===c[0]&&e.label<f[1])e.label=f[1],f=c;else if(f&&e.label<f[2])e.label=f[2],
e.G.push(c);else{f[2]&&e.G.pop();e.I.pop();continue}}c=b.call(a,e)}catch(z){c=[6,z],g=0}finally{h=f=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}var e={label:0,ga:function(){if(f[0]&1)throw f[1];return f[1]},I:[],G:[]},h,g,f;return{next:c(0),"throw":c(1),"return":c(2)}};
"undefined"!==typeof A.S&&A.S||(A.__extends=__extends,A.__assign=__assign,A.__rest=__rest,A.__extends=__extends,A.__decorate=__decorate,A.__metadata=__metadata,A.__param=__param,A.__awaiter=__awaiter,A.__generator=__generator);var B=function(a,b,c){this.Y=c;this.T=a;this.Z=b;this.s=0;this.o=null};B.prototype.get=function(){var a;0<this.s?(this.s--,a=this.o,this.o=a.next,a.next=null):a=this.T();return a};B.prototype.put=function(a){this.Z(a);this.s<this.Y&&(this.s++,a.next=this.o,this.o=a)};var C=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};y(C,Error);C.prototype.name="CustomError";var ga=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var D=function(a,b){b.unshift(a);C.call(this,ga.apply(null,b));b.shift()};y(D,C);D.prototype.name="AssertionError";var ha=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),h=d;else a&&(e+=": "+a,h=b);throw new D(""+e,h||[]);},E=function(a,b,c){a||ha("",null,b,Array.prototype.slice.call(arguments,2))},F=function(a,b,c){v(a)||ha("Expected function but got %s: %s.",[u(a),a],b,Array.prototype.slice.call(arguments,2))};var G;a:{var ia=r.navigator;if(ia){var ja=ia.userAgent;if(ja){G=ja;break a}}G=""};var H=function(){this.v=this.g=null},ka=new B(function(){return new I},function(a){a.reset()},100);H.prototype.add=function(a,b){var c=ka.get();c.set(a,b);this.v?this.v.next=c:(E(!this.g),this.g=c);this.v=c};H.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.v=null),a.next=null);return a};var I=function(){this.next=this.scope=this.B=null};I.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
I.prototype.reset=function(){this.next=this.scope=this.B=null};var la=function(a){r.setTimeout(function(){throw a;},0)},J,ma=function(){var a=r.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==G.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==G.indexOf("Trident")&&-1==G.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.J;c.J=null;a()}};return function(a){d.next={J:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){r.setTimeout(a,0)}};var M=function(a,b){K||na();L||(K(),L=!0);oa.add(a,b)},K,na=function(){if(-1!=String(r.Promise).indexOf("[native code]")){var a=r.Promise.resolve(void 0);K=function(){a.then(pa)}}else K=function(){var a=pa;!v(r.setImmediate)||r.Window&&r.Window.prototype&&-1==G.indexOf("Edge")&&r.Window.prototype.setImmediate==r.setImmediate?(J||(J=ma()),J(a)):r.setImmediate(a)}},L=!1,oa=new H,pa=function(){for(var a;a=oa.remove();){try{a.B.call(a.scope)}catch(b){la(b)}ka.put(a)}L=!1};var O=function(a,b){this.b=0;this.R=void 0;this.j=this.h=this.u=null;this.m=this.A=!1;if(a!=t)try{var c=this;a.call(b,function(a){N(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}N(c,3,a)})}catch(d){N(this,3,d)}},qa=function(){this.next=this.context=this.i=this.f=this.child=null;this.w=!1};qa.prototype.reset=function(){this.context=this.i=this.f=this.child=null;this.w=!1};
var ra=new B(function(){return new qa},function(a){a.reset()},100),sa=function(a,b,c){var d=ra.get();d.f=a;d.i=b;d.context=c;return d},ua=function(a,b,c){ta(a,b,c,null)||M(x(b,a))};O.prototype.then=function(a,b,c){null!=a&&F(a,"opt_onFulfilled should be a function.");null!=b&&F(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return va(this,v(a)?a:null,v(b)?b:null,c)};O.prototype.then=O.prototype.then;O.prototype.$goog_Thenable=!0;
O.prototype.ba=function(a,b){return va(this,null,a,b)};var xa=function(a,b){a.h||2!=a.b&&3!=a.b||wa(a);E(null!=b.f);a.j?a.j.next=b:a.h=b;a.j=b},va=function(a,b,c,d){var e=sa(null,null,null);e.child=new O(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(z){g(z)}}:a;e.i=c?function(b){try{var e=c.call(d,b);a(e)}catch(z){g(z)}}:g});e.child.u=a;xa(a,e);return e.child};O.prototype.da=function(a){E(1==this.b);this.b=0;N(this,2,a)};
O.prototype.ea=function(a){E(1==this.b);this.b=0;N(this,3,a)};
var N=function(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,ta(c,a.da,a.ea,a)||(a.R=c,a.b=b,a.u=null,wa(a),3!=b||ya(a,c)))},ta=function(a,b,c,d){if(a instanceof O)return null!=b&&F(b,"opt_onFulfilled should be a function."),null!=c&&F(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),xa(a,sa(b||t,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),
!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var h=a.then;if(v(h))return za(a,h,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1},za=function(a,b,c,d,e){var h=!1,g=function(a){h||(h=!0,c.call(e,a))},f=function(a){h||(h=!0,d.call(e,a))};try{b.call(a,g,f)}catch(q){f(q)}},wa=function(a){a.A||(a.A=!0,M(a.V,a))},Aa=function(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);null!=b&&E(null!=b.f);return b};
O.prototype.V=function(){for(var a;a=Aa(this);){var b=this.b,c=this.R;if(3==b&&a.i&&!a.w){var d;for(d=this;d&&d.m;d=d.u)d.m=!1}if(a.child)a.child.u=null,Ba(a,b,c);else try{a.w?a.f.call(a.context):Ba(a,b,c)}catch(e){Ca.call(null,e)}ra.put(a)}this.A=!1};var Ba=function(a,b,c){2==b?a.f.call(a.context,c):a.i&&a.i.call(a.context,c)},ya=function(a,b){a.m=!0;M(function(){a.m&&Ca.call(null,b)})},Ca=la;function P(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=P(a[c],b[c]));return a};O.all=function(a){return new O(function(b,c){var d=a.length,e=[];if(d)for(var h=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},f=0,q;f<a.length;f++)q=a[f],ua(q,x(h,f),g);else b(e)})};O.resolve=function(a){if(a instanceof O)return a;var b=new O(t);N(b,2,a);return b};O.reject=function(a){return new O(function(b,c){c(a)})};O.prototype["catch"]=O.prototype.ba;var Q=O;"undefined"!==typeof Promise&&(Q=Promise);var Da=Q;function Ea(a,b){a=new R(a,b);return a.subscribe.bind(a)}var R=function(a,b){var c=this;this.a=[];this.P=0;this.task=Da.resolve();this.l=!1;this.F=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};R.prototype.next=function(a){S(this,function(b){b.next(a)})};R.prototype.error=function(a){S(this,function(b){b.error(a)});this.close(a)};R.prototype.complete=function(){S(this,function(a){a.complete()});this.close()};
R.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Fa(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=T);void 0===e.error&&(e.error=T);void 0===e.complete&&(e.complete=T);a=this.fa.bind(this,this.a.length);this.l&&this.task.then(function(){try{d.K?e.error(d.K):e.complete()}catch(h){}});this.a.push(e);return a};
R.prototype.fa=function(a){void 0!==this.a&&void 0!==this.a[a]&&(delete this.a[a],--this.P,0===this.P&&void 0!==this.F&&this.F(this))};var S=function(a,b){if(!a.l)for(var c=0;c<a.a.length;c++)Ga(a,c,b)},Ga=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){"undefined"!==typeof console&&console.error&&console.error(d)}})};R.prototype.close=function(a){var b=this;this.l||(this.l=!0,void 0!==a&&(this.K=a),this.task.then(function(){b.a=void 0;b.F=void 0}))};
function Fa(a){if("object"!==typeof a||null===a)return!1;var b;b=["next","error","complete"];p();var c=b[Symbol.iterator];b=c?c.call(b):m(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function T(){};var Ha=Error.captureStackTrace,V=function(a,b){this.code=a;this.message=b;if(Ha)Ha(this,U.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};V.prototype=Object.create(Error.prototype);V.prototype.constructor=V;V.prototype.name="FirebaseError";var U=function(a,b,c){this.$=a;this.aa=b;this.U=c;this.pattern=/\{\$([^}]+)}/g};
U.prototype.create=function(a,b){void 0===b&&(b={});var c=this.U[a];a=this.$+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():"<"+c+"?>"}),c=this.aa+": "+c+" ("+a+").",c=new V(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};var W=Q,X=function(a,b,c){var d=this;this.M=c;this.N=!1;this.c={};this.D=b;this.H=P(void 0,a);a="serviceAccount"in this.H;("credential"in this.H||a)&&"undefined"!==typeof console&&console.log("The '"+(a?"serviceAccount":"credential")+"' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");Object.keys(c.INTERNAL.factories).forEach(function(a){var b=
c.INTERNAL.useAsService(d,a);null!==b&&(b=d.X.bind(d,b),d[a]=b)})};X.prototype.delete=function(){var a=this;return(new W(function(b){Y(a);b()})).then(function(){a.M.INTERNAL.removeApp(a.D);var b=[];Object.keys(a.c).forEach(function(c){Object.keys(a.c[c]).forEach(function(d){b.push(a.c[c][d])})});return W.all(b.map(function(a){return a.INTERNAL.delete()}))}).then(function(){a.N=!0;a.c={}})};
X.prototype.X=function(a,b){Y(this);"undefined"===typeof this.c[a]&&(this.c[a]={});var c=b||"[DEFAULT]";return"undefined"===typeof this.c[a][c]?(b=this.M.INTERNAL.factories[a](this,this.W.bind(this),b),this.c[a][c]=b):this.c[a][c]};X.prototype.W=function(a){P(this,a)};var Y=function(a){a.N&&Z("app-deleted",{name:a.D})};k.Object.defineProperties(X.prototype,{name:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.D}},options:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.H}}});
X.prototype.name&&X.prototype.options||X.prototype.delete||console.log("dc");
function Ia(){function a(a){a=a||"[DEFAULT]";var b=d[a];void 0===b&&Z("no-app",{name:a});return b}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&&h[d])h[d](b,a)})}function c(a,b){if("serverAuth"===b)return null;var c=b;a=a.options;"auth"===b&&(a.serviceAccount||a.credential)&&(c="serverAuth","serverAuth"in e||Z("sa-not-supported"));return c}var d={},e={},h={},g={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Z("bad-app-name",
{name:c+""});void 0!==d[c]&&Z("duplicate-app",{name:c});a=new X(a,c,g);d[c]=a;b(a,"create");void 0!=a.INTERNAL&&void 0!=a.INTERNAL.getToken||P(a,{INTERNAL:{getUid:function(){return null},getToken:function(){return W.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a},app:a,apps:null,Promise:W,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,c,d,n,Ja){e[b]&&Z("duplicate-service",{name:b});e[b]=Ja?c:function(a,b){return c(a,b,"[DEFAULT]")};n&&(h[b]=
n);n=function(c){void 0===c&&(c=a());"function"!==typeof c[b]&&Z("invalid-app-argument",{name:b});return c[b]()};void 0!==d&&P(n,d);return g[b]=n},createFirebaseNamespace:Ia,extendNamespace:function(a){P(g,a)},createSubscribe:Ea,ErrorFactory:U,removeApp:function(a){b(d[a],"delete");delete d[a]},factories:e,useAsService:c,Promise:O,deepExtend:P}};g["default"]=g;Object.defineProperty(g,"apps",{get:function(){return Object.keys(d).map(function(a){return d[a]})}});a.App=X;return g}
function Z(a,b){throw Ka.create(a,b);}
var Ka=new U("app","Firebase",{"no-app":"No Firebase App '{$name}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$name}","duplicate-app":"Firebase App named '{$name}' already exists","app-deleted":"Firebase App named '{$name}' already deleted","duplicate-service":"Firebase service named '{$name}' already registered","sa-not-supported":"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain","invalid-app-argument":"firebase.{$name}() takes either no argument or a Firebase App instance."});"undefined"!==typeof firebase&&(firebase=Ia()); }).call(this);
firebase.SDK_VERSION = "3.7.5";
return firebase;}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(5);

var _app = __webpack_require__(0);

var _app2 = _interopRequireDefault(_app);

var _database = __webpack_require__(4);

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dvdata = window.DEVOLIO_DATA;

// Initialize Firebase
_app2.default.initializeApp(dvdata.firebaseConfig);

var CSRFToken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var sendResponse = function sendResponse(data) {
    return fetch('/new_response', {
        method: 'POST',
        credentials: 'same-origin',
        headers: new Headers({ 'X-CSRFToken': CSRFToken }),
        body: JSON.stringify(data)
    });
};

var ResponseForm = function (_Component) {
    _inherits(ResponseForm, _Component);

    function ResponseForm(props) {
        _classCallCheck(this, ResponseForm);

        var _this = _possibleConstructorReturn(this, (ResponseForm.__proto__ || Object.getPrototypeOf(ResponseForm)).call(this, props));

        _this.state = { body: '', qid: dvdata.QID, statusMsg: '' };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.showRespMsg = _this.showRespMsg.bind(_this);
        return _this;
    }

    _createClass(ResponseForm, [{
        key: 'showRespMsg',
        value: function showRespMsg(msg) {
            var _this2 = this;

            this.setState({ statusMsg: msg });
            setTimeout(function (msg) {
                _this2.setState({ statusMsg: '' });
            }, 5000);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var _this3 = this;

            event.preventDefault();
            if (this.state.body.replace(/\s/g, '').length == 0) {
                return this.showRespMsg("Please provide a response.");
            }

            sendResponse({
                body: this.state.body,
                qid: this.state.qid
            }).then(function (resp) {
                resp.text().then(function (text) {
                    return _this3.showRespMsg(text);
                });
                if (resp.ok) _this3.setState({ body: '' });
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ body: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            if (dvdata.loggedIn) {
                return (0, _preact.h)(
                    'form',
                    { onSubmit: this.handleSubmit },
                    (0, _preact.h)('textarea', {
                        value: this.state.body,
                        onChange: this.handleChange
                    }),
                    (0, _preact.h)('input', { type: 'submit', className: 'button', value: 'Submit' }),
                    (0, _preact.h)(
                        'small',
                        null,
                        this.state.statusMsg
                    )
                );
            } else {
                return (0, _preact.h)(
                    'a',
                    {
                        'class': 'button',
                        href: "/users/login/?next=" + window.location.pathname },
                    'Login to leave a response!'
                );
            }
        }
    }]);

    return ResponseForm;
}(_preact.Component);

var App = function (_Component2) {
    _inherits(App, _Component2);

    function App() {
        var _ref;

        var _temp, _this4, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this4 = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this4), _this4.state = { responses: [] }, _temp), _possibleConstructorReturn(_this4, _ret);
    }

    _createClass(App, [{
        key: 'loadResponses',
        value: function loadResponses() {
            var _this5 = this;

            var responses = _app2.default.database().ref('question-responses/' + dvdata.QID);
            responses.on('value', function (items) {
                return _this5.setState({ responses: items.val() });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadResponses();
        }
    }, {
        key: 'renderResponses',
        value: function renderResponses(reps) {
            if (!reps) return;

            return Object.keys(reps).map(function (key) {
                return (0, _preact.h)(
                    'div',
                    { className: 'response' },
                    (0, _preact.h)(
                        'strong',
                        null,
                        (0, _preact.h)(
                            'a',
                            { href: "/@" + reps[key].user },
                            "@" + reps[key].user
                        )
                    ),
                    (0, _preact.h)('br', null),
                    (0, _preact.h)('div', { dangerouslySetInnerHTML: { __html: reps[key].body } })
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var reps = this.state.responses;
            return (0, _preact.h)(
                'div',
                { className: 'responses' },
                (0, _preact.h)(
                    'h3',
                    null,
                    'Responses ',
                    (0, _preact.h)(
                        'span',
                        { className: 'green-dot',
                            title: 'Updates in real-time' },
                        '\u2B24'
                    )
                ),
                (0, _preact.h)(
                    'p',
                    null,
                    'Offer your help. Be nice!'
                ),
                (0, _preact.h)(
                    'p',
                    null,
                    (0, _preact.h)(
                        'small',
                        null,
                        'You can use ',
                        (0, _preact.h)(
                            'a',
                            {
                                href: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet',
                                target: '_blank' },
                            'Markdown'
                        ),
                        '. The thread updates in real-time.'
                    )
                ),
                this.renderResponses(reps),
                (0, _preact.h)(ResponseForm, null)
            );
        }
    }]);

    return App;
}(_preact.Component);

(0, _preact.render)((0, _preact.h)(App, null), document.getElementById('responses-wrapper'));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var firebase = __webpack_require__(0);
(function(){
/*! @license Firebase v3.7.5
    Build: 3.7.5-rc.1
    Terms: https://firebase.google.com/terms/

    ---

    typedarray.js
    Copyright (c) 2010, Linden Research, Inc.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE. */
(function() {var g,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Vb=function(){return a.Ye?a.Ye:a.Ye=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}
function la(a,b){function c(){}c.prototype=b.prototype;a.wg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.sg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function ma(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function na(){this.Fd=void 0}
function oa(a,b,c){switch(typeof b){case "string":pa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],oa(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),pa(f,c),
c.push(":"),oa(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var qa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ra=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function pa(a,b){b.push('"',a.replace(ra,function(a){if(a in qa)return qa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return qa[a]=e+b.toString(16)}),'"')};function sa(){this.Wa=-1};function ta(){this.Wa=-1;this.Wa=64;this.M=[];this.Wd=[];this.Af=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Wa;++a)this.zd[a]=0;this.Pd=this.$b=0;this.reset()}la(ta,sa);ta.prototype.reset=function(){this.M[0]=1732584193;this.M[1]=4023233417;this.M[2]=2562383102;this.M[3]=271733878;this.M[4]=3285377520;this.Pd=this.$b=0};
function ua(a,b,c){c||(c=0);var d=a.Af;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.M[0];c=a.M[1];for(var h=a.M[2],k=a.M[3],m=a.M[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),l=1518500249):(f=c^h^k,l=1859775393):60>e?(f=c&h|k&(c|h),l=2400959708):(f=c^h^k,l=3395469782),f=(b<<
5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.M[0]=a.M[0]+b&4294967295;a.M[1]=a.M[1]+c&4294967295;a.M[2]=a.M[2]+h&4294967295;a.M[3]=a.M[3]+k&4294967295;a.M[4]=a.M[4]+m&4294967295}
ta.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.Wd,f=this.$b;d<b;){if(0==f)for(;d<=c;)ua(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){ua(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){ua(this,e);f=0;break}}this.$b=f;this.Pd+=b}};var r;a:{var va=aa.navigator;if(va){var wa=va.userAgent;if(wa){r=wa;break a}}r=""};var t=Array.prototype,xa=t.indexOf?function(a,b,c){return t.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ya=t.forEach?function(a,b,c){t.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=t.filter?function(a,b,c){return t.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},Aa=t.map?function(a,b,c){return t.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ba=t.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return t.reduce.apply(a,e)}:function(a,b,c,d){var e=c;ya(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Ca=t.every?function(a,b,
c){return t.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Da(a,b){var c=Ea(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Ea(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Fa(a,b){var c=xa(a,b);0<=c&&t.splice.call(a,c,1)}function Ga(a,b,c){return 2>=arguments.length?t.slice.call(a,b):t.slice.call(a,b,c)}
function Ha(a,b){a.sort(b||Ia)}function Ia(a,b){return a>b?1:a<b?-1:0};function v(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ja(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function Ka(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function La(a){var b=0,c;for(c in a)b++;return b}function Ma(a){for(var b in a)return b}function Na(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Oa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Pa(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Qa(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function Ra(a,b){var c=Qa(a,b,void 0);return c&&a[c]}function Sa(a){for(var b in a)return!1;return!0}function Ta(a){var b={},c;for(c in a)b[c]=a[c];return b};var Ua=-1!=r.indexOf("Opera")||-1!=r.indexOf("OPR"),Va=-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE"),Wa=-1!=r.indexOf("Gecko")&&-1==r.toLowerCase().indexOf("webkit")&&!(-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE")),Xa=-1!=r.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Ua&&aa.opera)return a=aa.opera.version,ha(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(r))?a[1]:"");return Va&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,h||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join("")}
function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a,b){if(!a)throw db(b);}function db(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function eb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function fb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function gb(a){var b=[];fb(a,function(a,d){ea(d)?ya(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var hb=firebase.Promise;function ib(){var a=this;this.reject=this.resolve=null;this.ra=new hb(function(b,c){a.resolve=b;a.reject=c})}function jb(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ha(b)&&(kb(a.ra),1===b.length?b(c):b(c,d))}}function kb(a){a.then(void 0,ba)};function lb(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):ma(a)}function x(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];oa(new na,a,b);a=b.join("")}return a};function mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,cb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function y(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function A(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function B(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(A(a,b,d)+"must be a valid function.");}function ob(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(A(a,b,!0)+"must be a valid context object.");};function pb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function C(a,b){this.name=a;this.R=b}function qb(a,b){return new C(a,b)};function rb(a,b){return sb(a.name,b.name)}function tb(a,b){return sb(a,b)};function ub(a){this.uc=a;this.Cd="firebase:"}g=ub.prototype;g.set=function(a,b){null==b?this.uc.removeItem(this.Cd+a):this.uc.setItem(this.Cd+a,x(b))};g.get=function(a){a=this.uc.getItem(this.Cd+a);return null==a?null:lb(a)};g.remove=function(a){this.uc.removeItem(this.Cd+a)};g.Ze=!1;g.toString=function(){return this.uc.toString()};function vb(){this.pc={}}vb.prototype.set=function(a,b){null==b?delete this.pc[a]:this.pc[a]=b};vb.prototype.get=function(a){return eb(this.pc,a)?this.pc[a]:null};vb.prototype.remove=function(a){delete this.pc[a]};vb.prototype.Ze=!0;function wb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new ub(b)}}catch(c){}return new vb}var xb=wb("localStorage"),yb=wb("sessionStorage");function zb(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.pe=c;this.qg=d;this.gf=e||"";this.$a=xb.get("host:"+a)||this.host}function Ab(a,b){b!==a.$a&&(a.$a=b,"s-"===a.$a.substr(0,2)&&xb.set("host:"+a.host,a.$a))}
function Bb(a,b,c){D("string"===typeof b,"typeof type must == string");D("object"===typeof c,"typeof params must == object");if(b===Cb)b=(a.Sc?"wss://":"ws://")+a.$a+"/.ws?";else if(b===Db)b=(a.Sc?"https://":"http://")+a.$a+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.$a&&(c.ns=a.pe);var d=[];v(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}zb.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.gf&&(a+="<"+this.gf+">");return a};function Eb(a,b){return a&&"object"===typeof a?(D(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Fb(a,b){var c=new Gb;Hb(a,new E(""),function(a,e){Ib(c,a,Jb(e,b))});return c}function Jb(a,b){var c=a.C().H(),c=Eb(c,b),d;if(a.J()){var e=Eb(a.Ca(),b);return e!==a.Ca()||c!==a.C().H()?new Kb(e,G(c)):a}d=a;c!==a.C().H()&&(d=d.fa(new Kb(c)));a.O(H,function(a,c){var e=Jb(c,b);e!==c&&(d=d.T(a,e))});return d};var Lb=function(){var a=1;return function(){return a++}}(),D=cb,Mb=db;
function Nb(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==m)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ga(d,c,c+8192));b=a}return b}catch(l){I("base64Decode failed: ",
l)}return null}function Ob(a){var b=mb(a);a=new ta;a.update(b);var b=[],c=8*a.Pd;56>a.$b?a.update(a.zd,56-a.$b):a.update(a.zd,a.Wa-(a.$b-56));for(var d=a.Wa-1;56<=d;d--)a.Wd[d]=c&255,c/=256;ua(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.M[d]>>e&255,++c;return ab(b)}function Pb(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Pb.apply(null,arguments[c]):"object"===typeof arguments[c]?b+x(arguments[c]):b+arguments[c],b+=" ";return b}var Qb=null,Rb=!0;
function Sb(a,b){cb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Qb=q(console.log,console):"object"===typeof console.log&&(Qb=function(a){console.log(a)})),b&&yb.set("logging_enabled",!0)):ha(a)?Qb=a:(Qb=null,yb.remove("logging_enabled"))}function I(a){!0===Rb&&(Rb=!1,null===Qb&&!0===yb.get("logging_enabled")&&Sb(!0));if(Qb){var b=Pb.apply(null,arguments);Qb(b)}}
function Tb(a){return function(){I(a,arguments)}}function Ub(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Pb.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Vb(a){var b=Pb.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function J(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Pb.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Wb(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(p(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var m=h[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(l){}f+="/"+m}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&Vb(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
c&&"undefined"!=c||Vb("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{jc:new zb(b,d,c,"ws"===e||"wss"===e),path:new E(f)}}function Xb(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function Yb(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function sb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Zb(a),d=Zb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function $b(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+x(b));}
function ac(a){if("object"!==typeof a||null===a)return x(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=x(b[d]),c+=":",c+=ac(a[b[d]]);return c+"}"}function bc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function cc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else v(a,b)}
function dc(a){D(!Xb(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var ec=/^-?\d{1,10}$/;function Zb(a){return ec.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function fc(a){try{a()}catch(b){setTimeout(function(){J("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function gc(a,b,c){Object.defineProperty(a,b,{get:c})}function hc(a,b){var c=setTimeout(a,b);"object"===typeof c&&c.unref&&c.unref();return c};function ic(a){var b={},c={},d={},e="";try{var f=a.split("."),b=lb(Nb(f[0])||""),c=lb(Nb(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{tg:b,Je:c,data:d,mg:e}}function jc(a){a=ic(a);var b=a.Je;return!!a.mg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function kc(a){a=ic(a).Je;return"object"===typeof a&&!0===w(a,"admin")};function lc(){}var mc={};function nc(a){return q(a.compare,a)}lc.prototype.nd=function(a,b){return 0!==this.compare(new C("[MIN_NAME]",a),new C("[MIN_NAME]",b))};lc.prototype.Hc=function(){return oc};function pc(a){D(!a.e()&&".priority"!==K(a),"Can't create PathIndex with empty path or .priority key");this.bc=a}la(pc,lc);g=pc.prototype;g.xc=function(a){return!a.P(this.bc).e()};g.compare=function(a,b){var c=a.R.P(this.bc),d=b.R.P(this.bc),c=c.sc(d);return 0===c?sb(a.name,b.name):c};
g.Ec=function(a,b){var c=G(a),c=L.F(this.bc,c);return new C(b,c)};g.Fc=function(){var a=L.F(this.bc,qc);return new C("[MAX_NAME]",a)};g.toString=function(){return this.bc.slice().join("/")};function rc(){}la(rc,lc);g=rc.prototype;g.compare=function(a,b){var c=a.R.C(),d=b.R.C(),c=c.sc(d);return 0===c?sb(a.name,b.name):c};g.xc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().Z(b.C())};g.Hc=function(){return oc};g.Fc=function(){return new C("[MAX_NAME]",new Kb("[PRIORITY-POST]",qc))};
g.Ec=function(a,b){var c=G(a);return new C(b,new Kb("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var H=new rc;function sc(){}la(sc,lc);g=sc.prototype;g.compare=function(a,b){return sb(a.name,b.name)};g.xc=function(){throw Mb("KeyIndex.isDefinedOn not expected to be called.");};g.nd=function(){return!1};g.Hc=function(){return oc};g.Fc=function(){return new C("[MAX_NAME]",L)};g.Ec=function(a){D(p(a),"KeyIndex indexValue must always be a string.");return new C(a,L)};g.toString=function(){return".key"};
var tc=new sc;function uc(){}la(uc,lc);g=uc.prototype;g.compare=function(a,b){var c=a.R.sc(b.R);return 0===c?sb(a.name,b.name):c};g.xc=function(){return!0};g.nd=function(a,b){return!a.Z(b)};g.Hc=function(){return oc};g.Fc=function(){return vc};g.Ec=function(a,b){var c=G(a);return new C(b,c)};g.toString=function(){return".value"};var wc=new uc;function xc(a,b){this.od=a;this.cc=b}xc.prototype.get=function(a){var b=w(this.od,a);if(!b)throw Error("No index defined for "+a);return b===mc?null:b};function yc(a,b,c){var d=Ja(a.od,function(d,f){var h=w(a.cc,f);D(h,"Missing index implementation for "+f);if(d===mc){if(h.xc(b.R)){for(var k=[],m=c.Wb(qb),l=M(m);l;)l.name!=b.name&&k.push(l),l=M(m);k.push(b);return zc(k,nc(h))}return mc}h=c.get(b.name);k=d;h&&(k=k.remove(new C(b.name,h)));return k.Oa(b,b.R)});return new xc(d,a.cc)}
function Ac(a,b,c){var d=Ja(a.od,function(a){if(a===mc)return a;var d=c.get(b.name);return d?a.remove(new C(b.name,d)):a});return new xc(d,a.cc)}var Bc=new xc({".priority":mc},{".priority":H});function Kb(a,b){this.B=a;D(n(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||L;Cc(this.aa);this.Db=null}var Dc=["object","boolean","number","string"];g=Kb.prototype;g.J=function(){return!0};g.C=function(){return this.aa};g.fa=function(a){return new Kb(this.B,a)};g.Q=function(a){return".priority"===a?this.aa:L};g.P=function(a){return a.e()?this:".priority"===K(a)?this.aa:L};g.Da=function(){return!1};g.Ve=function(){return null};
g.T=function(a,b){return".priority"===a?this.fa(b):b.e()&&".priority"!==a?this:L.T(a,b).fa(this.aa)};g.F=function(a,b){var c=K(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;D(".priority"!==c||1===Ec(a),".priority must be the last token in a path");return this.T(c,L.F(N(a),b))};g.e=function(){return!1};g.Eb=function(){return 0};g.O=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ca(),".priority":this.C().H()}:this.Ca()};
g.hash=function(){if(null===this.Db){var a="";this.aa.e()||(a+="priority:"+Fc(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+dc(this.B):a+this.B;this.Db=Ob(a)}return this.Db};g.Ca=function(){return this.B};g.sc=function(a){if(a===L)return 1;if(a instanceof O)return-1;D(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=xa(Dc,b),e=xa(Dc,c);D(0<=d,"Unknown leaf type: "+b);D(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
g.nb=function(){return this};g.yc=function(){return!0};g.Z=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.Z(a.aa):!1};g.toString=function(){return x(this.H(!0))};function Gc(){this.set={}}g=Gc.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return eb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return Sa(this.set)};g.count=function(){return La(this.set)};function Hc(a,b){v(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];v(this.set,function(b,c){a.push(c)});return a};function Ic(a){D(ea(a)&&0<a.length,"Requires a non-empty array");this.Bf=a;this.Dc={}}Ic.prototype.Ge=function(a,b){var c;c=this.Dc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Ie.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};Ic.prototype.gc=function(a,b,c){Jc(this,a);this.Dc[a]=this.Dc[a]||[];this.Dc[a].push({Ie:b,Ma:c});(a=this.Ue(a))&&b.apply(c,a)};
Ic.prototype.Ic=function(a,b,c){Jc(this,a);a=this.Dc[a]||[];for(var d=0;d<a.length;d++)if(a[d].Ie===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};function Jc(a,b){D(Da(a.Bf,function(a){return a===b}),"Unknown event: "+b)};var Kc=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);D(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);D(20===c.length,"nextPushId: Length should be 20.");
return c}}();function Lc(){Ic.call(this,["online"]);this.hc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!pb()){var a=this;window.addEventListener("online",function(){a.hc||(a.hc=!0,a.Ge("online",!0))},!1);window.addEventListener("offline",function(){a.hc&&(a.hc=!1,a.Ge("online",!1))},!1)}}la(Lc,Ic);Lc.prototype.Ue=function(a){D("online"===a,"Unknown event type: "+a);return[this.hc]};ca(Lc);function Mc(){Ic.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Mb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.Mb&&(c.Mb=b,c.Ge("visible",b))},!1)}}la(Mc,Ic);Mc.prototype.Ue=function(a){D("visible"===a,"Unknown event type: "+a);return[this.Mb]};ca(Mc);function E(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Y=0}else this.o=a,this.Y=b}function P(a,b){var c=K(a);if(null===c)return b;if(c===K(b))return P(N(a),N(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
function Nc(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=sb(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function K(a){return a.Y>=a.o.length?null:a.o[a.Y]}function Ec(a){return a.o.length-a.Y}function N(a){var b=a.Y;b<a.o.length&&b++;return new E(a.o,b)}function Oc(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}g=E.prototype;
g.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Y+(a||0))};g.parent=function(){if(this.Y>=this.o.length)return null;for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b]);return new E(a,0)};
g.n=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof E)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new E(b,0)};g.e=function(){return this.Y>=this.o.length};g.Z=function(a){if(Ec(this)!==Ec(a))return!1;for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
g.contains=function(a){var b=this.Y,c=a.Y;if(Ec(this)>Ec(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var Q=new E("");function Pc(a,b){this.Qa=a.slice();this.Ha=Math.max(1,this.Qa.length);this.Qe=b;for(var c=0;c<this.Qa.length;c++)this.Ha+=nb(this.Qa[c]);Qc(this)}Pc.prototype.push=function(a){0<this.Qa.length&&(this.Ha+=1);this.Qa.push(a);this.Ha+=nb(a);Qc(this)};Pc.prototype.pop=function(){var a=this.Qa.pop();this.Ha-=nb(a);0<this.Qa.length&&--this.Ha};
function Qc(a){if(768<a.Ha)throw Error(a.Qe+"has a key path longer than 768 bytes ("+a.Ha+").");if(32<a.Qa.length)throw Error(a.Qe+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Rc(a));}function Rc(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Sc(){this.children={};this.bd=0;this.value=null}function Tc(a,b,c){this.ud=a?a:"";this.Pc=b?b:null;this.A=c?c:new Sc}function Uc(a,b){for(var c=b instanceof E?b:new E(b),d=a,e;null!==(e=K(c));)d=new Tc(e,d,w(d.A.children,e)||new Sc),c=N(c);return d}g=Tc.prototype;g.Ca=function(){return this.A.value};function Vc(a,b){D("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Wc(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.bd=0;Wc(this)};
g.kd=function(){return 0<this.A.bd};g.e=function(){return null===this.Ca()&&!this.kd()};g.O=function(a){var b=this;v(this.A.children,function(c,d){a(new Tc(d,b,c))})};function Xc(a,b,c,d){c&&!d&&b(a);a.O(function(a){Xc(a,b,!0,d)});c&&d&&b(a)}function Yc(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new E(null===this.Pc?this.ud:this.Pc.path()+"/"+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Pc};
function Wc(a){if(null!==a.Pc){var b=a.Pc,c=a.ud,d=a.e(),e=eb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.bd--,Wc(b)):d||e||(b.A.children[c]=a.A,b.A.bd++,Wc(b))}};function Zc(a,b){this.La=a;this.ba=b?b:$c}g=Zc.prototype;g.Oa=function(a,b){return new Zc(this.La,this.ba.Oa(a,b,this.La).X(null,null,!1,null,null))};g.remove=function(a){return new Zc(this.La,this.ba.remove(a,this.La).X(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ba;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function ad(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ba.e()};g.count=function(){return this.ba.count()};g.Gc=function(){return this.ba.Gc()};g.ec=function(){return this.ba.ec()};g.ha=function(a){return this.ba.ha(a)};
g.Wb=function(a){return new bd(this.ba,null,this.La,!1,a)};g.Xb=function(a,b){return new bd(this.ba,a,this.La,!1,b)};g.Zb=function(a,b){return new bd(this.ba,a,this.La,!0,b)};g.We=function(a){return new bd(this.ba,null,this.La,!0,a)};function bd(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.le?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.le?a.right:a.left}
function M(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function cd(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function dd(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:$c;this.right=null!=e?e:$c}g=dd.prototype;
g.X=function(a,b,c,d,e){return new dd(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)};function ed(a){return a.left.e()?a:ed(a.left)}g.Gc=function(){return ed(this).key};g.ec=function(){return this.right.e()?this.key:this.right.ec()};
g.Oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Oa(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Oa(a,b,c));return gd(e)};function hd(a){if(a.left.e())return $c;a.left.ea()||a.left.left.ea()||(a=id(a));a=a.X(null,null,null,hd(a.left),null);return gd(a)}
g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ea()||c.left.left.ea()||(c=id(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.ea()&&(c=jd(c));c.right.e()||c.right.ea()||c.right.left.ea()||(c=kd(c),c.left.left.ea()&&(c=jd(c),c=kd(c)));if(0===b(a,c.key)){if(c.right.e())return $c;d=ed(c.right);c=c.X(d.key,d.value,null,null,hd(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return gd(c)};g.ea=function(){return this.color};
function gd(a){a.right.ea()&&!a.left.ea()&&(a=ld(a));a.left.ea()&&a.left.left.ea()&&(a=jd(a));a.left.ea()&&a.right.ea()&&(a=kd(a));return a}function id(a){a=kd(a);a.right.left.ea()&&(a=a.X(null,null,null,null,jd(a.right)),a=ld(a),a=kd(a));return a}function ld(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function jd(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function kd(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function md(){}g=md.prototype;g.X=function(){return this};g.Oa=function(a,b){return new dd(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ha=function(){return!1};g.Gc=function(){return null};g.ec=function(){return null};g.ea=function(){return!1};var $c=new md;function O(a,b,c){this.k=a;(this.aa=b)&&Cc(this.aa);a.e()&&D(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.yb=c;this.Db=null}g=O.prototype;g.J=function(){return!1};g.C=function(){return this.aa||L};g.fa=function(a){return this.k.e()?this:new O(this.k,a,this.yb)};g.Q=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?L:a};g.P=function(a){var b=K(a);return null===b?this:this.Q(b).P(N(a))};g.Da=function(a){return null!==this.k.get(a)};
g.T=function(a,b){D(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.fa(b);var c=new C(a,b),d,e;b.e()?(d=this.k.remove(a),c=Ac(this.yb,c,this.k)):(d=this.k.Oa(a,b),c=yc(this.yb,c,this.k));e=d.e()?L:this.aa;return new O(d,e,c)};g.F=function(a,b){var c=K(a);if(null===c)return b;D(".priority"!==K(a)||1===Ec(a),".priority must be the last token in a path");var d=this.Q(c).F(N(a),b);return this.T(c,d)};g.e=function(){return this.k.e()};g.Eb=function(){return this.k.count()};
var nd=/^(0|[1-9]\d*)$/;g=O.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.O(H,function(f,h){b[f]=h.H(a);c++;e&&nd.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Db){var a="";this.C().e()||(a+="priority:"+Fc(this.C().H())+":");this.O(H,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Db=""===a?"":Ob(a)}return this.Db};
g.Ve=function(a,b,c){return(c=od(this,c))?(a=ad(c,new C(a,b)))?a.name:null:ad(this.k,a)};function pd(a,b){var c;c=(c=od(a,b))?(c=c.Gc())&&c.name:a.k.Gc();return c?new C(c,a.k.get(c)):null}function qd(a,b){var c;c=(c=od(a,b))?(c=c.ec())&&c.name:a.k.ec();return c?new C(c,a.k.get(c)):null}g.O=function(a,b){var c=od(this,a);return c?c.ha(function(a){return b(a.name,a.R)}):this.k.ha(b)};g.Wb=function(a){return this.Xb(a.Hc(),a)};
g.Xb=function(a,b){var c=od(this,b);if(c)return c.Xb(a,function(a){return a});for(var c=this.k.Xb(a.name,qb),d=cd(c);null!=d&&0>b.compare(d,a);)M(c),d=cd(c);return c};g.We=function(a){return this.Zb(a.Fc(),a)};g.Zb=function(a,b){var c=od(this,b);if(c)return c.Zb(a,function(a){return a});for(var c=this.k.Zb(a.name,qb),d=cd(c);null!=d&&0<b.compare(d,a);)M(c),d=cd(c);return c};g.sc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===qc?-1:0};
g.nb=function(a){if(a===tc||Pa(this.yb.cc,a.toString()))return this;var b=this.yb,c=this.k;D(a!==tc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Wb(qb),f=M(c);f;)e=e||a.xc(f.R),d.push(f),f=M(c);d=e?zc(d,nc(a)):mc;e=a.toString();c=Ta(b.cc);c[e]=a;a=Ta(b.od);a[e]=d;return new O(this.k,this.aa,new xc(a,c))};g.yc=function(a){return a===tc||Pa(this.yb.cc,a.toString())};
g.Z=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().Z(a.C())&&this.k.count()===a.k.count()){var b=this.Wb(H);a=a.Wb(H);for(var c=M(b),d=M(a);c&&d;){if(c.name!==d.name||!c.R.Z(d.R))return!1;c=M(b);d=M(a)}return null===c&&null===d}return!1};function od(a,b){return b===tc?null:a.yb.get(b.toString())}g.toString=function(){return x(this.H(!0))};function G(a,b){if(null===a)return L;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);D(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Kb(a,G(c));if(a instanceof Array){var d=L,e=a;v(e,function(a,b){if(eb(e,b)&&"."!==b.substring(0,1)){var c=G(a);if(c.J()||!c.e())d=
d.T(b,c)}});return d.fa(G(c))}var f=[],h=!1,k=a;fb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=G(k[a]);b.e()||(h=h||!b.C().e(),f.push(new C(a,b)))}});if(0==f.length)return L;var m=zc(f,rb,function(a){return a.name},tb);if(h){var l=zc(f,nc(H));return new O(m,G(c),new xc({".priority":l},{".priority":H}))}return new O(m,G(c),Bc)}var rd=Math.log(2);
function sd(a){this.count=parseInt(Math.log(a+1)/rd,10);this.Oe=this.count-1;this.Cf=a+1&parseInt(Array(this.count+1).join("1"),2)}function td(a){var b=!(a.Cf&1<<a.Oe);a.Oe--;return b}
function zc(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new dd(u,l.R,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new dd(u,l.R,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],F=c?c(k):k,z=new dd(F,k.R,h,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var F=td(b),fd=Math.pow(2,b.count-(z+1));F?d(fd,!1):(d(fd,!1),d(fd,!0))}return l}(new sd(a.length));
return null!==f?new Zc(d||b,f):new Zc(d||b)}function Fc(a){return"number"===typeof a?"number:"+dc(a):"string:"+a}function Cc(a){if(a.J()){var b=a.H();D("string"===typeof b||"number"===typeof b||"object"===typeof b&&eb(b,".sv"),"Priority must be a string or number.")}else D(a===qc||a.e(),"priority of unexpected type.");D(a===qc||a.C().e(),"Priority nodes can't have a priority of their own.")}var L=new O(new Zc(tb),null,Bc);function ud(){O.call(this,new Zc(tb),L,Bc)}la(ud,O);g=ud.prototype;
g.sc=function(a){return a===this?0:1};g.Z=function(a){return a===this};g.C=function(){return this};g.Q=function(){return L};g.e=function(){return!1};var qc=new ud,oc=new C("[MIN_NAME]",L),vc=new C("[MAX_NAME]",qc);function vd(a,b){this.value=a;this.children=b||wd}var wd=new Zc(function(a,b){return a===b?0:a<b?-1:1});function xd(a){var b=R;v(a,function(a,d){b=b.set(new E(d),a)});return b}g=vd.prototype;g.e=function(){return null===this.value&&this.children.e()};function yd(a,b,c){if(null!=a.value&&c(a.value))return{path:Q,value:a.value};if(b.e())return null;var d=K(b);a=a.children.get(d);return null!==a?(b=yd(a,N(b),c),null!=b?{path:(new E(d)).n(b.path),value:b.value}:null):null}
function zd(a,b){return yd(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(K(a));return null!==b?b.subtree(N(a)):R};g.set=function(a,b){if(a.e())return new vd(b,this.children);var c=K(a),d=(this.children.get(c)||R).set(N(a),b),c=this.children.Oa(c,d);return new vd(this.value,c)};
g.remove=function(a){if(a.e())return this.children.e()?R:new vd(null,this.children);var b=K(a),c=this.children.get(b);return c?(a=c.remove(N(a)),b=a.e()?this.children.remove(b):this.children.Oa(b,a),null===this.value&&b.e()?R:new vd(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(K(a));return b?b.get(N(a)):null};
function Ad(a,b,c){if(b.e())return c;var d=K(b);b=Ad(a.children.get(d)||R,N(b),c);d=b.e()?a.children.remove(d):a.children.Oa(d,b);return new vd(a.value,d)}function Bd(a,b){return Cd(a,Q,b)}function Cd(a,b,c){var d={};a.children.ha(function(a,f){d[a]=Cd(f,b.n(a),c)});return c(b,a.value,d)}function Dd(a,b,c){return Ed(a,b,Q,c)}function Ed(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=K(b);return(a=a.children.get(e))?Ed(a,N(b),c.n(e),d):null}
function Fd(a,b,c){Gd(a,b,Q,c)}function Gd(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=K(b);return(a=a.children.get(e))?Gd(a,N(b),c.n(e),d):R}function Hd(a,b){Id(a,Q,b)}function Id(a,b,c){a.children.ha(function(a,e){Id(e,b.n(a),c)});a.value&&c(b,a.value)}function Jd(a,b){a.children.ha(function(a,d){d.value&&b(a,d.value)})}var R=new vd(null);vd.prototype.toString=function(){var a={};Hd(this,function(b,c){a[b.toString()]=c.toString()});return x(a)};var Kd=/[\[\].#$\/\u0000-\u001F\u007F]/,Ld=/[\[\].#$\u0000-\u001F\u007F]/;function Md(a){return p(a)&&0!==a.length&&!Kd.test(a)}function Nd(a){return null===a||p(a)||ga(a)&&!Xb(a)||ia(a)&&eb(a,".sv")}function Od(a,b,c,d){d&&!n(b)||Pd(A(a,1,d),b,c)}
function Pd(a,b,c){c instanceof E&&(c=new Pc(c,a));if(!n(b))throw Error(a+"contains undefined "+Rc(c));if(ha(b))throw Error(a+"contains a function "+Rc(c)+" with contents: "+b.toString());if(Xb(b))throw Error(a+"contains "+b.toString()+" "+Rc(c));if(p(b)&&b.length>10485760/3&&10485760<nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Rc(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;fb(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!Md(b)))throw Error(a+" contains an invalid key ("+b+") "+Rc(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Pd(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Rc(c)+" in addition to actual children.");}}
function Qd(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Md(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Nc);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
function Rd(a,b,c){var d=A(a,1,!1);if(!ia(b)||ea(b))throw Error(d+" must be an object containing the children to replace.");var e=[];fb(b,function(a,b){var k=new E(a);Pd(d,b,c.n(k));if(".priority"===Oc(k)&&!Nd(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});Qd(d,e)}
function Sd(a,b,c){if(Xb(c))throw Error(A(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Nd(c))throw Error(A(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Td(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(A(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Ud(a,b){if(n(b)&&!Md(b))throw Error(A(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Vd(a,b){if(!p(b)||0===b.length||Ld.test(b))throw Error(A(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Wd(a,b){if(".info"===K(b))throw Error(a+" failed: Can't modify data under /.info/");}
function Xd(a,b){var c=b.path.toString(),d;!(d=!p(b.jc.host)||0===b.jc.host.length||!Md(b.jc.pe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(p(c)&&0!==c.length&&!Ld.test(c)));if(d)throw Error(A(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function Gb(){this.k=this.B=null}Gb.prototype.find=function(a){if(null!=this.B)return this.B.P(a);if(a.e()||null==this.k)return null;var b=K(a);a=N(a);return this.k.contains(b)?this.k.get(b).find(a):null};function Ib(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new Gc);var d=K(b);a.k.contains(d)||a.k.add(d,new Gb);a=a.k.get(d);b=N(b);Ib(a,b,c)}}
function Yd(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.O(H,function(b,c){Ib(a,new E(b),c)});return Yd(a,b)}return null!==a.k?(c=K(b),b=N(b),a.k.contains(c)&&Yd(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function Hb(a,b,c){null!==a.B?c(b,a.B):a.O(function(a,e){var f=new E(b.toString()+"/"+a);Hb(e,f,c)})}Gb.prototype.O=function(a){null!==this.k&&Hc(this.k,function(b,c){a(b,c)})};function Zd(a,b){this.type=$d;this.source=a;this.path=b}Zd.prototype.Mc=function(){return this.path.e()?new Zd(this.source,Q):new Zd(this.source,N(this.path))};Zd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ae(a,b,c){this.type=be;this.source=a;this.path=b;this.children=c}ae.prototype.Mc=function(a){if(this.path.e())return a=this.children.subtree(new E(a)),a.e()?null:a.value?new ce(this.source,Q,a.value):new ae(this.source,Q,a);D(K(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new ae(this.source,N(this.path),this.children)};ae.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function de(a,b,c){this.type=ee;this.source=fe;this.path=a;this.Ob=b;this.Id=c}de.prototype.Mc=function(a){if(this.path.e()){if(null!=this.Ob.value)return D(this.Ob.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Ob.subtree(new E(a));return new de(Q,a,this.Id)}D(K(this.path)===a,"operationForChild called for unrelated child.");return new de(N(this.path),this.Ob,this.Id)};
de.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Ob+")"};function ce(a,b,c){this.type=ge;this.source=a;this.path=b;this.Ga=c}ce.prototype.Mc=function(a){return this.path.e()?new ce(this.source,Q,this.Ga.Q(a)):new ce(this.source,N(this.path),this.Ga)};ce.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};var ge=0,be=1,ee=2,$d=3;function he(a,b,c,d){this.ee=a;this.Se=b;this.Hb=c;this.Ee=d;D(!d||b,"Tagged queries must be from server.")}var fe=new he(!0,!1,null,!1),ie=new he(!1,!0,null,!1);he.prototype.toString=function(){return this.ee?"user":this.Ee?"server(queryID="+this.Hb+")":"server"};function je(a,b,c){this.A=a;this.da=b;this.Sb=c}function ke(a){return a.da}function le(a){return a.Sb}function me(a,b){return b.e()?a.da&&!a.Sb:ne(a,K(b))}function ne(a,b){return a.da&&!a.Sb||a.A.Da(b)}je.prototype.j=function(){return this.A};function oe(a,b){this.N=a;this.Ld=b}function pe(a,b,c,d){return new oe(new je(b,c,d),a.Ld)}function qe(a){return a.N.da?a.N.j():null}oe.prototype.w=function(){return this.Ld};function re(a){return a.Ld.da?a.Ld.j():null};function se(){}se.prototype.Te=function(){return null};se.prototype.fe=function(){return null};var te=new se;function ue(a,b,c){this.xf=a;this.Ka=b;this.yd=c}ue.prototype.Te=function(a){var b=this.Ka.N;if(ne(b,a))return b.j().Q(a);b=null!=this.yd?new je(this.yd,!0,!1):this.Ka.w();return this.xf.qc(a,b)};ue.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:re(this.Ka);a=this.xf.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function ve(a,b){this.Sd=a;this.Df=b}function we(a){this.U=a}
we.prototype.eb=function(a,b,c,d){var e=new xe,f;if(b.type===ge)b.source.ee?c=ye(this,a,b.path,b.Ga,c,d,e):(D(b.source.Se,"Unknown source."),f=b.source.Ee||le(a.w())&&!b.path.e(),c=ze(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===be)b.source.ee?c=Ae(this,a,b.path,b.children,c,d,e):(D(b.source.Se,"Unknown source."),f=b.source.Ee||le(a.w()),c=Be(this,a,b.path,b.children,c,d,f,e));else if(b.type===ee)if(b.Id)if(b=b.path,null!=c.lc(b))c=a;else{f=new ue(c,a,d);d=a.N.j();if(b.e()||".priority"===K(b))ke(a.w())?
b=c.Aa(re(a)):(b=a.w().j(),D(b instanceof O,"serverChildren would be complete if leaf node"),b=c.rc(b)),b=this.U.ya(d,b,e);else{var h=K(b),k=c.qc(h,a.w());null==k&&ne(a.w(),h)&&(k=d.Q(h));b=null!=k?this.U.F(d,h,k,N(b),f,e):a.N.j().Da(h)?this.U.F(d,h,L,N(b),f,e):d;b.e()&&ke(a.w())&&(d=c.Aa(re(a)),d.J()&&(b=this.U.ya(b,d,e)))}d=ke(a.w())||null!=c.lc(Q);c=pe(a,b,d,this.U.Na())}else c=Ce(this,a,b.path,b.Ob,c,d,e);else if(b.type===$d)d=b.path,b=a.w(),f=b.j(),h=b.da||d.e(),c=De(this,new oe(a.N,new je(f,
h,b.Sb)),d,c,te,e);else throw Mb("Unknown operation type: "+b.type);e=Na(e.fb);d=c;b=d.N;b.da&&(f=b.j().J()||b.j().e(),h=qe(a),(0<e.length||!a.N.da||f&&!b.j().Z(h)||!b.j().C().Z(h.C()))&&e.push(Ee(qe(d))));return new ve(c,e)};
function De(a,b,c,d,e,f){var h=b.N;if(null!=d.lc(c))return b;var k;if(c.e())D(ke(b.w()),"If change path is empty, we must have complete server data"),le(b.w())?(e=re(b),d=d.rc(e instanceof O?e:L)):d=d.Aa(re(b)),f=a.U.ya(b.N.j(),d,f);else{var m=K(c);if(".priority"==m)D(1==Ec(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.ad(c,f,k),f=null!=d?a.U.fa(f,d):h.j();else{var l=N(c);ne(h,m)?(k=b.w().j(),d=d.ad(c,h.j(),k),d=null!=d?h.j().Q(m).F(l,d):h.j().Q(m)):d=d.qc(m,
b.w());f=null!=d?a.U.F(h.j(),m,d,l,e,f):h.j()}}return pe(b,f,h.da||c.e(),a.U.Na())}function ze(a,b,c,d,e,f,h,k){var m=b.w();h=h?a.U:a.U.Ub();if(c.e())d=h.ya(m.j(),d,null);else if(h.Na()&&!m.Sb)d=m.j().F(c,d),d=h.ya(m.j(),d,null);else{var l=K(c);if(!me(m,c)&&1<Ec(c))return b;var u=N(c);d=m.j().Q(l).F(u,d);d=".priority"==l?h.fa(m.j(),d):h.F(m.j(),l,d,u,te,null)}m=m.da||c.e();b=new oe(b.N,new je(d,m,h.Na()));return De(a,b,c,e,new ue(e,b,f),k)}
function ye(a,b,c,d,e,f,h){var k=b.N;e=new ue(e,b,f);if(c.e())h=a.U.ya(b.N.j(),d,h),a=pe(b,h,!0,a.U.Na());else if(f=K(c),".priority"===f)h=a.U.fa(b.N.j(),d),a=pe(b,h,k.da,k.Sb);else{c=N(c);var m=k.j().Q(f);if(!c.e()){var l=e.Te(f);d=null!=l?".priority"===Oc(c)&&l.P(c.parent()).e()?l:l.F(c,d):L}m.Z(d)?a=b:(h=a.U.F(k.j(),f,d,c,e,h),a=pe(b,h,k.da,a.U.Na()))}return a}
function Ae(a,b,c,d,e,f,h){var k=b;Hd(d,function(d,l){var u=c.n(d);ne(b.N,K(u))&&(k=ye(a,k,u,l,e,f,h))});Hd(d,function(d,l){var u=c.n(d);ne(b.N,K(u))||(k=ye(a,k,u,l,e,f,h))});return k}function Fe(a,b){Hd(b,function(b,d){a=a.F(b,d)});return a}
function Be(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!ke(b.w()))return b;var m=b;c=c.e()?d:Ad(R,c,d);var l=b.w().j();c.children.ha(function(c,d){if(l.Da(c)){var F=b.w().j().Q(c),F=Fe(F,d);m=ze(a,m,new E(c),F,e,f,h,k)}});c.children.ha(function(c,d){var F=!ne(b.w(),c)&&null==d.value;l.Da(c)||F||(F=b.w().j().Q(c),F=Fe(F,d),m=ze(a,m,new E(c),F,e,f,h,k))});return m}
function Ce(a,b,c,d,e,f,h){if(null!=e.lc(c))return b;var k=le(b.w()),m=b.w();if(null!=d.value){if(c.e()&&m.da||me(m,c))return ze(a,b,c,m.j().P(c),e,f,k,h);if(c.e()){var l=R;m.j().O(tc,function(a,b){l=l.set(new E(a),b)});return Be(a,b,c,l,e,f,k,h)}return b}l=R;Hd(d,function(a){var b=c.n(a);me(m,b)&&(l=l.set(a,m.j().P(b)))});return Be(a,b,c,l,e,f,k,h)};function Ge(a){this.V=a;this.g=a.m.g}function He(a,b,c,d){var e=[],f=[];ya(b,function(b){b.type===Ie&&a.g.nd(b.qe,b.Ja)&&f.push(new S(Je,b.Ja,b.Xa))});Ke(a,e,Le,b,d,c);Ke(a,e,Me,b,d,c);Ke(a,e,Je,f,d,c);Ke(a,e,Ie,b,d,c);Ke(a,e,Ne,b,d,c);return e}function Ke(a,b,c,d,e,f){d=za(d,function(a){return a.type===c});Ha(d,q(a.Ff,a));ya(d,function(c){var d=Oe(a,c,f);ya(e,function(e){e.nf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function Oe(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ve(b.Xa,b.Ja,a.g));return b}Ge.prototype.Ff=function(a,b){if(null==a.Xa||null==b.Xa)throw Mb("Should only compare child_ events.");return this.g.compare(new C(a.Xa,a.Ja),new C(b.Xa,b.Ja))};function Pe(a,b){this.V=a;var c=a.m,d=new Qe(c.g),c=T(c)?new Qe(c.g):c.xa?new Re(c):new Se(c);this.hf=new we(c);var e=b.w(),f=b.N,h=d.ya(L,e.j(),null),k=c.ya(L,f.j(),null);this.Ka=new oe(new je(k,f.da,c.Na()),new je(h,e.da,d.Na()));this.Za=[];this.Jf=new Ge(a)}function Te(a){return a.V}g=Pe.prototype;g.w=function(){return this.Ka.w().j()};g.hb=function(a){var b=re(this.Ka);return b&&(T(this.V.m)||!a.e()&&!b.Q(K(a)).e())?b.P(a):null};g.e=function(){return 0===this.Za.length};g.Nb=function(a){this.Za.push(a)};
g.kb=function(a,b){var c=[];if(b){D(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;ya(this.Za,function(a){(a=a.Me(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var h=this.Za[f];if(!h.matches(a))e.push(h);else if(a.Xe()){e=e.concat(this.Za.slice(f+1));break}}this.Za=e}else this.Za=[];return c};
g.eb=function(a,b,c){a.type===be&&null!==a.source.Hb&&(D(re(this.Ka),"We should always have a full cache before handling merges"),D(qe(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.hf.eb(d,a,b,c);b=this.hf;c=a.Sd;D(c.N.j().yc(b.U.g),"Event snap not indexed");D(c.w().j().yc(b.U.g),"Server snap not indexed");D(ke(a.Sd.w())||!ke(d.w()),"Once a server snap is complete, it should never go back");this.Ka=a.Sd;return Ue(this,a.Df,a.Sd.N.j(),null)};
function Ve(a,b){var c=a.Ka.N,d=[];c.j().J()||c.j().O(H,function(a,b){d.push(new S(Me,b,a))});c.da&&d.push(Ee(c.j()));return Ue(a,d,c.j(),b)}function Ue(a,b,c,d){return He(a.Jf,b,c,d?[d]:a.Za)};function We(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.hd=a}We.prototype.Yb=function(){var a=this.Md.wb();return"value"===this.hd?a.path:a.getParent().path};We.prototype.ge=function(){return this.hd};We.prototype.Tb=function(){return this.ae.Tb(this)};We.prototype.toString=function(){return this.Yb().toString()+":"+this.hd+":"+x(this.Md.be())};function Xe(a,b,c){this.ae=a;this.error=b;this.path=c}Xe.prototype.Yb=function(){return this.path};Xe.prototype.ge=function(){return"cancel"};
Xe.prototype.Tb=function(){return this.ae.Tb(this)};Xe.prototype.toString=function(){return this.path.toString()+":cancel"};function Ye(){this.vb=[]}function Ze(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Yb();null===c||f.Z(c.Yb())||(a.vb.push(c),c=null);null===c&&(c=new $e(f));c.add(e)}c&&a.vb.push(c)}function af(a,b,c){Ze(a,c);bf(a,function(a){return a.Z(b)})}function cf(a,b,c){Ze(a,c);bf(a,function(a){return a.contains(b)||b.contains(a)})}
function bf(a,b){for(var c=!0,d=0;d<a.vb.length;d++){var e=a.vb[d];if(e)if(e=e.Yb(),b(e)){for(var e=a.vb[d],f=0;f<e.jd.length;f++){var h=e.jd[f];if(null!==h){e.jd[f]=null;var k=h.Tb();Qb&&I("event: "+h.toString());fc(k)}}a.vb[d]=null}else c=!1}c&&(a.vb=[])}function $e(a){this.qa=a;this.jd=[]}$e.prototype.add=function(a){this.jd.push(a)};$e.prototype.Yb=function(){return this.qa};function Qe(a){this.g=a}g=Qe.prototype;g.F=function(a,b,c,d,e,f){D(a.yc(this.g),"A node must be indexed if only a child is updated");e=a.Q(b);if(e.P(d).Z(c.P(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Da(b)?df(f,new S(Le,e,b)):D(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?df(f,new S(Me,c,b)):df(f,new S(Ie,c,b,e)));return a.J()&&c.e()?a:a.T(b,c).nb(this.g)};
g.ya=function(a,b,c){null!=c&&(a.J()||a.O(H,function(a,e){b.Da(a)||df(c,new S(Le,e,a))}),b.J()||b.O(H,function(b,e){if(a.Da(b)){var f=a.Q(b);f.Z(e)||df(c,new S(Ie,e,b,f))}else df(c,new S(Me,e,b))}));return b.nb(this.g)};g.fa=function(a,b){return a.e()?L:a.fa(b)};g.Na=function(){return!1};g.Ub=function(){return this};function Se(a){this.he=new Qe(a.g);this.g=a.g;var b;a.ka?(b=ef(a),b=a.g.Ec(ff(a),b)):b=a.g.Hc();this.Uc=b;a.na?(b=gf(a),a=a.g.Ec(hf(a),b)):a=a.g.Fc();this.vc=a}g=Se.prototype;g.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.vc)};g.F=function(a,b,c,d,e,f){this.matches(new C(b,c))||(c=L);return this.he.F(a,b,c,d,e,f)};
g.ya=function(a,b,c){b.J()&&(b=L);var d=b.nb(this.g),d=d.fa(L),e=this;b.O(H,function(a,b){e.matches(new C(a,b))||(d=d.T(a,L))});return this.he.ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.he};function Re(a){this.sa=new Se(a);this.g=a.g;D(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Ib=!jf(a)}g=Re.prototype;g.F=function(a,b,c,d,e,f){this.sa.matches(new C(b,c))||(c=L);return a.Q(b).Z(c)?a:a.Eb()<this.oa?this.sa.Ub().F(a,b,c,d,e,f):kf(this,a,b,c,e,f)};
g.ya=function(a,b,c){var d;if(b.J()||b.e())d=L.nb(this.g);else if(2*this.oa<b.Eb()&&b.yc(this.g)){d=L.nb(this.g);b=this.Ib?b.Zb(this.sa.vc,this.g):b.Xb(this.sa.Uc,this.g);for(var e=0;0<b.Pa.length&&e<this.oa;){var f=M(b),h;if(h=this.Ib?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.vc))d=d.T(f.name,f.R),e++;else break}}else{d=b.nb(this.g);d=d.fa(L);var k,m,l;if(this.Ib){b=d.We(this.g);k=this.sa.vc;m=this.sa.Uc;var u=nc(this.g);l=function(a,b){return u(b,a)}}else b=d.Wb(this.g),k=this.sa.Uc,
m=this.sa.vc,l=nc(this.g);for(var e=0,z=!1;0<b.Pa.length;)f=M(b),!z&&0>=l(k,f)&&(z=!0),(h=z&&e<this.oa&&0>=l(f,m))?e++:d=d.T(f.name,L)}return this.sa.Ub().ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.sa.Ub()};
function kf(a,b,c,d,e,f){var h;if(a.Ib){var k=nc(a.g);h=function(a,b){return k(b,a)}}else h=nc(a.g);D(b.Eb()==a.oa,"");var m=new C(c,d),l=a.Ib?pd(b,a.g):qd(b,a.g),u=a.sa.matches(m);if(b.Da(c)){for(var z=b.Q(c),l=e.fe(a.g,l,a.Ib);null!=l&&(l.name==c||b.Da(l.name));)l=e.fe(a.g,l,a.Ib);e=null==l?1:h(l,m);if(u&&!d.e()&&0<=e)return null!=f&&df(f,new S(Ie,d,c,z)),b.T(c,d);null!=f&&df(f,new S(Le,z,c));b=b.T(c,L);return null!=l&&a.sa.matches(l)?(null!=f&&df(f,new S(Me,l.R,l.name)),b.T(l.name,l.R)):b}return d.e()?
b:u&&0<=h(l,m)?(null!=f&&(df(f,new S(Le,l.R,l.name)),df(f,new S(Me,d,c))),b.T(c,d).T(l.name,L)):b};function S(a,b,c,d){this.type=a;this.Ja=b;this.Xa=c;this.qe=d;this.Dd=void 0}function Ee(a){return new S(Ne,a)}var Me="child_added",Le="child_removed",Ie="child_changed",Je="child_moved",Ne="value";function xe(){this.fb={}}
function df(a,b){var c=b.type,d=b.Xa;D(c==Me||c==Ie||c==Le,"Only child changes supported for tracking");D(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.fb,d);if(e){var f=e.type;if(c==Me&&f==Le)a.fb[d]=new S(Ie,b.Ja,d,e.Ja);else if(c==Le&&f==Me)delete a.fb[d];else if(c==Le&&f==Ie)a.fb[d]=new S(Le,e.qe,d);else if(c==Ie&&f==Me)a.fb[d]=new S(Me,b.Ja,d);else if(c==Ie&&f==Ie)a.fb[d]=new S(Ie,b.Ja,d,e.qe);else throw Mb("Illegal combination of changes: "+b+" occurred after "+
e);}else a.fb[d]=b};function lf(){this.Rb=this.na=this.Kb=this.ka=this.xa=!1;this.oa=0;this.mb="";this.dc=null;this.zb="";this.ac=null;this.xb="";this.g=H}var mf=new lf;function jf(a){return""===a.mb?a.ka:"l"===a.mb}function ff(a){D(a.ka,"Only valid if start has been set");return a.dc}function ef(a){D(a.ka,"Only valid if start has been set");return a.Kb?a.zb:"[MIN_NAME]"}function hf(a){D(a.na,"Only valid if end has been set");return a.ac}
function gf(a){D(a.na,"Only valid if end has been set");return a.Rb?a.xb:"[MAX_NAME]"}function nf(a){var b=new lf;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.dc=a.dc;b.Kb=a.Kb;b.zb=a.zb;b.na=a.na;b.ac=a.ac;b.Rb=a.Rb;b.xb=a.xb;b.g=a.g;b.mb=a.mb;return b}g=lf.prototype;g.ne=function(a){var b=nf(this);b.xa=!0;b.oa=a;b.mb="l";return b};g.oe=function(a){var b=nf(this);b.xa=!0;b.oa=a;b.mb="r";return b};g.Nd=function(a,b){var c=nf(this);c.ka=!0;n(a)||(a=null);c.dc=a;null!=b?(c.Kb=!0,c.zb=b):(c.Kb=!1,c.zb="");return c};
g.gd=function(a,b){var c=nf(this);c.na=!0;n(a)||(a=null);c.ac=a;n(b)?(c.Rb=!0,c.xb=b):(c.vg=!1,c.xb="");return c};function of(a,b){var c=nf(a);c.g=b;return c}function pf(a){var b={};a.ka&&(b.sp=a.dc,a.Kb&&(b.sn=a.zb));a.na&&(b.ep=a.ac,a.Rb&&(b.en=a.xb));if(a.xa){b.l=a.oa;var c=a.mb;""===c&&(c=jf(a)?"l":"r");b.vf=c}a.g!==H&&(b.i=a.g.toString());return b}function T(a){return!(a.ka||a.na||a.xa)}function qf(a){return T(a)&&a.g==H}
function rf(a){var b={};if(qf(a))return b;var c;a.g===H?c="$priority":a.g===wc?c="$value":a.g===tc?c="$key":(D(a.g instanceof pc,"Unrecognized index type!"),c=a.g.toString());b.orderBy=x(c);a.ka&&(b.startAt=x(a.dc),a.Kb&&(b.startAt+=","+x(a.zb)));a.na&&(b.endAt=x(a.ac),a.Rb&&(b.endAt+=","+x(a.xb)));a.xa&&(jf(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}g.toString=function(){return x(pf(this))};function sf(a){this.W=a}var tf=new sf(new vd(null));function uf(a,b,c){if(b.e())return new sf(new vd(c));var d=zd(a.W,b);if(null!=d){var e=d.path,d=d.value;b=P(e,b);d=d.F(b,c);return new sf(a.W.set(e,d))}a=Ad(a.W,b,new vd(c));return new sf(a)}function vf(a,b,c){var d=a;fb(c,function(a,c){d=uf(d,b.n(a),c)});return d}sf.prototype.Ed=function(a){if(a.e())return tf;a=Ad(this.W,a,R);return new sf(a)};function wf(a,b){var c=zd(a.W,b);return null!=c?a.W.get(c.path).P(P(c.path,b)):null}
function xf(a){var b=[],c=a.W.value;null!=c?c.J()||c.O(H,function(a,c){b.push(new C(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new C(a,c.value))});return b}function yf(a,b){if(b.e())return a;var c=wf(a,b);return null!=c?new sf(new vd(c)):new sf(a.W.subtree(b))}sf.prototype.e=function(){return this.W.e()};sf.prototype.apply=function(a){return zf(Q,this.W,a)};
function zf(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ha(function(b,f){".priority"===b?(D(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=zf(a.n(b),f,c)});c.P(a).e()||null===d||(c=c.F(a.n(".priority"),d));return c};function Af(){this.Jd=L}Af.prototype.j=function(a){return this.Jd.P(a)};Af.prototype.toString=function(){return this.Jd.toString()};function Bf(a){this.oc=a}Bf.prototype.getToken=function(a){return this.oc.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function Cf(a,b){a.oc.INTERNAL.addAuthTokenListener(b)};function Df(){this.S=tf;this.la=[];this.Bc=-1}function Ef(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d}return null}g=Df.prototype;
g.Ed=function(a){var b=Ea(this.la,function(b){return b.Zc===a});D(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var h=this.la[f];h.visible&&(f>=b&&Ff(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.S=Gf(this.la,Hf,Q),this.Bc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ga)this.S=this.S.Ed(c.path);else{var k=this;v(c.children,function(a,b){k.S=k.S.Ed(c.path.n(b))})}return!0}return!1};
g.Aa=function(a,b,c,d){if(c||d){var e=yf(this.S,a);return!d&&e.e()?b:d||null!=b||null!=wf(e,Q)?(e=Gf(this.la,function(b){return(b.visible||d)&&(!c||!(0<=xa(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||L,e.apply(b)):null}e=wf(this.S,a);if(null!=e)return e;e=yf(this.S,a);return e.e()?b:null!=b||null!=wf(e,Q)?(b=b||L,e.apply(b)):null};
g.rc=function(a,b){var c=L,d=wf(this.S,a);if(d)d.J()||d.O(H,function(a,b){c=c.T(a,b)});else if(b){var e=yf(this.S,a);b.O(H,function(a,b){var d=yf(e,new E(a)).apply(b);c=c.T(a,d)});ya(xf(e),function(a){c=c.T(a.name,a.R)})}else e=yf(this.S,a),ya(xf(e),function(a){c=c.T(a.name,a.R)});return c};g.ad=function(a,b,c,d){D(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.n(b);if(null!=wf(this.S,a))return null;a=yf(this.S,a);return a.e()?d.P(b):a.apply(d.P(b))};
g.qc=function(a,b,c){a=a.n(b);var d=wf(this.S,a);return null!=d?d:ne(c,b)?yf(this.S,a).apply(c.j().Q(b)):null};g.lc=function(a){return wf(this.S,a)};g.Xd=function(a,b,c,d,e,f){var h;a=yf(this.S,a);h=wf(a,Q);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.nb(f);if(h.e()||h.J())return[];b=[];a=nc(f);e=e?h.Zb(c,f):h.Xb(c,f);for(f=M(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=M(e);return b};
function Ff(a,b){return a.Ga?a.path.contains(b):!!Qa(a.children,function(c,d){return a.path.n(d).contains(b)})}function Hf(a){return a.visible}
function Gf(a,b,c){for(var d=tf,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ga)c.contains(h)?(h=P(c,h),d=uf(d,h,f.Ga)):h.contains(c)&&(h=P(h,c),d=uf(d,Q,f.Ga.P(h)));else if(f.children)if(c.contains(h))h=P(c,h),d=vf(d,h,f.children);else{if(h.contains(c))if(h=P(h,c),h.e())d=vf(d,Q,f.children);else if(f=w(f.children,K(h)))f=f.P(N(h)),d=uf(d,Q,f)}else throw Mb("WriteRecord should have .snap or .children");}}return d}function If(a,b){this.Lb=a;this.W=b}g=If.prototype;
g.Aa=function(a,b,c){return this.W.Aa(this.Lb,a,b,c)};g.rc=function(a){return this.W.rc(this.Lb,a)};g.ad=function(a,b,c){return this.W.ad(this.Lb,a,b,c)};g.lc=function(a){return this.W.lc(this.Lb.n(a))};g.Xd=function(a,b,c,d,e){return this.W.Xd(this.Lb,a,b,c,d,e)};g.qc=function(a,b){return this.W.qc(this.Lb,a,b)};g.n=function(a){return new If(this.Lb.n(a),this.W)};function Jf(a,b){this.rf={};this.Vc=new Kf(a);this.va=b;var c=1E4+2E4*Math.random();hc(q(this.lf,this),Math.floor(c))}Jf.prototype.lf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&eb(this.rf,d)&&(b[d]=a[d],c=!0);c&&this.va.ye(b);hc(q(this.lf,this),Math.floor(6E5*Math.random()))};function Lf(){this.tc={}}function Mf(a,b,c){n(c)||(c=1);eb(a.tc,b)||(a.tc[b]=0);a.tc[b]+=c}Lf.prototype.get=function(){return Ta(this.tc)};function Kf(a){this.Ef=a;this.rd=null}Kf.prototype.get=function(){var a=this.Ef.get(),b=Ta(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};var Nf={},Of={};function Pf(a){a=a.toString();Nf[a]||(Nf[a]=new Lf);return Nf[a]}function Qf(a,b){var c=a.toString();Of[c]||(Of[c]=b());return Of[c]};function Rf(a,b,c){this.f=Tb("p:rest:");this.L=a;this.Gb=b;this.$c=c;this.$={}}function Sf(a,b){if(n(b))return"tag$"+b;D(qf(a.m),"should have a tag if it's not a default query.");return a.path.toString()}g=Rf.prototype;
g.$e=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ja());var f=Sf(a,c),h={};this.$[f]=h;a=rf(a.m);var k=this;Tf(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Gb(e,u,!1,c);w(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.uf=function(a,b){var c=Sf(a,b);delete this.$[c]};g.kf=function(){};g.re=function(){};g.cf=function(){};g.xd=function(){};g.put=function(){};g.af=function(){};g.ye=function(){};
function Tf(a,b,c,d){c=c||{};c.format="export";a.$c.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.L.Sc?"https://":"http://")+a.L.host+b+"?"+gb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=lb(h.responseText)}catch(c){J("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
b)}else 401!==h.status&&404!==h.status&&J("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function Uf(a){this.te=a;this.Bd=[];this.Qb=0;this.Yd=-1;this.Fb=null}function Vf(a,b,c){a.Yd=b;a.Fb=c;a.Yd<a.Qb&&(a.Fb(),a.Fb=null)}function Wf(a,b,c){for(a.Bd[b]=c;a.Bd[a.Qb];){var d=a.Bd[a.Qb];delete a.Bd[a.Qb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;fc(function(){f.te(d[e])})}if(a.Qb===a.Yd){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Qb++}};var Cb="websocket",Db="long_polling";var Xf=null;"undefined"!==typeof MozWebSocket?Xf=MozWebSocket:"undefined"!==typeof WebSocket&&(Xf=WebSocket);function Yf(a,b,c,d){this.Zd=a;this.f=Tb(this.Zd);this.frames=this.zc=null;this.pb=this.qb=this.Fe=0;this.Va=Pf(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Ke=Bb(b,Cb,a)}var Zf;
Yf.prototype.open=function(a,b){this.ib=b;this.Xf=a;this.f("Websocket connecting to "+this.Ke);this.wc=!1;xb.set("previous_websocket_failure",!0);try{this.Ia=new Xf(this.Ke)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.bb();return}var e=this;this.Ia.onopen=function(){e.f("Websocket connected.");e.wc=!0};this.Ia.onclose=function(){e.f("Websocket connection was disconnected.");e.Ia=null;e.bb()};this.Ia.onmessage=function(a){if(null!==e.Ia)if(a=a.data,e.pb+=
a.length,Mf(e.Va,"bytes_received",a.length),$f(e),null!==e.frames)ag(e,a);else{a:{D(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a}}e.Fe=1;e.frames=[]}null!==a&&ag(e,a)}};this.Ia.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.bb()}};Yf.prototype.start=function(){};
Yf.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Xf&&!Zf};Yf.responsesRequiredToBeHealthy=2;Yf.healthyTimeout=3E4;g=Yf.prototype;g.sd=function(){xb.remove("previous_websocket_failure")};function ag(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join("");a.frames=null;c=lb(c);a.Xf(c)}}
g.send=function(a){$f(this);a=x(a);this.qb+=a.length;Mf(this.Va,"bytes_sent",a.length);a=bc(a,16384);1<a.length&&bg(this,String(a.length));for(var b=0;b<a.length;b++)bg(this,a[b])};g.Tc=function(){this.Ab=!0;this.zc&&(clearInterval(this.zc),this.zc=null);this.Ia&&(this.Ia.close(),this.Ia=null)};g.bb=function(){this.Ab||(this.f("WebSocket is closing itself"),this.Tc(),this.ib&&(this.ib(this.wc),this.ib=null))};g.close=function(){this.Ab||(this.f("WebSocket is being closed"),this.Tc())};
function $f(a){clearInterval(a.zc);a.zc=setInterval(function(){a.Ia&&bg(a,"0");$f(a)},Math.floor(45E3))}function bg(a,b){try{a.Ia.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(q(a.bb,a),0)}};function cg(a,b,c,d){this.Zd=a;this.f=Tb(a);this.jc=b;this.pb=this.qb=0;this.Va=Pf(b);this.tf=c;this.wc=!1;this.Cb=d;this.Yc=function(a){return Bb(b,Db,a)}}var dg,eg;
cg.prototype.open=function(a,b){this.Ne=0;this.ia=b;this.bf=new Uf(a);this.Ab=!1;var c=this;this.sb=setTimeout(function(){c.f("Timed out trying to connect.");c.bb();c.sb=null},Math.floor(3E4));Yb(function(){if(!c.Ab){c.Ta=new fg(function(a,b,d,k,m){gg(c,arguments);if(c.Ta)if(c.sb&&(clearTimeout(c.sb),c.sb=null),c.wc=!0,"start"==a)c.id=b,c.ff=d;else if("close"===a)b?(c.Ta.Kd=!1,Vf(c.bf,b,function(){c.bb()})):c.bb();else throw Error("Unrecognized command received: "+a);},function(a,b){gg(c,arguments);
Wf(c.bf,a,b)},function(){c.bb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.Qd&&(a.cb=c.Ta.Qd);a.v="5";c.tf&&(a.s=c.tf);c.Cb&&(a.ls=c.Cb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);hg(c.Ta,a,function(){})}})};
cg.prototype.start=function(){var a=this.Ta,b=this.ff;a.Vf=this.id;a.Wf=b;for(a.Ud=!0;ig(a););a=this.id;b=this.ff;this.fc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.fc.src=this.Yc(c);this.fc.style.display="none";document.body.appendChild(this.fc)};
cg.isAvailable=function(){return dg||!eg&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.rg)&&!0};g=cg.prototype;g.sd=function(){};g.Tc=function(){this.Ab=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.fc&&(document.body.removeChild(this.fc),this.fc=null);this.sb&&(clearTimeout(this.sb),this.sb=null)};
g.bb=function(){this.Ab||(this.f("Longpoll is closing itself"),this.Tc(),this.ia&&(this.ia(this.wc),this.ia=null))};g.close=function(){this.Ab||(this.f("Longpoll is being closed."),this.Tc())};g.send=function(a){a=x(a);this.qb+=a.length;Mf(this.Va,"bytes_sent",a.length);a=mb(a);a=ab(a,!0);a=bc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.Qc.push({jg:this.Ne,pg:a.length,Pe:a[b]});c.Ud&&ig(c);this.Ne++}};function gg(a,b){var c=x(b).length;a.pb+=c;Mf(a.Va,"bytes_received",c)}
function fg(a,b,c,d){this.Yc=d;this.ib=c;this.ve=new Gc;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Lb();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||I("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document);this.Ea=a;a="";this.Ea.src&&"javascript:"===this.Ea.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ea.gb.open(),this.Ea.gb.write(a),this.Ea.gb.close()}catch(f){I("frame writing exception"),f.stack&&I(f.stack),I(f)}}
fg.prototype.close=function(){this.Ud=!1;if(this.Ea){this.Ea.gb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ea&&(document.body.removeChild(a.Ea),a.Ea=null)},Math.floor(0))}var b=this.ib;b&&(this.ib=null,b())};
function ig(a){if(a.Ud&&a.Kd&&a.ve.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.Vf;b.pw=a.Wf;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Pe.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.jg+"&ts"+d+"="+e.pg+"&d"+d+"="+e.Pe;d++}else break;jg(a,b+c,a.$d);return!0}return!1}function jg(a,b,c){function d(){a.ve.remove(c);ig(a)}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));hg(a,b,function(){clearTimeout(e);d()})}
function hg(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ea.gb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){I("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ea.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))};function kg(a){lg(this,a)}var mg=[cg,Yf];function lg(a,b){var c=Yf&&Yf.isAvailable(),d=c&&!(xb.Ze||!0===xb.get("previous_websocket_failure"));b.qg&&(c||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[Yf];else{var e=a.Wc=[];cc(mg,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function ng(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function og(a,b,c,d,e,f,h){this.id=a;this.f=Tb("c:"+this.id+":");this.te=c;this.Lc=d;this.ia=e;this.se=f;this.L=b;this.Ad=[];this.Le=0;this.sf=new kg(b);this.Ua=0;this.Cb=h;this.f("Connection created");pg(this)}
function pg(a){var b=ng(a.sf);a.I=new b("c:"+a.id+":"+a.Le++,a.L,void 0,a.Cb);a.xe=b.responsesRequiredToBeHealthy||0;var c=qg(a,a.I),d=rg(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Bb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=hc(function(){a.md=null;a.Bb||(a.I&&102400<a.I.pb?(a.f("Connection exceeded healthy timeout but has received "+a.I.pb+" bytes.  Marking connection healthy."),a.Bb=!0,a.I.sd()):a.I&&10240<a.I.qb?a.f("Connection exceeded healthy timeout but has sent "+
a.I.qb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function rg(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.L.$a.substr(0,2)&&(xb.remove("host:"+a.L.host),a.L.$a=a.L.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
function qg(a,b){return function(c){if(2!=a.Ua)if(b===a.Rc){var d=$b("t",c);c=$b("d",c);if("c"==d){if(d=$b("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.qf=c.s;Ab(a.L,f);0==a.Ua&&(a.I.start(),sg(a,a.I,d),"5"!==e&&J("Protocol version mismatch detected"),c=a.sf,(c=1<c.Wc.length?c.Wc[1]:null)&&tg(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];ug(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.se&&(a.se(c),a.se=null),a.ia=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ab(a.L,c),1===a.Ua?a.close():(vg(a),pg(a))):"e"===d?Ub("Server Error: "+c):"o"===d?(a.f("got pong on primary."),wg(a),xg(a)):Ub("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=$b("t",c),c=$b("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?yg(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.pf--,yg(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}og.prototype.ua=function(a){zg(this,{t:"d",d:a})};function ug(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null)}
function yg(a){0>=a.pf?(a.f("Secondary connection is healthy."),a.Bb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,ug(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}og.prototype.wd=function(a){wg(this);this.te(a)};function wg(a){a.Bb||(a.xe--,0>=a.xe&&(a.f("Primary connection is healthy."),a.Bb=!0,a.I.sd()))}
function tg(a,b){a.D=new b("c:"+a.id+":"+a.Le++,a.L,a.qf);a.pf=b.responsesRequiredToBeHealthy||0;a.D.open(qg(a,a.D),rg(a,a.D));hc(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function sg(a,b,c){a.f("Realtime connection established.");a.I=b;a.Ua=1;a.Lc&&(a.Lc(c,a.qf),a.Lc=null);0===a.xe?(a.f("Primary connection is healthy."),a.Bb=!0):hc(function(){xg(a)},Math.floor(5E3))}
function xg(a){a.Bb||1!==a.Ua||(a.f("sending ping on primary."),zg(a,{t:"c",d:{t:"p",d:{}}}))}function zg(a,b){if(1!==a.Ua)throw"Connection is not connected";a.Xc.send(b)}og.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,vg(this),this.ia&&(this.ia(),this.ia=null))};function vg(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function Ag(a,b,c,d,e,f){this.id=Bg++;this.f=Tb("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Oc=0;this.Kc=[];this.ma=!1;this.Sa=1E3;this.td=3E5;this.Gb=b;this.Jc=c;this.ue=d;this.L=a;this.ob=this.Fa=this.Cb=this.ze=null;this.$c=e;this.de=!1;this.ke=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Vd=f;this.ub=null;this.Mb=!1;this.Gd={};this.ig=0;this.Re=!0;this.Ac=this.me=null;Cg(this,0);Mc.Vb().gc("visible",this.Zf,this);-1===a.host.indexOf("fblocal")&&
Lc.Vb().gc("online",this.Yf,this)}var Bg=0,Dg=0;g=Ag.prototype;g.ua=function(a,b,c){var d=++this.ig;a={r:d,a:a,b:b};this.f(x(a));D(this.ma,"sendRequest call when we're not connected not allowed.");this.Fa.ua(a);c&&(this.Gd[d]=c)};
g.$e=function(a,b,c,d){var e=a.ja(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};D(qf(a.m)||!T(a.m),"listen() called for non-default but complete query");D(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,eg:a,tag:c};this.$[f][e]=a;this.ma&&Eg(this,a)};
function Eg(a,b){var c=b.eg,d=c.path.toString(),e=c.ja();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=pf(c.m),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&eb(k,"w")){var l=w(k,"w");ea(l)&&0<=xa(l,"no_index")&&J("Using an unspecified index. Consider adding "+('".indexOn": "'+c.m.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==m&&Fg(a,d,e),b.G&&b.G(m,
k))})}g.kf=function(a){this.ob=a;this.f("Auth token refreshed");this.ob?Gg(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||kc(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function Gg(a){if(a.ma&&a.ob){var b=a.ob,c=jc(b)?"auth":"gauth",d={cred:b};null===a.Vd?d.noauth=!0:"object"===typeof a.Vd&&(d.authvar=a.Vd);a.ua(c,d,function(c){var d=c.s;c=c.d||"error";a.ob===b&&("ok"===d?a.ke=0:Hg(a,d,c))})}}
g.uf=function(a,b){var c=a.path.toString(),d=a.ja();this.f("Unlisten called for "+c+" "+d);D(qf(a.m)||!T(a.m),"unlisten() called for non-default but complete query");if(Fg(this,c,d)&&this.ma){var e=pf(a.m);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};g.re=function(a,b,c){this.ma?Ig(this,"o",a,b,c):this.Kc.push({we:a,action:"o",data:b,G:c})};g.cf=function(a,b,c){this.ma?Ig(this,"om",a,b,c):this.Kc.push({we:a,action:"om",data:b,G:c})};
g.xd=function(a,b){this.ma?Ig(this,"oc",a,null,b):this.Kc.push({we:a,action:"oc",data:null,G:b})};function Ig(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Jg(this,"p",a,b,c,d)};g.af=function(a,b,c,d){Jg(this,"m",a,b,c,d)};function Jg(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.pa.push({action:b,mf:d,G:e});a.Oc++;b=a.pa.length-1;a.ma?Kg(a,b):a.f("Buffering put: "+c)}
function Kg(a,b){var c=a.pa[b].action,d=a.pa[b].mf,e=a.pa[b].G;a.pa[b].fg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Oc--;0===a.Oc&&(a.pa=[]);e&&e(d.s,d.d)})}g.ye=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
g.wd=function(a){if("r"in a){this.f("from server: "+x(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Gb(a.p,a.d,!1,a.t):"m"===b?this.Gb(a.p,a.d,!0,a.t):"c"===b?Lg(this,a.p,a.q):"ac"===b?Hg(this,a.s,a.d):"sd"===b?this.ze?this.ze(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):Ub("Unrecognized action received from server: "+
x(b)+"\nAre you using the latest client?"))}};g.Lc=function(a,b){this.f("connection ready");this.ma=!0;this.Ac=(new Date).getTime();this.ue({serverTimeOffset:a-(new Date).getTime()});this.Cb=b;if(this.Re){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;pb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ye(c)}Mg(this);this.Re=!1;this.Jc(!0)};
function Cg(a,b){D(!a.Fa,"Scheduling a connect when we're already connected/ing?");a.ub&&clearTimeout(a.ub);a.ub=setTimeout(function(){a.ub=null;Ng(a)},Math.floor(b))}g.Zf=function(a){a&&!this.Mb&&this.Sa===this.td&&(this.f("Window became visible.  Reducing delay."),this.Sa=1E3,this.Fa||Cg(this,0));this.Mb=a};g.Yf=function(a){a?(this.f("Browser went online."),this.Sa=1E3,this.Fa||Cg(this,0)):(this.f("Browser went offline.  Killing connection."),this.Fa&&this.Fa.close())};
g.df=function(){this.f("data client disconnected");this.ma=!1;this.Fa=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.mf&&b.fg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Oc--)}0===this.Oc&&(this.pa=[]);this.Gd={};Og(this)&&(this.Mb?this.Ac&&(3E4<(new Date).getTime()-this.Ac&&(this.Sa=1E3),this.Ac=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Sa=this.td,this.me=(new Date).getTime()),a=Math.max(0,this.Sa-((new Date).getTime()-this.me)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Cg(this,a),this.Sa=Math.min(this.td,1.3*this.Sa));this.Jc(!1)};
function Ng(a){if(Og(a)){a.f("Making a connection attempt");a.me=(new Date).getTime();a.Ac=null;var b=q(a.wd,a),c=q(a.Lc,a),d=q(a.df,a),e=a.id+":"+Dg++,f=a.Cb,h=!1,k=null,m=function(){k?k.close():(h=!0,d())};a.Fa={close:m,ua:function(a){D(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var l=a.de;a.de=!1;a.$c.getToken(l).then(function(l){h?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),a.ob=l&&l.accessToken,k=new og(e,a.L,b,c,d,function(b){J(b+
" ("+a.L.toString()+")");a.ab("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||m()})}}g.ab=function(a){I("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Fa?this.Fa.close():(this.ub&&(clearTimeout(this.ub),this.ub=null),this.ma&&this.df())};g.kc=function(a){I("Resuming connection for reason: "+a);delete this.qd[a];Sa(this.qd)&&(this.Sa=1E3,this.Fa||Cg(this,0))};
function Lg(a,b,c){c=c?Aa(c,function(a){return ac(a)}).join("$"):"default";(a=Fg(a,b,c))&&a.G&&a.G("permission_denied")}function Fg(a,b,c){b=(new E(b)).toString();var d;n(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===La(a.$[b])&&delete a.$[b]):d=void 0;return d}
function Hg(a,b,c){I("Auth token revoked: "+b+"/"+c);a.ob=null;a.de=!0;a.Fa.close();if("invalid_token"===b||"permission_denied"===b)a.ke++,3<=a.ke&&(a.Sa=3E4,a=a.$c,b='Provided authentication credentials for the app named "'+a.oc.name+'" are invalid. This usually indicates your app was not initialized correctly. ',b="credential"in a.oc.options?b+'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in
a.oc.options?b+'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':b+'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(b))}
function Mg(a){Gg(a);v(a.$,function(b){v(b,function(b){Eg(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Kg(a,b);for(;a.Kc.length;)b=a.Kc.shift(),Ig(a,b.action,b.we,b.data,b.G)}function Og(a){var b;b=Lc.Vb().hc;return Sa(a.qd)&&b};function Pg(a){a instanceof Qg||Vb("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,Q);this.INTERNAL=new Rg(this)}var Sg={TIMESTAMP:{".sv":"timestamp"}};g=Pg.prototype;g.app=null;g.jf=function(a){Tg(this,"ref");y("database.ref",0,1,arguments.length);return n(a)?this.ba.n(a):this.ba};
g.gg=function(a){Tg(this,"database.refFromURL");y("database.refFromURL",1,1,arguments.length);var b=Wb(a);Xd("database.refFromURL",b);var c=b.jc;c.host!==this.ta.L.host&&Vb("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.L.host+")");return this.jf(b.path.toString())};function Tg(a,b){null===a.ta&&Vb("Cannot call "+b+" on a deleted database.")}g.Pf=function(){y("database.goOffline",0,0,arguments.length);Tg(this,"goOffline");this.ta.ab()};
g.Qf=function(){y("database.goOnline",0,0,arguments.length);Tg(this,"goOnline");this.ta.kc()};Object.defineProperty(Pg.prototype,"app",{get:function(){return this.ta.app}});function Rg(a){this.Ya=a}Rg.prototype.delete=function(){Tg(this.Ya,"delete");var a=Ug.Vb(),b=this.Ya.ta;w(a.lb,b.app.name)!==b&&Vb("Database "+b.app.name+" has already been deleted.");b.ab();delete a.lb[b.app.name];this.Ya.ta=null;this.Ya.ba=null;this.Ya=this.Ya.INTERNAL=null;return firebase.Promise.resolve()};
Pg.prototype.ref=Pg.prototype.jf;Pg.prototype.refFromURL=Pg.prototype.gg;Pg.prototype.goOnline=Pg.prototype.Qf;Pg.prototype.goOffline=Pg.prototype.Pf;Rg.prototype["delete"]=Rg.prototype.delete;function V(a,b,c){this.A=a;this.V=b;this.g=c}V.prototype.H=function(){y("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};V.prototype.val=V.prototype.H;V.prototype.be=function(){y("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};V.prototype.exportVal=V.prototype.be;V.prototype.toJSON=function(){y("Firebase.DataSnapshot.toJSON",0,1,arguments.length);return this.be()};V.prototype.toJSON=V.prototype.toJSON;
V.prototype.Lf=function(){y("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};V.prototype.exists=V.prototype.Lf;V.prototype.n=function(a){y("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Vd("Firebase.DataSnapshot.child",a);var b=new E(a),c=this.V.n(b);return new V(this.A.P(b),c,H)};V.prototype.child=V.prototype.n;
V.prototype.Da=function(a){y("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Vd("Firebase.DataSnapshot.hasChild",a);var b=new E(a);return!this.A.P(b).e()};V.prototype.hasChild=V.prototype.Da;V.prototype.C=function(){y("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};V.prototype.getPriority=V.prototype.C;
V.prototype.forEach=function(a){y("Firebase.DataSnapshot.forEach",1,1,arguments.length);B("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.O(this.g,function(c,d){return a(new V(d,b.V.n(c),H))})};V.prototype.forEach=V.prototype.forEach;V.prototype.kd=function(){y("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};V.prototype.hasChildren=V.prototype.kd;
V.prototype.getKey=function(){y("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.getKey()};gc(V.prototype,"key",V.prototype.getKey);V.prototype.Eb=function(){y("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Eb()};V.prototype.numChildren=V.prototype.Eb;V.prototype.wb=function(){y("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};gc(V.prototype,"ref",V.prototype.wb);function Vg(a,b,c){this.Pb=a;this.rb=b;this.tb=c||null}g=Vg.prototype;g.nf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.m.g;return new We("value",this,new V(a.Ja,b.wb(),c))};g.Tb=function(a){var b=this.tb;if("cancel"===a.ge()){D(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.Pb;return function(){d.call(b,a.Md)}};g.Me=function(a,b){return this.rb?new Xe(this,a,b):null};
g.matches=function(a){return a instanceof Vg?a.Pb&&this.Pb?a.Pb===this.Pb&&a.tb===this.tb:!0:!1};g.Xe=function(){return null!==this.Pb};function Wg(a,b,c){this.ga=a;this.rb=b;this.tb=c}g=Wg.prototype;g.nf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ga};g.Me=function(a,b){return this.rb?new Xe(this,a,b):null};
g.createEvent=function(a,b){D(null!=a.Xa,"Child events should have a childName.");var c=b.wb().n(a.Xa);return new We(a.type,this,new V(a.Ja,c,b.m.g),a.Dd)};g.Tb=function(a){var b=this.tb;if("cancel"===a.ge()){D(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.ga[a.hd];return function(){d.call(b,a.Md,a.Dd)}};
g.matches=function(a){if(a instanceof Wg){if(!this.ga||!a.ga)return!0;if(this.tb===a.tb){var b=La(a.ga);if(b===La(this.ga)){if(1===b){var b=Ma(a.ga),c=Ma(this.ga);return c===b&&(!a.ga[b]||!this.ga[c]||a.ga[b]===this.ga[c])}return Ka(this.ga,function(b,c){return a.ga[c]===b})}}}return!1};g.Xe=function(){return null!==this.ga};function Xg(){this.za={}}g=Xg.prototype;g.e=function(){return Sa(this.za)};g.eb=function(a,b,c){var d=a.source.Hb;if(null!==d)return d=w(this.za,d),D(null!=d,"SyncTree gave us an op for an invalid query."),d.eb(a,b,c);var e=[];v(this.za,function(d){e=e.concat(d.eb(a,b,c))});return e};g.Nb=function(a,b,c,d,e){var f=a.ja(),h=w(this.za,f);if(!h){var h=c.Aa(e?d:null),k=!1;h?k=!0:(h=d instanceof O?c.rc(d):L,k=!1);h=new Pe(a,new oe(new je(h,k,!1),new je(d,e,!1)));this.za[f]=h}h.Nb(b);return Ve(h,b)};
g.kb=function(a,b,c){var d=a.ja(),e=[],f=[],h=null!=Yg(this);if("default"===d){var k=this;v(this.za,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.za[d],T(a.V.m)||e.push(a.V))})}else{var m=w(this.za,d);m&&(f=f.concat(m.kb(b,c)),m.e()&&(delete this.za[d],T(m.V.m)||e.push(m.V)))}h&&null==Yg(this)&&e.push(new U(a.u,a.path));return{hg:e,Kf:f}};function Zg(a){return za(Na(a.za),function(a){return!T(a.V.m)})}g.hb=function(a){var b=null;v(this.za,function(c){b=b||c.hb(a)});return b};
function $g(a,b){if(T(b.m))return Yg(a);var c=b.ja();return w(a.za,c)}function Yg(a){return Ra(a.za,function(a){return T(a.V.m)})||null};function ah(a){this.wa=R;this.jb=new Df;this.De={};this.ic={};this.Cc=a}function bh(a,b,c,d,e){var f=a.jb,h=e;D(d>f.Bc,"Stacking an older write on top of newer ones");n(h)||(h=!0);f.la.push({path:b,Ga:c,Zc:d,visible:h});h&&(f.S=uf(f.S,b,c));f.Bc=d;return e?ch(a,new ce(fe,b,c)):[]}function dh(a,b,c,d){var e=a.jb;D(d>e.Bc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.S=vf(e.S,b,c);e.Bc=d;c=xd(c);return ch(a,new ae(fe,b,c))}
function eh(a,b,c){c=c||!1;var d=Ef(a.jb,b);if(a.jb.Ed(b)){var e=R;null!=d.Ga?e=e.set(Q,!0):fb(d.children,function(a,b){e=e.set(new E(a),b)});return ch(a,new de(d.path,e,c))}return[]}function fh(a,b,c){c=xd(c);return ch(a,new ae(ie,b,c))}function gh(a,b,c,d){d=hh(a,d);if(null!=d){var e=ih(d);d=e.path;e=e.Hb;b=P(d,b);c=new ce(new he(!1,!0,e,!0),b,c);return jh(a,d,c)}return[]}
function kh(a,b,c,d){if(d=hh(a,d)){var e=ih(d);d=e.path;e=e.Hb;b=P(d,b);c=xd(c);c=new ae(new he(!1,!0,e,!0),b,c);return jh(a,d,c)}return[]}
ah.prototype.Nb=function(a,b){var c=a.path,d=null,e=!1;Fd(this.wa,c,function(a,b){var f=P(a,c);d=d||b.hb(f);e=e||null!=Yg(b)});var f=this.wa.get(c);f?(e=e||null!=Yg(f),d=d||f.hb(Q)):(f=new Xg,this.wa=this.wa.set(c,f));var h;null!=d?h=!0:(h=!1,d=L,Jd(this.wa.subtree(c),function(a,b){var c=b.hb(Q);c&&(d=d.T(a,c))}));var k=null!=$g(f,a);if(!k&&!T(a.m)){var m=lh(a);D(!(m in this.ic),"View does not exist, but we have a tag");var l=mh++;this.ic[m]=l;this.De["_"+l]=m}h=f.Nb(a,b,new If(c,this.jb),d,h);k||
e||(f=$g(f,a),h=h.concat(nh(this,a,f)));return h};
ah.prototype.kb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ja()||null!=$g(e,a))){f=e.kb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.hg;f=f.Kf;b=-1!==Ea(e,function(a){return T(a.m)});var h=Dd(this.wa,d,function(a,b){return null!=Yg(b)});if(b&&!h&&(d=this.wa.subtree(d),!d.e()))for(var d=oh(d),k=0;k<d.length;++k){var m=d[k],l=m.V,m=ph(this,m);this.Cc.Ae(qh(l),rh(this,l),m.ld,m.G)}if(!h&&0<e.length&&!c)if(b)this.Cc.Od(qh(a),null);else{var u=this;ya(e,function(a){a.ja();
var b=u.ic[lh(a)];u.Cc.Od(qh(a),b)})}sh(this,e)}return f};ah.prototype.Aa=function(a,b){var c=this.jb,d=Dd(this.wa,a,function(b,c){var d=P(b,a);if(d=c.hb(d))return d});return c.Aa(a,d,b,!0)};function oh(a){return Bd(a,function(a,c,d){if(c&&null!=Yg(c))return[Yg(c)];var e=[];c&&(e=Zg(c));v(d,function(a){e=e.concat(a)});return e})}function sh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!T(d.m)){var d=lh(d),e=a.ic[d];delete a.ic[d];delete a.De["_"+e]}}}
function qh(a){return T(a.m)&&!qf(a.m)?a.wb():a}function nh(a,b,c){var d=b.path,e=rh(a,b);c=ph(a,c);b=a.Cc.Ae(qh(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)D(null==Yg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Bd(d,function(a,b,c){if(!a.e()&&b&&null!=Yg(b))return[Te(Yg(b))];var d=[];b&&(d=d.concat(Aa(Zg(b),function(a){return a.V})));v(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Cc.Od(qh(c),rh(a,c));return b}
function ph(a,b){var c=b.V,d=rh(a,c);return{ld:function(){return(b.w()||L).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=hh(a,d)){var h=ih(b);b=h.path;h=h.Hb;f=P(b,f);f=new Zd(new he(!1,!0,h,!0),f);b=jh(a,b,f)}else b=[]}else b=ch(a,new Zd(ie,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function lh(a){return a.path.toString()+"$"+a.ja()}function ih(a){var b=a.indexOf("$");D(-1!==b&&b<a.length-1,"Bad queryKey.");return{Hb:a.substr(b+1),path:new E(a.substr(0,b))}}function hh(a,b){var c=a.De,d="_"+b;return d in c?c[d]:void 0}function rh(a,b){var c=lh(b);return w(a.ic,c)}var mh=1;
function jh(a,b,c){var d=a.wa.get(b);D(d,"Missing sync point for query tag that we're tracking");return d.eb(c,new If(b,a.jb),null)}function ch(a,b){return th(a,b,a.wa,null,new If(Q,a.jb))}function th(a,b,c,d,e){if(b.path.e())return uh(a,b,c,d,e);var f=c.get(Q);null==d&&null!=f&&(d=f.hb(Q));var h=[],k=K(b.path),m=b.Mc(k);if((c=c.children.get(k))&&m)var l=d?d.Q(k):null,k=e.n(k),h=h.concat(th(a,m,c,l,k));f&&(h=h.concat(f.eb(b,e,d)));return h}
function uh(a,b,c,d,e){var f=c.get(Q);null==d&&null!=f&&(d=f.hb(Q));var h=[];c.children.ha(function(c,f){var l=d?d.Q(c):null,u=e.n(c),z=b.Mc(c);z&&(h=h.concat(uh(a,z,f,l,u)))});f&&(h=h.concat(f.eb(b,e,d)));return h};function Qg(a,b,c){this.app=c;var d=new Bf(c);this.L=a;this.Va=Pf(a);this.Vc=null;this.ca=new Ye;this.vd=1;this.Ra=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Rf(this.L,q(this.Gb,this),d),setTimeout(q(this.Jc,this,!0),0);else{b=c.options.databaseAuthVariableOverride;if("undefined"!==da(b)&&null!==b){if("object"!==da(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
try{x(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ra=new Ag(this.L,q(this.Gb,this),q(this.Jc,this),q(this.ue,this),d,b)}var f=this;Cf(d,function(a){f.va.kf(a)});this.og=Qf(a,q(function(){return new Jf(this.Va,this.va)},this));this.mc=new Tc;this.ie=new Af;this.pd=new ah({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=ch(f.pd,new ce(ie,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:ba});vh(this,"connected",!1);this.ia=new Gb;this.Ya=new Pg(this);this.fd=
0;this.je=null;this.K=new ah({Ae:function(a,b,c,d){f.va.$e(a,c,b,function(b,c){var e=d(b,c);cf(f.ca,a.path,e)});return[]},Od:function(a,b){f.va.uf(a,b)}})}g=Qg.prototype;g.toString=function(){return(this.L.Sc?"https://":"http://")+this.L.host};g.name=function(){return this.L.pe};function wh(a){a=a.ie.j(new E(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function xh(a){a=a={timestamp:wh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
g.Gb=function(a,b,c,d){this.fd++;var e=new E(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=Ja(b,function(a){return G(a)}),a=kh(this.K,e,b,d)):(b=G(b),a=gh(this.K,e,b,d)):c?(d=Ja(b,function(a){return G(a)}),a=fh(this.K,e,d)):(d=G(b),a=ch(this.K,new ce(ie,e,d)));d=e;0<a.length&&(d=yh(this,e));cf(this.ca,d,a)};g.Jc=function(a){vh(this,"connected",a);!1===a&&zh(this)};g.ue=function(a){var b=this;cc(a,function(a,d){vh(b,d,a)})};
function vh(a,b,c){b=new E("/.info/"+b);c=G(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=ch(a.pd,new ce(ie,b,c));cf(a.ca,b,c)}g.Jb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,ug:c});var e=xh(this);b=G(b,c);var e=Jb(b,e),f=this.vd++,e=bh(this.K,a,e,f,!0);Ze(this.ca,e);var h=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||J("set at "+a+" failed: "+b);e=eh(h.K,f,!e);cf(h.ca,a,e);Ah(d,b,c)});e=Bh(this,a);yh(this,e);cf(this.ca,e,[])};
g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=xh(this),f={};v(b,function(a,b){d=!1;var c=G(a);f[b]=Jb(c,e)});if(d)I("update() called with empty data.  Don't do anything."),Ah(c,"ok");else{var h=this.vd++,k=dh(this.K,a,f,h);Ze(this.ca,k);var m=this;this.va.af(a.toString(),b,function(b,d){var e="ok"===b;e||J("update at "+a+" failed: "+b);var e=eh(m.K,h,!e),f=a;0<e.length&&(f=yh(m,a));cf(m.ca,f,e);Ah(c,b,d)});v(b,function(b,c){var d=Bh(m,a.n(c));yh(m,d)});cf(this.ca,
a,[])}};function zh(a){a.f("onDisconnectEvents");var b=xh(a),c=[];Hb(Fb(a.ia,b),Q,function(b,e){c=c.concat(ch(a.K,new ce(ie,b,e)));var f=Bh(a,b);yh(a,f)});a.ia=new Gb;cf(a.ca,Q,c)}g.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&Yd(c.ia,a);Ah(b,d,e)})};function Ch(a,b,c,d){var e=G(c);a.va.re(b.toString(),e.H(!0),function(c,h){"ok"===c&&Ib(a.ia,b,e);Ah(d,c,h)})}
function Dh(a,b,c,d,e){var f=G(c,d);a.va.re(b.toString(),f.H(!0),function(c,d){"ok"===c&&Ib(a.ia,b,f);Ah(e,c,d)})}function Eh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(I("onDisconnect().update() called with empty data.  Don't do anything."),Ah(d,"ok")):a.va.cf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=G(c[m]);Ib(a.ia,b.n(m),l)}Ah(d,e,f)})}function Fh(a,b,c){c=".info"===K(b.path)?a.pd.Nb(b,c):a.K.Nb(b,c);af(a.ca,b.path,c)}g.ab=function(){this.Ra&&this.Ra.ab("repo_interrupt")};
g.kc=function(){this.Ra&&this.Ra.kc("repo_interrupt")};g.Be=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new Kf(this.Va)),a=this.Vc.get()):a=this.Va.get();var b=Ba(Oa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ce=function(a){Mf(this.Va,a);this.og.rf[a]=!0};g.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");I(b,arguments)};
function Ah(a,b,c){a&&fc(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Gh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.gc("value",f);c={path:b,update:c,G:d,status:null,ef:Lb(),He:e,of:0,Rd:function(){h.Ic("value",f)},Td:null,Ba:null,cd:null,dd:null,ed:null};d=a.K.Aa(b,void 0)||L;c.cd=d;d=c.update(d.H());if(n(d)){Pd("transaction failed: Data returned ",d,c.path);c.status=1;e=Uc(a.mc,b);var k=e.Ca()||[];k.push(c);Vc(e,k);"object"===typeof d&&null!==d&&eb(d,".priority")?(k=w(d,".priority"),D(Nd(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.K.Aa(b)||L).C().H();e=xh(a);d=G(d,k);e=Jb(d,e);c.dd=d;c.ed=e;c.Ba=a.vd++;c=bh(a.K,b,e,c.Ba,c.He);cf(a.ca,b,c);Hh(a)}else c.Rd(),c.dd=null,c.ed=null,c.G&&(a=new V(c.cd,new U(a,c.path),H),c.G(null,!1,a))}function Hh(a,b){var c=b||a.mc;b||Ih(a,c);if(null!==c.Ca()){var d=Jh(a,c);D(0<d.length,"Sending zero length transaction queue");Ca(d,function(a){return 1===a.status})&&Kh(a,c.path(),d)}else c.kd()&&c.O(function(b){Hh(a,b)})}
function Kh(a,b,c){for(var d=Aa(c,function(a){return a.Ba}),e=a.K.Aa(b,d)||L,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];D(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.of++;var k=P(b,h.path),d=d.F(k,h.dd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(eh(a.K,c[f].Ba));if(c[f].G){var h=c[f].ed,k=new U(a,c[f].path);d.push(q(c[f].G,
null,null,!0,new V(h,k,H)))}c[f].Rd()}Ih(a,Uc(a.mc,b));Hh(a);cf(a.ca,b,e);for(f=0;f<d.length;f++)fc(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(J("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;yh(a,b)}},e)}function yh(a,b){var c=Lh(a,b),d=c.path(),c=Jh(a,c);Mh(a,c,d);return d}
function Mh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=za(b,function(a){return 1===a.status}),f=Aa(f,function(a){return a.Ba}),h=0;h<b.length;h++){var k=b[h],m=P(c,k.path),l=!1,u;D(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(eh(a.K,k.Ba,!0));else if(1===k.status)if(25<=k.of)l=!0,u="maxretry",e=e.concat(eh(a.K,k.Ba,!0));else{var z=a.K.Aa(k.path,f)||L;k.cd=z;var F=b[h].update(z.H());n(F)?(Pd("transaction failed: Data returned ",F,
k.path),m=G(F),"object"===typeof F&&null!=F&&eb(F,".priority")||(m=m.fa(z.C())),z=k.Ba,F=xh(a),F=Jb(m,F),k.dd=m,k.ed=F,k.Ba=a.vd++,Fa(f,z),e=e.concat(bh(a.K,k.path,F,k.Ba,k.He)),e=e.concat(eh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(eh(a.K,k.Ba,!0)))}cf(a.ca,c,e);e=[];l&&(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new U(a,b[h].path),d.push(q(b[h].G,null,null,!1,new V(b[h].cd,k,H)))):d.push(q(b[h].G,null,Error(u),!1,null))))}Ih(a,a.mc);for(h=0;h<d.length;h++)fc(d[h]);Hh(a)}}
function Lh(a,b){for(var c,d=a.mc;null!==(c=K(b))&&null===d.Ca();)d=Uc(d,c),b=N(b);return d}function Jh(a,b){var c=[];Nh(a,b,c);c.sort(function(a,b){return a.ef-b.ef});return c}function Nh(a,b,c){var d=b.Ca();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.O(function(b){Nh(a,b,c)})}function Ih(a,b){var c=b.Ca();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Vc(b,0<c.length?c:null)}b.O(function(b){Ih(a,b)})}
function Bh(a,b){var c=Lh(a,b).path(),d=Uc(a.mc,b);Yc(d,function(b){Oh(a,b)});Oh(a,d);Xc(d,function(b){Oh(a,b)});return c}
function Oh(a,b){var c=b.Ca();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(D(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Td="set"):(D(1===c[h].status,"Unexpected transaction status in abort"),c[h].Rd(),e=e.concat(eh(a.K,c[h].Ba,!0)),c[h].G&&d.push(q(c[h].G,null,Error("set"),!1,null))));-1===f?Vc(b,null):c.length=f+1;cf(a.ca,b.path(),e);for(h=0;h<d.length;h++)fc(d[h])}};function Ug(){this.lb={};this.wf=!1}Ug.prototype.ab=function(){for(var a in this.lb)this.lb[a].ab()};Ug.prototype.kc=function(){for(var a in this.lb)this.lb[a].kc()};Ug.prototype.ce=function(a){this.wf=a};ca(Ug);Ug.prototype.interrupt=Ug.prototype.ab;Ug.prototype.resume=Ug.prototype.kc;var W={};W.nc=Ag;W.DataConnection=W.nc;Ag.prototype.ng=function(a,b){this.ua("q",{p:a},b)};W.nc.prototype.simpleListen=W.nc.prototype.ng;Ag.prototype.Hf=function(a,b){this.ua("echo",{d:a},b)};W.nc.prototype.echo=W.nc.prototype.Hf;Ag.prototype.interrupt=Ag.prototype.ab;W.zf=og;W.RealTimeConnection=W.zf;og.prototype.sendRequest=og.prototype.ua;og.prototype.close=og.prototype.close;
W.Rf=function(a){var b=Ag.prototype.put;Ag.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Ag.prototype.put=b}};W.hijackHash=W.Rf;W.yf=zb;W.ConnectionTarget=W.yf;W.ja=function(a){return a.ja()};W.queryIdentifier=W.ja;W.Uf=function(a){return a.u.Ra.$};W.listens=W.Uf;W.ce=function(a){Ug.Vb().ce(a)};W.forceRestClient=W.ce;W.Context=Ug;function Ph(a,b){this.committed=a;this.snapshot=b};function X(a,b,c,d){this.u=a;this.path=b;this.m=c;this.Nc=d}
function Qh(a){var b=null,c=null;a.ka&&(b=ff(a));a.na&&(c=hf(a));if(a.g===tc){if(a.ka){if("[MIN_NAME]"!=ef(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=gf(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===H){if(null!=b&&!Nd(b)||null!=c&&!Nd(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(D(a.g instanceof pc||a.g===wc,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function Rh(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.mb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Sh(a,b){if(!0===a.Nc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.wb=function(){y("Query.ref",0,0,arguments.length);return new U(this.u,this.path)};
g.gc=function(a,b,c,d){y("Query.on",2,4,arguments.length);Td("Query.on",a,!1);B("Query.on",2,b,!1);var e=Th("Query.on",c,d);if("value"===a)Fh(this.u,this,new Vg(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;Fh(this.u,this,new Wg(f,e.cancel,e.Ma))}return b};
g.Ic=function(a,b,c){y("Query.off",0,3,arguments.length);Td("Query.off",a,!0);B("Query.off",2,b,!0);ob("Query.off",3,c);var d=null,e=null;"value"===a?d=new Vg(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Wg(e,null,c||null));e=this.u;d=".info"===K(this.path)?e.pd.kb(this,d):e.K.kb(this,d);af(e.ca,this.path,d)};
g.$f=function(a,b){function c(k){f&&(f=!1,e.Ic(a,c),b&&b.call(d.Ma,k),h.resolve(k))}y("Query.once",1,4,arguments.length);Td("Query.once",a,!1);B("Query.once",2,b,!0);var d=Th("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new ib;kb(h.ra);this.gc(a,c,function(b){e.Ic(a,c);d.cancel&&d.cancel.call(d.Ma,b);h.reject(b)});return h.ra};
g.ne=function(a){y("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.ne(a),this.Nc)};
g.oe=function(a){y("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.oe(a),this.Nc)};
g.ag=function(a){y("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Vd("Query.orderByChild",a);Sh(this,"Query.orderByChild");var b=new E(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
b=new pc(b);b=of(this.m,b);Qh(b);return new X(this.u,this.path,b,!0)};g.bg=function(){y("Query.orderByKey",0,0,arguments.length);Sh(this,"Query.orderByKey");var a=of(this.m,tc);Qh(a);return new X(this.u,this.path,a,!0)};g.cg=function(){y("Query.orderByPriority",0,0,arguments.length);Sh(this,"Query.orderByPriority");var a=of(this.m,H);Qh(a);return new X(this.u,this.path,a,!0)};
g.dg=function(){y("Query.orderByValue",0,0,arguments.length);Sh(this,"Query.orderByValue");var a=of(this.m,wc);Qh(a);return new X(this.u,this.path,a,!0)};g.Nd=function(a,b){y("Query.startAt",0,2,arguments.length);Od("Query.startAt",a,this.path,!0);Ud("Query.startAt",b);var c=this.m.Nd(a,b);Rh(c);Qh(c);if(this.m.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new X(this.u,this.path,c,this.Nc)};
g.gd=function(a,b){y("Query.endAt",0,2,arguments.length);Od("Query.endAt",a,this.path,!0);Ud("Query.endAt",b);var c=this.m.gd(a,b);Rh(c);Qh(c);if(this.m.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.u,this.path,c,this.Nc)};
g.If=function(a,b){y("Query.equalTo",1,2,arguments.length);Od("Query.equalTo",a,this.path,!1);Ud("Query.equalTo",b);if(this.m.ka)throw Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");if(this.m.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).gd(a,b)};
g.toString=function(){y("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.u.toString()+(b||"/")};g.toJSON=function(){y("Query.toJSON",0,1,arguments.length);return this.toString()};g.ja=function(){var a=ac(pf(this.m));return"{}"===a?"default":a};
g.isEqual=function(a){y("Query.isEqual",1,1,arguments.length);if(!(a instanceof X))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var b=this.u===a.u,c=this.path.Z(a.path),d=this.ja()===a.ja();return b&&c&&d};
function Th(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,B(a,3,d.cancel,!0),d.Ma=c,ob(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(A(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.gc;X.prototype.off=X.prototype.Ic;X.prototype.once=X.prototype.$f;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.ag;
X.prototype.orderByKey=X.prototype.bg;X.prototype.orderByPriority=X.prototype.cg;X.prototype.orderByValue=X.prototype.dg;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.gd;X.prototype.equalTo=X.prototype.If;X.prototype.toString=X.prototype.toString;X.prototype.isEqual=X.prototype.isEqual;gc(X.prototype,"ref",X.prototype.wb);function Y(a,b){this.ta=a;this.qa=b}Y.prototype.cancel=function(a){y("Firebase.onDisconnect().cancel",0,1,arguments.length);B("Firebase.onDisconnect().cancel",1,a,!0);var b=new ib;this.ta.xd(this.qa,jb(b,a));return b.ra};Y.prototype.cancel=Y.prototype.cancel;Y.prototype.remove=function(a){y("Firebase.onDisconnect().remove",0,1,arguments.length);Wd("Firebase.onDisconnect().remove",this.qa);B("Firebase.onDisconnect().remove",1,a,!0);var b=new ib;Ch(this.ta,this.qa,null,jb(b,a));return b.ra};
Y.prototype.remove=Y.prototype.remove;Y.prototype.set=function(a,b){y("Firebase.onDisconnect().set",1,2,arguments.length);Wd("Firebase.onDisconnect().set",this.qa);Od("Firebase.onDisconnect().set",a,this.qa,!1);B("Firebase.onDisconnect().set",2,b,!0);var c=new ib;Ch(this.ta,this.qa,a,jb(c,b));return c.ra};Y.prototype.set=Y.prototype.set;
Y.prototype.Jb=function(a,b,c){y("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Wd("Firebase.onDisconnect().setWithPriority",this.qa);Od("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Sd("Firebase.onDisconnect().setWithPriority",2,b);B("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new ib;Dh(this.ta,this.qa,a,b,jb(d,c));return d.ra};Y.prototype.setWithPriority=Y.prototype.Jb;
Y.prototype.update=function(a,b){y("Firebase.onDisconnect().update",1,2,arguments.length);Wd("Firebase.onDisconnect().update",this.qa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;J("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Rd("Firebase.onDisconnect().update",a,this.qa);B("Firebase.onDisconnect().update",2,b,!0);
c=new ib;Eh(this.ta,this.qa,a,jb(c,b));return c.ra};Y.prototype.update=Y.prototype.update;var Z={Mf:function(){dg=Zf=!0}};Z.forceLongPolling=Z.Mf;Z.Nf=function(){eg=!0};Z.forceWebSockets=Z.Nf;Z.Tf=function(){return Yf.isAvailable()};Z.isWebSocketsAvailable=Z.Tf;Z.lg=function(a,b){a.u.Ra.ze=b};Z.setSecurityDebugCallback=Z.lg;Z.Be=function(a,b){a.u.Be(b)};Z.stats=Z.Be;Z.Ce=function(a,b){a.u.Ce(b)};Z.statsIncrementCounter=Z.Ce;Z.fd=function(a){return a.u.fd};Z.dataUpdateCount=Z.fd;Z.Sf=function(a,b){a.u.je=b};Z.interceptServerData=Z.Sf;function U(a,b){if(!(a instanceof Qg))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,mf,!1);this.then=void 0;this["catch"]=void 0}la(U,X);g=U.prototype;g.getKey=function(){y("Firebase.key",0,0,arguments.length);return this.path.e()?null:Oc(this.path)};
g.n=function(a){y("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof E))if(null===K(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Vd("Firebase.child",b)}else Vd("Firebase.child",a);return new U(this.u,this.path.n(a))};g.getParent=function(){y("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.u,a)};
g.Of=function(){y("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Gf=function(){return this.u.Ya};g.set=function(a,b){y("Firebase.set",1,2,arguments.length);Wd("Firebase.set",this.path);Od("Firebase.set",a,this.path,!1);B("Firebase.set",2,b,!0);var c=new ib;this.u.Jb(this.path,a,null,jb(c,b));return c.ra};
g.update=function(a,b){y("Firebase.update",1,2,arguments.length);Wd("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;J("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Rd("Firebase.update",a,this.path);B("Firebase.update",2,b,!0);c=new ib;this.u.update(this.path,a,jb(c,b));return c.ra};
g.Jb=function(a,b,c){y("Firebase.setWithPriority",2,3,arguments.length);Wd("Firebase.setWithPriority",this.path);Od("Firebase.setWithPriority",a,this.path,!1);Sd("Firebase.setWithPriority",2,b);B("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new ib;this.u.Jb(this.path,a,b,jb(d,c));return d.ra};
g.remove=function(a){y("Firebase.remove",0,1,arguments.length);Wd("Firebase.remove",this.path);B("Firebase.remove",1,a,!0);return this.set(null,a)};
g.transaction=function(a,b,c){y("Firebase.transaction",1,3,arguments.length);Wd("Firebase.transaction",this.path);B("Firebase.transaction",1,a,!1);B("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(A("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new ib;ha(b)&&kb(d.ra);Gh(this.u,this.path,a,function(a,c,h){a?
d.reject(a):d.resolve(new Ph(c,h));ha(b)&&b(a,c,h)},c);return d.ra};g.kg=function(a,b){y("Firebase.setPriority",1,2,arguments.length);Wd("Firebase.setPriority",this.path);Sd("Firebase.setPriority",1,a);B("Firebase.setPriority",2,b,!0);var c=new ib;this.u.Jb(this.path.n(".priority"),a,null,jb(c,b));return c.ra};
g.push=function(a,b){y("Firebase.push",0,2,arguments.length);Wd("Firebase.push",this.path);Od("Firebase.push",a,this.path,!0);B("Firebase.push",2,b,!0);var c=wh(this.u),d=Kc(c),c=this.n(d),e=this.n(d),d=null!=a?c.set(a,b).then(function(){return e}):hb.resolve(e);c.then=q(d.then,d);c["catch"]=q(d.then,d,void 0);ha(b)&&kb(d);return c};g.ib=function(){Wd("Firebase.onDisconnect",this.path);return new Y(this.u,this.path)};U.prototype.child=U.prototype.n;U.prototype.set=U.prototype.set;
U.prototype.update=U.prototype.update;U.prototype.setWithPriority=U.prototype.Jb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.kg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.ib;gc(U.prototype,"database",U.prototype.Gf);gc(U.prototype,"key",U.prototype.getKey);gc(U.prototype,"parent",U.prototype.getParent);gc(U.prototype,"root",U.prototype.Of);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
try{firebase.INTERNAL.registerService("database",function(a){var b=Ug.Vb(),c=a.options.databaseURL;n(c)||Vb("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=Wb(c),c=d.jc;Xd("Invalid Firebase Database URL",d);d.path.e()||Vb("Database URL must point to the root of a Firebase Database (not including a child path).");(d=w(b.lb,a.name))&&Vb("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new Qg(c,b.wf,a);b.lb[a.name]=
d;return d.Ya},{Reference:U,Query:X,Database:Pg,enableLogging:Sb,INTERNAL:Z,TEST_ACCESS:W,ServerValue:Sg})}catch(Uh){Vb("Failed to register the Firebase Database Service ("+Uh+")")};})();

}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase.database;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

!function(global, factory) {
     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
}(this, function(exports) {
    function VNode(nodeName, attributes, children) {
        this.nodeName = nodeName;
        this.attributes = attributes;
        this.children = children;
        this.key = attributes && attributes.key;
    }
    function h(nodeName, attributes) {
        var children, lastSimple, child, simple, i;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) instanceof Array) for (i = child.length; i--; ) stack.push(child[i]); else if (null != child && child !== !0 && child !== !1) {
            if ('number' == typeof child) child = String(child);
            simple = 'string' == typeof child;
            if (simple && lastSimple) children[children.length - 1] += child; else {
                (children || (children = [])).push(child);
                lastSimple = simple;
            }
        }
        var p = new VNode(nodeName, attributes || void 0, children || EMPTY_CHILDREN);
        if (options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        if (props) for (var i in props) obj[i] = props[i];
        return obj;
    }
    function clone(obj) {
        return extend({}, obj);
    }
    function delve(obj, key) {
        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
        return obj;
    }
    function isFunction(obj) {
        return 'function' == typeof obj;
    }
    function isString(obj) {
        return 'string' == typeof obj;
    }
    function hashToClassName(c) {
        var str = '';
        for (var prop in c) if (c[prop]) {
            if (str) str += ' ';
            str += prop;
        }
        return str;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function createLinkedState(component, key, eventPath) {
        var path = key.split('.');
        return function(e) {
            var t = e && e.target || this, state = {}, obj = state, v = isString(eventPath) ? delve(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e, i = 0;
            for (;i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
            obj[path[i]] = v;
            component.setState(state);
        };
    }
    function enqueueRender(component) {
        if (!component._dirty && (component._dirty = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        while (p = list.pop()) if (p._dirty) renderComponent(p);
    }
    function isFunctionalComponent(vnode) {
        var nodeName = vnode && vnode.nodeName;
        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
    }
    function buildFunctionalComponent(vnode, context) {
        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
    }
    function isSameNodeType(node, vnode) {
        if (isString(vnode)) return node instanceof Text;
        if (isString(vnode.nodeName)) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
        if (isFunction(vnode.nodeName)) return (node._componentConstructor ? node._componentConstructor === vnode.nodeName : !0) || isFunctionalComponent(vnode); else return;
    }
    function isNamedNode(node, nodeName) {
        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
    }
    function getNodeProps(vnode) {
        var props = clone(vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function removeNode(node) {
        var p = node.parentNode;
        if (p) p.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('class' === name && value && 'object' == typeof value) value = hashToClassName(value);
        if ('key' === name) ; else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var l = node._listeners || (node._listeners = {});
            name = toLowerCase(name.substring(2));
            if (value) {
                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            l[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name.match(/^xlink\:?(.+)/);
            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this._listeners[e.type](options.event && options.event(e) || e);
    }
    function collectNode(node) {
        removeNode(node);
        if (node instanceof Element) {
            node._component = node._componentConstructor = null;
            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
            (nodes[_name] || (nodes[_name] = [])).push(node);
        }
    }
    function createNode(nodeName, isSvg) {
        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
        node.normalizedNodeName = name;
        return node;
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = parent && void 0 !== parent.ownerSVGElement;
            hydrating = dom && !(ATTR_KEY in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll) {
        var ref = vnode && vnode.attributes && vnode.attributes.ref;
        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
        if (null == vnode) vnode = '';
        if (isString(vnode)) {
            if (dom && dom instanceof Text && dom.parentNode) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                if (dom) recollectNodeTree(dom);
                dom = document.createTextNode(vnode);
            }
            return dom;
        }
        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
        var out = dom, nodeName = String(vnode.nodeName), prevSvgMode = isSvgMode, vchildren = vnode.children;
        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
            out = createNode(nodeName, isSvgMode);
            while (dom.firstChild) out.appendChild(dom.firstChild);
            if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
            recollectNodeTree(dom);
        }
        var fc = out.firstChild, props = out[ATTR_KEY];
        if (!props) {
            out[ATTR_KEY] = props = {};
            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && fc && fc instanceof Text && !fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || fc) innerDiffNode(out, vchildren, context, mountAll, !!props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        if (ref) (props.ref = ref)(out);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, absorb) {
        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
        if (len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child[ATTR_KEY], key = vlen ? (c = _child._component) ? c.__key : props ? props.key : null : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (hydrating || absorb || props || _child instanceof Text) children[childrenLen++] = _child;
        }
        if (vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && key in keyed) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
                c = children[j];
                if (c && isSameNodeType(c, vchild)) {
                    child = c;
                    children[j] = void 0;
                    if (j === childrenLen - 1) childrenLen--;
                    if (j === min) min++;
                    break;
                }
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) {
                if (child === originalChildren[i + 1]) removeNode(originalChildren[i]);
                dom.insertBefore(child, originalChildren[i] || null);
            }
        }
        if (keyedLen) for (var i in keyed) if (keyed[i]) recollectNodeTree(keyed[i]);
        while (min <= childrenLen) {
            child = children[childrenLen--];
            if (child) recollectNodeTree(child);
        }
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component, !unmountOnly); else {
            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
            if (!unmountOnly) collectNode(node);
            var c;
            while (c = node.lastChild) recollectNodeTree(c, unmountOnly);
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if (!(attrs && name in attrs) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        if (attrs) for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name, list = components[name];
        if (list) list.push(component); else components[name] = [ component ];
    }
    function createComponent(Ctor, props, context) {
        var inst = new Ctor(props, context), list = components[Ctor.name];
        Component.call(inst, props, context);
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.nextBase = list[i].nextBase;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component._disable) {
            component._disable = !0;
            if (component.__ref = props.ref) delete props.ref;
            if (component.__key = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.prevContext) component.prevContext = component.context;
                component.context = context;
            }
            if (!component.prevProps) component.prevProps = component.props;
            component.props = props;
            component._disable = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__ref) component.__ref(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component._disable) {
            var skip, rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, nextBase = component.nextBase, initialBase = isUpdate || nextBase, initialChildComponent = component._component;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
            component._dirty = !1;
            if (!skip) {
                if (component.render) rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if (isFunction(childComponent)) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__key) setComponentProps(inst, childProps, 1, context); else {
                        toUnmount = inst;
                        inst = createComponent(childComponent, childProps, context);
                        inst.nextBase = inst.nextBase || nextBase;
                        inst._parentComponent = component;
                        component._component = inst;
                        setComponentProps(inst, childProps, 0, context);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component, t = component;
                    while (t = t._parentComponent) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            var fn, cb = component._renderCallbacks;
            if (cb) while (fn = cb.pop()) fn.call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent, !0);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.nextBase) {
                c.nextBase = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom);
            }
        }
        return dom;
    }
    function unmountComponent(component, remove) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component._disable = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner, remove); else if (base) {
            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
            component.nextBase = base;
            if (remove) {
                removeNode(base);
                collectComponent(component);
            }
            var c;
            while (c = base.lastChild) recollectNodeTree(c, !remove);
        }
        if (component.__ref) component.__ref(null);
        if (component.componentDidUnmount) component.componentDidUnmount();
    }
    function Component(props, context) {
        this._dirty = !0;
        this.context = context;
        this.props = props;
        if (!this.state) this.state = {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var lcCache = {};
    var toLowerCase = function(s) {
        return lcCache[s] || (lcCache[s] = s.toLowerCase());
    };
    var resolved = 'undefined' != typeof Promise && Promise.resolve();
    var defer = resolved ? function(f) {
        resolved.then(f);
    } : setTimeout;
    var EMPTY = {};
    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
    var NON_DIMENSION_PROPS = {
        boxFlex: 1,
        boxFlexGroup: 1,
        columnCount: 1,
        fillOpacity: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        fontWeight: 1,
        lineClamp: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        strokeOpacity: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1
    };
    var NON_BUBBLING_EVENTS = {
        blur: 1,
        error: 1,
        focus: 1,
        load: 1,
        resize: 1,
        scroll: 1
    };
    var items = [];
    var nodes = {};
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        linkState: function(key, eventPath) {
            var c = this._linkedStates || (this._linkedStates = {});
            return c[key + eventPath] || (c[key + eventPath] = createLinkedState(this, key, eventPath));
        },
        setState: function(state, callback) {
            var s = this.state;
            if (!this.prevState) this.prevState = clone(s);
            extend(s, isFunction(state) ? state(s, this.props) : state);
            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function() {
            renderComponent(this, 2);
        },
        render: function() {}
    });
    exports.h = h;
    exports.cloneElement = cloneElement;
    exports.Component = Component;
    exports.render = render;
    exports.rerender = rerender;
    exports.options = options;
});
//# sourceMappingURL=preact.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);