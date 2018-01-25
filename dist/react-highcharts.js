!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react"),require("react-dom"),require("prop-types"),require("highcharts"));else if("function"==typeof define&&define.amd)define(["react","react-dom","prop-types","highcharts"],e);else{var n="object"==typeof exports?e(require("react"),require("react-dom"),require("prop-types"),require("highcharts")):e(t.React,t.ReactDOM,t.PropTypes,t.Highcharts);for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}("undefined"!=typeof self?self:this,function(t,e,n,i){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=42)}([function(t,e){var n=Array.isArray;t.exports=n},function(t,e){function n(t){return r.call(t)}var i=Object.prototype,r=i.toString;t.exports=n},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e,n){"use strict";(t.exports={}).forEach=function(t,e){for(var n=0;n<t.length;n++){var i=e(t[n]);if(i)return i}}},function(t,e,n){"use strict";var i=t.exports={};i.isIE=function(t){return!!function(){var t=navigator.userAgent.toLowerCase();return-1!==t.indexOf("msie")||-1!==t.indexOf("trident")||-1!==t.indexOf(" edge/")}()&&(!t||t===function(){var t=3,e=document.createElement("div"),n=e.getElementsByTagName("i");do{e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e"}while(n[0]);return t>4?t:void 0}())},i.isLegacyOpera=function(){return!!window.opera}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var n=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));a.call(n);var o=g()(n.resize,250,{leading:!0,trailing:!0});return n.state={chart:null,fnResize:o,resize:null},n}return o(e,t),z(e,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillReceiveProps",value:function(t){var e=this,n=e.props.loading,i=e.state.chart;i&&n!==t.loading&&e.setLoading(i,t.loading)}},{key:"componentDidUpdate",value:function(t,e){this.update()}},{key:"componentWillUnmount",value:function(){this.uninit()}},{key:"render",value:function(){var t=this,e=t.props,n=e.className,i=e.style;return m.a.createElement("div",{className:n,style:i})}}]),e}(m.a.Component),a=function(){var n=this;this.setLoading=function(t,e){!0===e?t.showLoading():p()(e)?t.showLoading(e):t.hideLoading()},this.init=function(){var i=n,r=i.props,o=r.loading,a=r.resizable,s=r.theme,c=r.options,u=r.onLoad,d=i.state,h=d.chart,p=d.resize,v=d.fnResize;if(!h){var g=x.a.findDOMNode(i);f()(s)&&e.setOptions(s);var b=O[t],m=e[b](g,c,function(){l()(u)&&setTimeout(function(){return u(m,e)})});i.setLoading(m,o),p&&l()(p.uninstall)&&p.uninstall(g);var y=null;!0===a&&(y=j()({strategy:"scroll"}),y.listenTo(g,function(t){var e=t.offsetWidth,n=t.offsetHeight;l()(v)&&v({width:e,height:n})})),i.setState({chart:m,resize:y})}},this.uninit=function(){var t=n,e=t.state,i=e.chart,r=e.fnResize,o=e.resize;if(o&&l()(o.uninstall)){var a=x.a.findDOMNode(t);o.uninstall(a)}r&&l()(r.cancel)&&r.cancel(),i&&l()(i.destroy)&&i.destroy()},this.resize=function(t){var e=n,i=e.props.onResize,r=e.state.chart;if(r){var o=c()(t,"width"),a=c()(t,"height");r.setSize(o,a),l()(i)&&i(o,a)}},this.update=function(){var t=n,e=t.props.options,i=t.state.chart;i&&e&&i.update(e)}};return n.propTypes={className:E.a.string,style:E.a.object,loading:E.a.oneOfType([E.a.string,E.a.bool]),theme:E.a.object,resizable:E.a.bool,options:E.a.object.isRequired,onLoad:E.a.func,onResize:E.a.func},n.defaultProps={className:"react-highcharts",style:{width:"100%",height:"100%"},loading:!1,theme:null,resizable:!1,onLoad:function(){},onResize:function(t,e){}},n}var s=n(7),c=n.n(s),u=n(16),l=n.n(u),d=n(17),f=n.n(d),h=n(20),p=n.n(h),v=n(21),g=n.n(v),b=n(28),m=n.n(b),y=n(29),x=n.n(y),w=n(30),E=n.n(w),S=n(31),j=n.n(S),z=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),O={charts:"chart",maps:"mapChart",stock:"stockChart"};e.a=a},function(t,e,n){function i(t,e,n){var i=null==t?void 0:r(t,e);return void 0===i?n:i}var r=n(8);t.exports=i},function(t,e,n){function i(t,e){e=r(e,t);for(var n=0,i=e.length;null!=t&&n<i;)t=t[o(e[n++])];return n&&n==i?t:void 0}var r=n(9),o=n(15);t.exports=i},function(t,e,n){function i(t,e){return r(t)?t:o(t,e)?[t]:a(s(t))}var r=n(0),o=n(10),a=n(12),s=n(14);t.exports=i},function(t,e,n){function i(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(s.test(t)||!a.test(t)||null!=e&&t in Object(e))}var r=n(0),o=n(11),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=i},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){var i=n(13),r=/^\./,o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,s=i(function(t){var e=[];return r.test(t)&&e.push(""),t.replace(o,function(t,n,i,r){e.push(i?r.replace(a,"$1"):n||t)}),e});t.exports=s},function(t,e){function n(t){return t}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){function i(t){if(!o(t))return!1;var e=r(t);return e==s||e==c||e==a||e==u}var r=n(1),o=n(2),a="[object AsyncFunction]",s="[object Function]",c="[object GeneratorFunction]",u="[object Proxy]";t.exports=i},function(t,e,n){function i(t){if(!a(t)||r(t)!=s)return!1;var e=o(t);if(null===e)return!0;var n=d.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&l.call(n)==f}var r=n(1),o=n(18),a=n(3),s="[object Object]",c=Function.prototype,u=Object.prototype,l=c.toString,d=u.hasOwnProperty,f=l.call(Object);t.exports=i},function(t,e,n){var i=n(19),r=i(Object.getPrototypeOf,Object);t.exports=r},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e,n){function i(t){return"string"==typeof t||!o(t)&&a(t)&&r(t)==s}var r=n(1),o=n(0),a=n(3),s="[object String]";t.exports=i},function(t,e,n){function i(t,e,n){var i=!0,s=!0;if("function"!=typeof t)throw new TypeError(a);return o(n)&&(i="leading"in n?!!n.leading:i,s="trailing"in n?!!n.trailing:s),r(t,e,{leading:i,maxWait:e,trailing:s})}var r=n(22),o=n(2),a="Expected a function";t.exports=i},function(t,e,n){function i(t,e,n){function i(e){var n=m,i=y;return m=y=void 0,j=e,w=t.apply(i,n)}function l(t){return j=t,E=setTimeout(h,e),z?i(t):w}function d(t){var n=t-S,i=t-j,r=e-n;return O?u(r,x-i):r}function f(t){var n=t-S,i=t-j;return void 0===S||n>=e||n<0||O&&i>=x}function h(){var t=o();if(f(t))return p(t);E=setTimeout(h,d(t))}function p(t){return E=void 0,k&&m?i(t):(m=y=void 0,w)}function v(){void 0!==E&&clearTimeout(E),j=0,m=S=y=E=void 0}function g(){return void 0===E?w:p(o())}function b(){var t=o(),n=f(t);if(m=arguments,y=this,S=t,n){if(void 0===E)return l(S);if(O)return E=setTimeout(h,e),i(S)}return void 0===E&&(E=setTimeout(h,e)),w}var m,y,x,w,E,S,j=0,z=!1,O=!1,k=!0;if("function"!=typeof t)throw new TypeError(s);return e=a(e)||0,r(n)&&(z=!!n.leading,O="maxWait"in n,x=O?c(a(n.maxWait)||0,e):x,k="trailing"in n?!!n.trailing:k),b.cancel=v,b.flush=g,b}var r=n(2),o=n(23),a=n(27),s="Expected a function",c=Math.max,u=Math.min;t.exports=i},function(t,e,n){var i=n(24),r=function(){return i.Date.now()};t.exports=r},function(t,e,n){var i=n(25),r="object"==typeof self&&self&&self.Object===Object&&self,o=i||r||Function("return this")();t.exports=o},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(26))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e,n){"use strict";function i(t){return Array.isArray(t)||void 0!==t.length}function r(t){if(Array.isArray(t))return t;var e=[];return s(t,function(t){e.push(t)}),e}function o(t){return t&&1===t.nodeType}function a(t,e,n){var i=t[e];return void 0!==i&&null!==i||void 0===n?i:n}var s=n(4).forEach,c=n(32),u=n(33),l=n(34),d=n(35),f=n(36),h=n(5),p=n(37),v=n(39),g=n(40),b=n(41);t.exports=function(t){function e(t,e,n){function c(t){var e=z.get(t);s(e,function(e){e(t)})}function u(t,e,n){z.add(e,n),t&&n(e)}if(n||(n=e,e=t,t={}),!e)throw new Error("At least one element required.");if(!n)throw new Error("Listener required.");if(o(e))e=[e];else{if(!i(e))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=r(e)}var l=0,d=a(t,"callOnAdd",S.callOnAdd),f=a(t,"onReady",function(){}),h=a(t,"debug",S.debug);s(e,function(t){v.getState(t)||(v.initState(t),m.set(t));var i=m.get(t);if(h&&w.log("Attaching listener to element",i,t),!O.isDetectable(t))return h&&w.log(i,"Not detectable."),O.isBusy(t)?(h&&w.log(i,"System busy making it detectable"),u(d,t,n),T[i]=T[i]||[],void T[i].push(function(){++l===e.length&&f()})):(h&&w.log(i,"Making detectable..."),O.markBusy(t,!0),j.makeDetectable({debug:h},t,function(t){if(h&&w.log(i,"onElementDetectable"),v.getState(t)){O.markAsDetectable(t),O.markBusy(t,!1),j.addListener(t,c),u(d,t,n);var r=v.getState(t);if(r&&r.startSize){var o=t.offsetWidth,a=t.offsetHeight;r.startSize.width===o&&r.startSize.height===a||c(t)}T[i]&&s(T[i],function(t){t()})}else h&&w.log(i,"Element uninstalled before being detectable.");delete T[i],++l===e.length&&f()}));h&&w.log(i,"Already detecable, adding listener."),u(d,t,n),l++}),l===e.length&&f()}function n(t){if(!t)return w.error("At least one element is required.");if(o(t))t=[t];else{if(!i(t))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");t=r(t)}s(t,function(t){z.removeAllListeners(t),j.uninstall(t),v.cleanState(t)})}t=t||{};var m;if(t.idHandler)m={get:function(e){return t.idHandler.get(e,!0)},set:t.idHandler.set};else{var y=l(),x=d({idGenerator:y,stateHandler:v});m=x}var w=t.reporter;if(!w){w=f(!1===w)}var E=a(t,"batchProcessor",p({reporter:w})),S={};S.callOnAdd=!!a(t,"callOnAdd",!0),S.debug=!!a(t,"debug",!1);var j,z=u(m),O=c({stateHandler:v}),k=a(t,"strategy","object"),A={reporter:w,batchProcessor:E,stateHandler:v,idHandler:m};if("scroll"===k&&(h.isLegacyOpera()?(w.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),k="object"):h.isIE(9)&&(w.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),k="object")),"scroll"===k)j=b(A);else{if("object"!==k)throw new Error("Invalid strategy name: "+k);j=g(A)}var T={};return{listenTo:e,removeListener:z.removeListener,removeAllListeners:z.removeAllListeners,uninstall:n}}},function(t,e,n){"use strict";t.exports=function(t){function e(t){var e=o(t);return e&&!!e.isDetectable}function n(t){o(t).isDetectable=!0}function i(t){return!!o(t).busy}function r(t,e){o(t).busy=!!e}var o=t.stateHandler.getState;return{isDetectable:e,markAsDetectable:n,isBusy:i,markBusy:r}}},function(t,e,n){"use strict";t.exports=function(t){function e(e){var n=t.get(e);return void 0===n?[]:o[n]||[]}function n(e,n){var i=t.get(e);o[i]||(o[i]=[]),o[i].push(n)}function i(t,n){for(var i=e(t),r=0,o=i.length;r<o;++r)if(i[r]===n){i.splice(r,1);break}}function r(t){var n=e(t);n&&(n.length=0)}var o={};return{get:e,add:n,removeListener:i,removeAllListeners:r}}},function(t,e,n){"use strict";t.exports=function(){function t(){return e++}var e=1;return{generate:t}}},function(t,e,n){"use strict";t.exports=function(t){function e(t){var e=r(t);return e&&void 0!==e.id?e.id:null}function n(t){var e=r(t);if(!e)throw new Error("setId required the element to have a resize detection state.");var n=i.generate();return e.id=n,n}var i=t.idGenerator,r=t.stateHandler.getState;return{get:e,set:n}}},function(t,e,n){"use strict";t.exports=function(t){function e(){}var n={log:e,warn:e,error:e};if(!t&&window.console){var i=function(t,e){t[e]=function(){var t=console[e];if(t.apply)t.apply(console,arguments);else for(var n=0;n<arguments.length;n++)t(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},function(t,e,n){"use strict";function i(){function t(t,e){e||(e=t,t=0),t>o?o=t:t<a&&(a=t),i[t]||(i[t]=[]),i[t].push(e),r++}function e(){for(var t=a;t<=o;t++)for(var e=i[t],n=0;n<e.length;n++){var r=e[n];r()}}function n(){return r}var i={},r=0,o=0,a=0;return{add:t,process:e,size:n}}var r=n(38);t.exports=function(t){function e(t,e){!p&&d&&l&&0===h.size()&&a(),h.add(t,e)}function n(){for(p=!0;h.size();){var t=h;h=i(),t.process()}p=!1}function o(t){p||(void 0===t&&(t=l),f&&(s(f),f=null),t?a():n())}function a(){f=c(n)}function s(t){return clearTimeout(t)}function c(t){return function(t){return setTimeout(t,0)}(t)}t=t||{};var u=t.reporter,l=r.getOption(t,"async",!0),d=r.getOption(t,"auto",!0);d&&!l&&(u&&u.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),l=!0);var f,h=i(),p=!1;return{add:e,force:o}}},function(t,e,n){"use strict";function i(t,e,n){var i=t[e];return void 0!==i&&null!==i||void 0===n?i:n}(t.exports={}).getOption=i},function(t,e,n){"use strict";function i(t){return t[a]={},r(t)}function r(t){return t[a]}function o(t){delete t[a]}var a="_erd";t.exports={initState:i,getState:r,cleanState:o}},function(t,e,n){"use strict";var i=n(5);t.exports=function(t){function e(t,e){function n(){e(t)}if(!r(t))throw new Error("Element is not detectable by this strategy.");if(i.isIE(8))c(t).object={proxy:n},t.attachEvent("onresize",n);else{r(t).contentDocument.defaultView.addEventListener("resize",n)}}function n(t,e,n){n||(n=e,e=t,t=null),t=t||{};t.debug;i.isIE(8)?n(e):function(t,e){function n(){function n(){if("static"===u.position){t.style.position="relative";var e=function(t,e,n,i){var r=n[i];"auto"!==r&&"0"!==function(t){return t.replace(/[^-\d\.]/g,"")}(r)&&(t.warn("An element that is positioned static has style."+i+"="+r+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",e),e.style[i]=0)};e(a,t,u,"top"),e(a,t,u,"right"),e(a,t,u,"bottom"),e(a,t,u,"left")}}function s(){function i(t,e){if(!t.contentDocument)return void setTimeout(function(){i(t,e)},100);e(t.contentDocument)}o||n(),i(this,function(n){e(t)})}""!==u.position&&(n(u),o=!0);var l=document.createElement("object");l.style.cssText=r,l.tabIndex=-1,l.type="text/html",l.onload=s,i.isIE()||(l.data="about:blank"),t.appendChild(l),c(t).object=l,i.isIE()&&(l.data="about:blank")}var r="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",o=!1,u=window.getComputedStyle(t),l=t.offsetWidth,d=t.offsetHeight;c(t).startSize={width:l,height:d},s?s.add(n):n()}(e,n)}function r(t){return c(t).object}function o(t){i.isIE(8)?t.detachEvent("onresize",c(t).object.proxy):t.removeChild(r(t)),delete c(t).object}t=t||{};var a=t.reporter,s=t.batchProcessor,c=t.stateHandler.getState;if(!a)throw new Error("Missing required dependency: reporter.");return{makeDetectable:n,addListener:e,uninstall:o}}},function(t,e,n){"use strict";var i=n(4).forEach;t.exports=function(t){function e(t){t.className+=" "+v+"_animation_active"}function n(t,e,n){if(t.addEventListener)t.addEventListener(e,n);else{if(!t.attachEvent)return l.error("[scroll] Don't know how to add event listeners.");t.attachEvent("on"+e,n)}}function r(t,e,n){if(t.removeEventListener)t.removeEventListener(e,n);else{if(!t.detachEvent)return l.error("[scroll] Don't know how to remove event listeners.");t.detachEvent("on"+e,n)}}function o(t){return f(t).container.childNodes[0].childNodes[0].childNodes[0]}function a(t){return f(t).container.childNodes[0].childNodes[0].childNodes[1]}function s(t,e){if(!f(t).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");f(t).listeners.push(e)}function c(t,r,s){function c(){if(t.debug){var e=Array.prototype.slice.call(arguments);if(e.unshift(h.get(r),"Scroll: "),l.log.apply)l.log.apply(null,e);else for(var n=0;n<e.length;n++)l.log(e[n])}}function u(t){var e=f(t).container.childNodes[0],n=getComputedStyle(e);return!n.width||-1===n.width.indexOf("px")}function g(){var t=getComputedStyle(r),e={};return e.position=t.position,e.width=r.offsetWidth,e.height=r.offsetHeight,e.top=t.top,e.right=t.right,e.bottom=t.bottom,e.left=t.left,e.widthCSS=t.width,e.heightCSS=t.height,e}function b(){var t=g();f(r).startSize={width:t.width,height:t.height},c("Element start size",f(r).startSize)}function m(){f(r).listeners=[]}function y(){if(c("storeStyle invoked."),!f(r))return void c("Aborting because element has been uninstalled");var t=g();f(r).style=t}function x(t,e,n){f(t).lastWidth=e,f(t).lastHeight=n}function w(t){return o(t).childNodes[0]}function E(){return 2*p.width+1}function S(){return 2*p.height+1}function j(t){return t+10+E()}function z(t){return t+10+S()}function O(t){return 2*t+E()}function k(t){return 2*t+S()}function A(t,e,n){var i=o(t),r=a(t),s=j(e),c=z(n),u=O(e),l=k(n);i.scrollLeft=s,i.scrollTop=c,r.scrollLeft=u,r.scrollTop=l}function T(){var t=f(r).container;if(!t){t=document.createElement("div"),t.className=v,t.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",f(r).container=t,e(t),r.appendChild(t);var i=function(){f(r).onRendered&&f(r).onRendered()};n(t,"animationstart",i),f(r).onAnimationStart=i}return t}function L(){function t(){f(r).onExpand&&f(r).onExpand()}function e(){f(r).onShrink&&f(r).onShrink()}if(c("Injecting elements"),!f(r))return void c("Aborting because element has been uninstalled");!function(){var t=f(r).style;if("static"===t.position){r.style.position="relative";var e=function(t,e,n,i){var r=n[i];"auto"!==r&&"0"!==function(t){return t.replace(/[^-\d\.]/g,"")}(r)&&(t.warn("An element that is positioned static has style."+i+"="+r+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",e),e.style[i]=0)};e(l,r,t,"top"),e(l,r,t,"right"),e(l,r,t,"bottom"),e(l,r,t,"left")}}();var i=f(r).container;i||(i=T());var o=p.width,a=p.height,s="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; "+function(t,e,n,i){return t=t?t+"px":"0",e=e?e+"px":"0",n=n?n+"px":"0",i=i?i+"px":"0","left: "+t+"; top: "+e+"; right: "+i+"; bottom: "+n+";"}(-(1+o),-(1+a),-a,-o),u=document.createElement("div"),d=document.createElement("div"),h=document.createElement("div"),g=document.createElement("div"),b=document.createElement("div"),m=document.createElement("div");u.dir="ltr",u.style.cssText="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",u.className=v,d.className=v,d.style.cssText=s,h.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",g.style.cssText="position: absolute; left: 0; top: 0;",b.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",m.style.cssText="position: absolute; width: 200%; height: 200%;",h.appendChild(g),b.appendChild(m),d.appendChild(h),d.appendChild(b),u.appendChild(d),i.appendChild(u),n(h,"scroll",t),n(b,"scroll",e),f(r).onExpandScroll=t,f(r).onShrinkScroll=e}function H(){function e(t,e,n){var i=w(t),r=j(e),o=z(n);i.style.width=r+"px",i.style.height=o+"px"}function n(n){var i=r.offsetWidth,o=r.offsetHeight;c("Storing current size",i,o),x(r,i,o),d.add(0,function(){if(!f(r))return void c("Aborting because element has been uninstalled");if(!s())return void c("Aborting because element container has not been initialized");if(t.debug){var n=r.offsetWidth,a=r.offsetHeight;n===i&&a===o||l.warn(h.get(r),"Scroll: Size changed before updating detector elements.")}e(r,i,o)}),d.add(1,function(){return f(r)?s()?void A(r,i,o):void c("Aborting because element container has not been initialized"):void c("Aborting because element has been uninstalled")}),n&&d.add(2,function(){return f(r)?s()?void n():void c("Aborting because element container has not been initialized"):void c("Aborting because element has been uninstalled")})}function s(){return!!f(r).container}function p(){c("notifyListenersIfNeeded invoked");var t=f(r);return function(){return void 0===f(r).lastNotifiedWidth}()&&t.lastWidth===t.startSize.width&&t.lastHeight===t.startSize.height?c("Not notifying: Size is the same as the start size, and there has been no notification yet."):t.lastWidth===t.lastNotifiedWidth&&t.lastHeight===t.lastNotifiedHeight?c("Not notifying: Size already notified"):(c("Current size not notified, notifying..."),t.lastNotifiedWidth=t.lastWidth,t.lastNotifiedHeight=t.lastHeight,void i(f(r).listeners,function(t){t(r)}))}function v(){if(c("startanimation triggered."),u(r))return void c("Ignoring since element is still unrendered...");c("Element rendered.");var t=o(r),e=a(r);0!==t.scrollLeft&&0!==t.scrollTop&&0!==e.scrollLeft&&0!==e.scrollTop||(c("Scrollbars out of sync. Updating detector elements..."),n(p))}function g(){if(c("Scroll detected."),u(r))return void c("Scroll event fired while unrendered. Ignoring...");var t=r.offsetWidth,e=r.offsetHeight;t!==f(r).lastWidth||e!==f(r).lastHeight?(c("Element size changed."),n(p)):c("Element size has not changed ("+t+"x"+e+").")}if(c("registerListenersAndPositionElements invoked."),!f(r))return void c("Aborting because element has been uninstalled");f(r).onRendered=v,f(r).onExpand=g,f(r).onShrink=g;var b=f(r).style;e(r,b.width,b.height)}function C(){if(c("finalizeDomMutation invoked."),!f(r))return void c("Aborting because element has been uninstalled");var t=f(r).style;x(r,t.width,t.height),A(r,t.width,t.height)}function _(){s(r)}function D(){c("Installing..."),m(),b(),d.add(0,y),d.add(1,L),d.add(2,H),d.add(3,C),d.add(4,_)}s||(s=r,r=t,t=null),t=t||{},c("Making detectable..."),!function(t){return!function(t){return t===t.ownerDocument.body||t.ownerDocument.body.contains(t)}(t)||null===getComputedStyle(t)}(r)?D():(c("Element is detached"),T(),c("Waiting until element is attached..."),f(r).onRendered=function(){c("Element is now attached"),D()})}function u(t){var e=f(t);e&&(e.onExpandScroll&&r(o(t),"scroll",e.onExpandScroll),e.onShrinkScroll&&r(a(t),"scroll",e.onShrinkScroll),e.onAnimationStart&&r(e.container,"animationstart",e.onAnimationStart),e.container&&t.removeChild(e.container))}t=t||{};var l=t.reporter,d=t.batchProcessor,f=t.stateHandler.getState,h=(t.stateHandler.hasState,t.idHandler);if(!d)throw new Error("Missing required dependency: batchProcessor");if(!l)throw new Error("Missing required dependency: reporter.");var p=function(){var t=document.createElement("div");t.style.cssText="position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";var e=document.createElement("div");e.style.cssText="position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",e.appendChild(t),document.body.insertBefore(e,document.body.firstChild);var n=500-e.clientWidth,i=500-e.clientHeight;return document.body.removeChild(e),{width:n,height:i}}(),v="erd_scroll_detection_container";return function(t,e){if(!document.getElementById(t)){var n=e+"_animation",i=e+"_animation_active",r="/* Created by the element-resize-detector library. */\n";r+="."+e+" > div::-webkit-scrollbar { display: none; }\n\n",r+="."+i+" { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+n+"; animation-name: "+n+"; }\n",r+="@-webkit-keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",r+="@keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",function(e,n){n=n||function(t){document.head.appendChild(t)};var i=document.createElement("style");i.innerHTML=e,i.id=t,n(i)}(r)}}("erd_scroll_detection_scrollbar_style",v),{makeDetectable:c,addListener:s,uninstall:u}}},function(t,e,n){t.exports=n(43)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(44),r=n.n(i),o=n(6),a=Object(o.a)("charts",r.a);a.__highcharts__=r.a,e.default=a},function(t,e){t.exports=i}])});
//# sourceMappingURL=react-highcharts.js.map