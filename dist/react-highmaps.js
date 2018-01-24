!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("react-dom"),require("prop-types"),require("highcharts/highmaps"));else if("function"==typeof define&&define.amd)define(["react","react-dom","prop-types","highcharts/highmaps"],t);else{var n="object"==typeof exports?t(require("react"),require("react-dom"),require("prop-types"),require("highcharts/highmaps")):t(e.React,e.ReactDOM,e.PropTypes,e.Highcharts);for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}("undefined"!=typeof self?self:this,function(e,t,n,i){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=48)}([function(e,t){var n=Array.isArray;e.exports=n},function(e,t){function n(e){return r.call(e)}var i=Object.prototype,r=i.toString;e.exports=n},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}}},function(e,t,n){"use strict";var i=e.exports={};i.isIE=function(e){return!!function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}()&&(!e||e===function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:void 0}())},i.isLegacyOpera=function(){return!!window.opera}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){var n=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.call(n);var o=g()(n.resize,250,{leading:!0,trailing:!0});return n.state={chart:null,fnResize:o,resize:null},n}return o(t,e),z(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=t.props.loading,i=t.state.chart;i&&n!==e.loading&&t.loading(i,e.loading)}},{key:"componentDidUpdate",value:function(e,t){this.update()}},{key:"componentWillUnmount",value:function(){var e=this,t=e.state,n=t.chart,i=t.resize,r=t.fnResize;if(i&&p()(i.uninstall)){var o=x.a.findDOMNode(e);i.uninstall(o)}r&&p()(r.cancel)&&r.cancel(),n&&p()(n.destroy)&&n.destroy()}},{key:"render",value:function(){var e=this,t=e.props,n=t.className,i=t.style;return m.a.createElement("div",{className:n,style:i})}}]),t}(m.a.Component),a=function(){var n=this;this.loading=function(e,t){!0===t?e.showLoading():f()(t)?e.showLoading(t):e.hideLoading()},this.init=function(){var i=n,r=i.props,o=r.loading,a=r.resizable,s=r.theme,c=r.options,u=r.onLoad,d=i.state,f=d.chart,h=d.resize,v=d.fnResize;if(!f){var g=x.a.findDOMNode(i);l()(s)&&Highcharts.setOptions(s);var b=O[e],m=t[b](g,c,function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];p()(u)&&u.apply(void 0,[m,t].concat(n))});i.loading(m,o),h&&p()(h.uninstall)&&h.uninstall(g);var y=null;!0===a&&(y=j()({strategy:"scroll"}),y.listenTo(g,function(e){var t=e.offsetWidth,n=e.offsetHeight;p()(v)&&v({width:t,height:n})})),i.setState({chart:m,resize:y})}},this.resize=function(e){var t=n,i=t.props.onResize,r=t.state.chart;if(r){var o=c()(e,"width"),a=c()(e,"height");r.setSize(o,a),p()(i)&&i(o,a)}},this.update=function(){var e=n,t=e.props.options,i=e.state.chart;i&&t&&i.update(t)}};return n.propTypes={className:E.a.string,style:E.a.object,loading:E.a.oneOfType([E.a.string,E.a.bool]),theme:E.a.object,resizable:E.a.bool,options:E.a.object.isRequired,onLoad:E.a.func,onResize:E.a.func},n.defaultProps={className:"react-highcharts",style:{width:"100%",height:"100%"},loading:!1,theme:null,resizable:!1,onLoad:function(){},onResize:function(e,t){}},n}var s=n(7),c=n.n(s),u=n(16),l=n.n(u),d=n(19),f=n.n(d),h=n(20),p=n.n(h),v=n(21),g=n.n(v),b=n(28),m=n.n(b),y=n(29),x=n.n(y),w=n(30),E=n.n(w),S=n(31),j=n.n(S),z=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),O={charts:"chart",maps:"mapChart",stock:"stockChart"};t.a=a},function(e,t,n){function i(e,t,n){var i=null==e?void 0:r(e,t);return void 0===i?n:i}var r=n(8);e.exports=i},function(e,t,n){function i(e,t){t=r(t,e);for(var n=0,i=t.length;null!=e&&n<i;)e=e[o(t[n++])];return n&&n==i?e:void 0}var r=n(9),o=n(15);e.exports=i},function(e,t,n){function i(e,t){return r(e)?e:o(e,t)?[e]:a(s(e))}var r=n(0),o=n(10),a=n(12),s=n(14);e.exports=i},function(e,t,n){function i(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(s.test(e)||!a.test(e)||null!=t&&e in Object(t))}var r=n(0),o=n(11),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;e.exports=i},function(e,t){function n(){return!1}e.exports=n},function(e,t,n){var i=n(13),r=/^\./,o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,s=i(function(e){var t=[];return r.test(e)&&t.push(""),e.replace(o,function(e,n,i,r){t.push(i?r.replace(a,"$1"):n||e)}),t});e.exports=s},function(e,t){function n(e){return e}e.exports=n},function(e,t){function n(e){return e}e.exports=n},function(e,t){function n(e){return e}e.exports=n},function(e,t,n){function i(e){if(!a(e)||r(e)!=s)return!1;var t=o(e);if(null===t)return!0;var n=d.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&l.call(n)==f}var r=n(1),o=n(17),a=n(3),s="[object Object]",c=Function.prototype,u=Object.prototype,l=c.toString,d=u.hasOwnProperty,f=l.call(Object);e.exports=i},function(e,t,n){var i=n(18),r=i(Object.getPrototypeOf,Object);e.exports=r},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t,n){function i(e){return"string"==typeof e||!o(e)&&a(e)&&r(e)==s}var r=n(1),o=n(0),a=n(3),s="[object String]";e.exports=i},function(e,t,n){function i(e){if(!o(e))return!1;var t=r(e);return t==s||t==c||t==a||t==u}var r=n(1),o=n(2),a="[object AsyncFunction]",s="[object Function]",c="[object GeneratorFunction]",u="[object Proxy]";e.exports=i},function(e,t,n){function i(e,t,n){var i=!0,s=!0;if("function"!=typeof e)throw new TypeError(a);return o(n)&&(i="leading"in n?!!n.leading:i,s="trailing"in n?!!n.trailing:s),r(e,t,{leading:i,maxWait:t,trailing:s})}var r=n(22),o=n(2),a="Expected a function";e.exports=i},function(e,t,n){function i(e,t,n){function i(t){var n=m,i=y;return m=y=void 0,j=t,w=e.apply(i,n)}function l(e){return j=e,E=setTimeout(h,t),z?i(e):w}function d(e){var n=e-S,i=e-j,r=t-n;return O?u(r,x-i):r}function f(e){var n=e-S,i=e-j;return void 0===S||n>=t||n<0||O&&i>=x}function h(){var e=o();if(f(e))return p(e);E=setTimeout(h,d(e))}function p(e){return E=void 0,k&&m?i(e):(m=y=void 0,w)}function v(){void 0!==E&&clearTimeout(E),j=0,m=S=y=E=void 0}function g(){return void 0===E?w:p(o())}function b(){var e=o(),n=f(e);if(m=arguments,y=this,S=e,n){if(void 0===E)return l(S);if(O)return E=setTimeout(h,t),i(S)}return void 0===E&&(E=setTimeout(h,t)),w}var m,y,x,w,E,S,j=0,z=!1,O=!1,k=!0;if("function"!=typeof e)throw new TypeError(s);return t=a(t)||0,r(n)&&(z=!!n.leading,O="maxWait"in n,x=O?c(a(n.maxWait)||0,t):x,k="trailing"in n?!!n.trailing:k),b.cancel=v,b.flush=g,b}var r=n(2),o=n(23),a=n(27),s="Expected a function",c=Math.max,u=Math.min;e.exports=i},function(e,t,n){var i=n(24),r=function(){return i.Date.now()};e.exports=r},function(e,t,n){var i=n(25),r="object"==typeof self&&self&&self.Object===Object&&self,o=i||r||Function("return this")();e.exports=o},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(26))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){function n(e){return e}e.exports=n},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";function i(e){return Array.isArray(e)||void 0!==e.length}function r(e){if(Array.isArray(e))return e;var t=[];return s(e,function(e){t.push(e)}),t}function o(e){return e&&1===e.nodeType}function a(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}var s=n(4).forEach,c=n(32),u=n(33),l=n(34),d=n(35),f=n(36),h=n(5),p=n(37),v=n(39),g=n(40),b=n(41);e.exports=function(e){function t(e,t,n){function c(e){var t=z.get(e);s(t,function(t){t(e)})}function u(e,t,n){z.add(t,n),e&&n(t)}if(n||(n=t,t=e,e={}),!t)throw new Error("At least one element required.");if(!n)throw new Error("Listener required.");if(o(t))t=[t];else{if(!i(t))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");t=r(t)}var l=0,d=a(e,"callOnAdd",S.callOnAdd),f=a(e,"onReady",function(){}),h=a(e,"debug",S.debug);s(t,function(e){v.getState(e)||(v.initState(e),m.set(e));var i=m.get(e);if(h&&w.log("Attaching listener to element",i,e),!O.isDetectable(e))return h&&w.log(i,"Not detectable."),O.isBusy(e)?(h&&w.log(i,"System busy making it detectable"),u(d,e,n),T[i]=T[i]||[],void T[i].push(function(){++l===t.length&&f()})):(h&&w.log(i,"Making detectable..."),O.markBusy(e,!0),j.makeDetectable({debug:h},e,function(e){if(h&&w.log(i,"onElementDetectable"),v.getState(e)){O.markAsDetectable(e),O.markBusy(e,!1),j.addListener(e,c),u(d,e,n);var r=v.getState(e);if(r&&r.startSize){var o=e.offsetWidth,a=e.offsetHeight;r.startSize.width===o&&r.startSize.height===a||c(e)}T[i]&&s(T[i],function(e){e()})}else h&&w.log(i,"Element uninstalled before being detectable.");delete T[i],++l===t.length&&f()}));h&&w.log(i,"Already detecable, adding listener."),u(d,e,n),l++}),l===t.length&&f()}function n(e){if(!e)return w.error("At least one element is required.");if(o(e))e=[e];else{if(!i(e))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=r(e)}s(e,function(e){z.removeAllListeners(e),j.uninstall(e),v.cleanState(e)})}e=e||{};var m;if(e.idHandler)m={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var y=l(),x=d({idGenerator:y,stateHandler:v});m=x}var w=e.reporter;if(!w){w=f(!1===w)}var E=a(e,"batchProcessor",p({reporter:w})),S={};S.callOnAdd=!!a(e,"callOnAdd",!0),S.debug=!!a(e,"debug",!1);var j,z=u(m),O=c({stateHandler:v}),k=a(e,"strategy","object"),A={reporter:w,batchProcessor:E,stateHandler:v,idHandler:m};if("scroll"===k&&(h.isLegacyOpera()?(w.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),k="object"):h.isIE(9)&&(w.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),k="object")),"scroll"===k)j=b(A);else{if("object"!==k)throw new Error("Invalid strategy name: "+k);j=g(A)}var T={};return{listenTo:t,removeListener:z.removeListener,removeAllListeners:z.removeAllListeners,uninstall:n}}},function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=o(e);return t&&!!t.isDetectable}function n(e){o(e).isDetectable=!0}function i(e){return!!o(e).busy}function r(e,t){o(e).busy=!!t}var o=e.stateHandler.getState;return{isDetectable:t,markAsDetectable:n,isBusy:i,markBusy:r}}},function(e,t,n){"use strict";e.exports=function(e){function t(t){var n=e.get(t);return void 0===n?[]:o[n]||[]}function n(t,n){var i=e.get(t);o[i]||(o[i]=[]),o[i].push(n)}function i(e,n){for(var i=t(e),r=0,o=i.length;r<o;++r)if(i[r]===n){i.splice(r,1);break}}function r(e){var n=t(e);n&&(n.length=0)}var o={};return{get:t,add:n,removeListener:i,removeAllListeners:r}}},function(e,t,n){"use strict";e.exports=function(){function e(){return t++}var t=1;return{generate:e}}},function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=r(e);return t&&void 0!==t.id?t.id:null}function n(e){var t=r(e);if(!t)throw new Error("setId required the element to have a resize detection state.");var n=i.generate();return t.id=n,n}var i=e.idGenerator,r=e.stateHandler.getState;return{get:t,set:n}}},function(e,t,n){"use strict";e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var i=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},function(e,t,n){"use strict";function i(){function e(e,t){t||(t=e,e=0),e>o?o=e:e<a&&(a=e),i[e]||(i[e]=[]),i[e].push(t),r++}function t(){for(var e=a;e<=o;e++)for(var t=i[e],n=0;n<t.length;n++){var r=t[n];r()}}function n(){return r}var i={},r=0,o=0,a=0;return{add:e,process:t,size:n}}var r=n(38);e.exports=function(e){function t(e,t){!p&&d&&l&&0===h.size()&&a(),h.add(e,t)}function n(){for(p=!0;h.size();){var e=h;h=i(),e.process()}p=!1}function o(e){p||(void 0===e&&(e=l),f&&(s(f),f=null),e?a():n())}function a(){f=c(n)}function s(e){return clearTimeout(e)}function c(e){return function(e){return setTimeout(e,0)}(e)}e=e||{};var u=e.reporter,l=r.getOption(e,"async",!0),d=r.getOption(e,"auto",!0);d&&!l&&(u&&u.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),l=!0);var f,h=i(),p=!1;return{add:t,force:o}}},function(e,t,n){"use strict";function i(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}(e.exports={}).getOption=i},function(e,t,n){"use strict";function i(e){return e[a]={},r(e)}function r(e){return e[a]}function o(e){delete e[a]}var a="_erd";e.exports={initState:i,getState:r,cleanState:o}},function(e,t,n){"use strict";var i=n(5);e.exports=function(e){function t(e,t){function n(){t(e)}if(!r(e))throw new Error("Element is not detectable by this strategy.");if(i.isIE(8))c(e).object={proxy:n},e.attachEvent("onresize",n);else{r(e).contentDocument.defaultView.addEventListener("resize",n)}}function n(e,t,n){n||(n=t,t=e,e=null),e=e||{};e.debug;i.isIE(8)?n(t):function(e,t){function n(){function n(){if("static"===u.position){e.style.position="relative";var t=function(e,t,n,i){var r=n[i];"auto"!==r&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(r)&&(e.warn("An element that is positioned static has style."+i+"="+r+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};t(a,e,u,"top"),t(a,e,u,"right"),t(a,e,u,"bottom"),t(a,e,u,"left")}}function s(){function i(e,t){if(!e.contentDocument)return void setTimeout(function(){i(e,t)},100);t(e.contentDocument)}o||n(),i(this,function(n){t(e)})}""!==u.position&&(n(u),o=!0);var l=document.createElement("object");l.style.cssText=r,l.tabIndex=-1,l.type="text/html",l.onload=s,i.isIE()||(l.data="about:blank"),e.appendChild(l),c(e).object=l,i.isIE()&&(l.data="about:blank")}var r="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",o=!1,u=window.getComputedStyle(e),l=e.offsetWidth,d=e.offsetHeight;c(e).startSize={width:l,height:d},s?s.add(n):n()}(t,n)}function r(e){return c(e).object}function o(e){i.isIE(8)?e.detachEvent("onresize",c(e).object.proxy):e.removeChild(r(e)),delete c(e).object}e=e||{};var a=e.reporter,s=e.batchProcessor,c=e.stateHandler.getState;if(!a)throw new Error("Missing required dependency: reporter.");return{makeDetectable:n,addListener:t,uninstall:o}}},function(e,t,n){"use strict";var i=n(4).forEach;e.exports=function(e){function t(e){e.className+=" "+v+"_animation_active"}function n(e,t,n){if(e.addEventListener)e.addEventListener(t,n);else{if(!e.attachEvent)return l.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+t,n)}}function r(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n);else{if(!e.detachEvent)return l.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+t,n)}}function o(e){return f(e).container.childNodes[0].childNodes[0].childNodes[0]}function a(e){return f(e).container.childNodes[0].childNodes[0].childNodes[1]}function s(e,t){if(!f(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");f(e).listeners.push(t)}function c(e,r,s){function c(){if(e.debug){var t=Array.prototype.slice.call(arguments);if(t.unshift(h.get(r),"Scroll: "),l.log.apply)l.log.apply(null,t);else for(var n=0;n<t.length;n++)l.log(t[n])}}function u(e){var t=f(e).container.childNodes[0],n=getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function g(){var e=getComputedStyle(r),t={};return t.position=e.position,t.width=r.offsetWidth,t.height=r.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function b(){var e=g();f(r).startSize={width:e.width,height:e.height},c("Element start size",f(r).startSize)}function m(){f(r).listeners=[]}function y(){if(c("storeStyle invoked."),!f(r))return void c("Aborting because element has been uninstalled");var e=g();f(r).style=e}function x(e,t,n){f(e).lastWidth=t,f(e).lastHeight=n}function w(e){return o(e).childNodes[0]}function E(){return 2*p.width+1}function S(){return 2*p.height+1}function j(e){return e+10+E()}function z(e){return e+10+S()}function O(e){return 2*e+E()}function k(e){return 2*e+S()}function A(e,t,n){var i=o(e),r=a(e),s=j(t),c=z(n),u=O(t),l=k(n);i.scrollLeft=s,i.scrollTop=c,r.scrollLeft=u,r.scrollTop=l}function T(){var e=f(r).container;if(!e){e=document.createElement("div"),e.className=v,e.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",f(r).container=e,t(e),r.appendChild(e);var i=function(){f(r).onRendered&&f(r).onRendered()};n(e,"animationstart",i),f(r).onAnimationStart=i}return e}function L(){function e(){f(r).onExpand&&f(r).onExpand()}function t(){f(r).onShrink&&f(r).onShrink()}if(c("Injecting elements"),!f(r))return void c("Aborting because element has been uninstalled");!function(){var e=f(r).style;if("static"===e.position){r.style.position="relative";var t=function(e,t,n,i){var r=n[i];"auto"!==r&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(r)&&(e.warn("An element that is positioned static has style."+i+"="+r+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};t(l,r,e,"top"),t(l,r,e,"right"),t(l,r,e,"bottom"),t(l,r,e,"left")}}();var i=f(r).container;i||(i=T());var o=p.width,a=p.height,s="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; "+function(e,t,n,i){return e=e?e+"px":"0",t=t?t+"px":"0",n=n?n+"px":"0",i=i?i+"px":"0","left: "+e+"; top: "+t+"; right: "+i+"; bottom: "+n+";"}(-(1+o),-(1+a),-a,-o),u=document.createElement("div"),d=document.createElement("div"),h=document.createElement("div"),g=document.createElement("div"),b=document.createElement("div"),m=document.createElement("div");u.dir="ltr",u.style.cssText="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",u.className=v,d.className=v,d.style.cssText=s,h.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",g.style.cssText="position: absolute; left: 0; top: 0;",b.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",m.style.cssText="position: absolute; width: 200%; height: 200%;",h.appendChild(g),b.appendChild(m),d.appendChild(h),d.appendChild(b),u.appendChild(d),i.appendChild(u),n(h,"scroll",e),n(b,"scroll",t),f(r).onExpandScroll=e,f(r).onShrinkScroll=t}function H(){function t(e,t,n){var i=w(e),r=j(t),o=z(n);i.style.width=r+"px",i.style.height=o+"px"}function n(n){var i=r.offsetWidth,o=r.offsetHeight;c("Storing current size",i,o),x(r,i,o),d.add(0,function(){if(!f(r))return void c("Aborting because element has been uninstalled");if(!s())return void c("Aborting because element container has not been initialized");if(e.debug){var n=r.offsetWidth,a=r.offsetHeight;n===i&&a===o||l.warn(h.get(r),"Scroll: Size changed before updating detector elements.")}t(r,i,o)}),d.add(1,function(){return f(r)?s()?void A(r,i,o):void c("Aborting because element container has not been initialized"):void c("Aborting because element has been uninstalled")}),n&&d.add(2,function(){return f(r)?s()?void n():void c("Aborting because element container has not been initialized"):void c("Aborting because element has been uninstalled")})}function s(){return!!f(r).container}function p(){c("notifyListenersIfNeeded invoked");var e=f(r);return function(){return void 0===f(r).lastNotifiedWidth}()&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?c("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?c("Not notifying: Size already notified"):(c("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void i(f(r).listeners,function(e){e(r)}))}function v(){if(c("startanimation triggered."),u(r))return void c("Ignoring since element is still unrendered...");c("Element rendered.");var e=o(r),t=a(r);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(c("Scrollbars out of sync. Updating detector elements..."),n(p))}function g(){if(c("Scroll detected."),u(r))return void c("Scroll event fired while unrendered. Ignoring...");var e=r.offsetWidth,t=r.offsetHeight;e!==f(r).lastWidth||t!==f(r).lastHeight?(c("Element size changed."),n(p)):c("Element size has not changed ("+e+"x"+t+").")}if(c("registerListenersAndPositionElements invoked."),!f(r))return void c("Aborting because element has been uninstalled");f(r).onRendered=v,f(r).onExpand=g,f(r).onShrink=g;var b=f(r).style;t(r,b.width,b.height)}function C(){if(c("finalizeDomMutation invoked."),!f(r))return void c("Aborting because element has been uninstalled");var e=f(r).style;x(r,e.width,e.height),A(r,e.width,e.height)}function _(){s(r)}function D(){c("Installing..."),m(),b(),d.add(0,y),d.add(1,L),d.add(2,H),d.add(3,C),d.add(4,_)}s||(s=r,r=e,e=null),e=e||{},c("Making detectable..."),!function(e){return!function(e){return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)}(e)||null===getComputedStyle(e)}(r)?D():(c("Element is detached"),T(),c("Waiting until element is attached..."),f(r).onRendered=function(){c("Element is now attached"),D()})}function u(e){var t=f(e);t&&(t.onExpandScroll&&r(o(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&r(a(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&r(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))}e=e||{};var l=e.reporter,d=e.batchProcessor,f=e.stateHandler.getState,h=(e.stateHandler.hasState,e.idHandler);if(!d)throw new Error("Missing required dependency: batchProcessor");if(!l)throw new Error("Missing required dependency: reporter.");var p=function(){var e=document.createElement("div");e.style.cssText="position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";var t=document.createElement("div");t.style.cssText="position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);var n=500-t.clientWidth,i=500-t.clientHeight;return document.body.removeChild(t),{width:n,height:i}}(),v="erd_scroll_detection_container";return function(e,t){if(!document.getElementById(e)){var n=t+"_animation",i=t+"_animation_active",r="/* Created by the element-resize-detector library. */\n";r+="."+t+" > div::-webkit-scrollbar { display: none; }\n\n",r+="."+i+" { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+n+"; animation-name: "+n+"; }\n",r+="@-webkit-keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",r+="@keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",function(t,n){n=n||function(e){document.head.appendChild(e)};var i=document.createElement("style");i.innerHTML=t,i.id=e,n(i)}(r)}}("erd_scroll_detection_scrollbar_style",v),{makeDetectable:c,addListener:s,uninstall:u}}},,,,,,,function(e,t,n){e.exports=n(49)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(50),r=n.n(i),o=n(6),a=Object(o.a)("maps",r.a);a.__highcharts__=r.a,t.default=a},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-highmaps.js.map