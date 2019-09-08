!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Typewriter",[],t):"object"==typeof exports?exports.Typewriter=t():e.Typewriter=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){(function(t){for(var r=n(3),o="undefined"==typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],c=0;!s&&c<a.length;c++)s=o[a[c]+"Request"+i],u=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!s||!u){var l=0,p=0,d=[];s=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout(function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=u}}).call(this,n(2))},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},u=function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)},c={TYPE_CHARACTER:"TYPE_CHARACTER",REMOVE_CHARACTER:"REMOVE_CHARACTER",REMOVE_ALL:"REMOVE_ALL",REMOVE_LAST_VISIBLE_NODE:"REMOVE_LAST_VISIBLE_NODE",PAUSE_FOR:"PAUSE_FOR",CALL_FUNCTION:"CALL_FUNCTION",ADD_HTML_TAG_ELEMENT:"ADD_HTML_TAG_ELEMENT",REMOVE_HTML_TAG_ELEMENT:"REMOVE_HTML_TAG_ELEMENT",CHANGE_DELETE_SPEED:"CHANGE_DELETE_SPEED",CHANGE_DELAY:"CHANGE_DELAY",CHANGE_CURSOR:"CHANGE_CURSOR"},l={HTML_TAG:"HTML_TAG",TEXT_NODE:"TEXT_NODE"};function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(){function e(t,n){var u=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),f(this,"options",{strings:null,cursor:"|",delay:"natural",deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor"}),f(this,"setupWrapperElement",function(){u.state.elements.wrapper.className=u.options.wrapperClassName,u.state.elements.cursor.className=u.options.cursorClassName,u.state.elements.cursor.innerHTML=u.options.cursor,u.state.elements.container.innerHTML="",u.state.elements.container.appendChild(u.state.elements.wrapper),u.state.elements.container.appendChild(u.state.elements.cursor)}),f(this,"start",function(){return u.state.eventLoopPaused=!1,u.runEventLoop(),u}),f(this,"pause",function(){return u.state.eventLoopPaused=!0,u}),f(this,"stop",function(){return u.state.eventLoop&&(Object(r.cancel)(u.state.eventLoop),u.state.eventLoop=null),u}),f(this,"pauseFor",function(e){return u.addEventToQueue(c.PAUSE_FOR,{ms:e}),u}),f(this,"typeOutAllStrings",function(){return"string"==typeof u.options.strings?(u.typeString(u.options.strings).pauseFor(1500),u):(u.options.strings.forEach(function(e){u.typeString(e).pauseFor(1500).deleteAll()}),u)}),f(this,"typeString",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(e)?u.typeOutHTMLString(e,t):(e&&u.typeCharacters(e.split(""),t),u)}),f(this,"typeOutHTMLString",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=i(e);if(n.length>0)for(var r=0;r<n.length;r++){var o=n[r],a=o.innerHTML;o&&3!==o.nodeType?(o.innerHTML="",u.addEventToQueue(c.ADD_HTML_TAG_ELEMENT,{node:o,parentNode:t}),u.typeString(a,o)):o.textContent&&u.typeString(o.textContent,t)}return u}),f(this,"deleteAll",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return u.addEventToQueue(c.REMOVE_ALL,{speed:e}),u}),f(this,"changeDeleteSpeed",function(e){if(!e)throw new Error("Must provide new delete speed");return u.addEventToQueue(c.CHANGE_DELETE_SPEED,{speed:e}),u}),f(this,"changeDelay",function(e){if(!e)throw new Error("Must provide new delay");return u.addEventToQueue(c.CHANGE_DELAY,{delay:e}),u}),f(this,"changeCursor",function(e){if(!e)throw new Error("Must provide new cursor");return u.addEventToQueue(c.CHANGE_CURSOR,{cursor:e}),u}),f(this,"deleteChars",function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)u.addEventToQueue(c.REMOVE_CHARACTER);return u}),f(this,"callFunction",function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return u.addEventToQueue(c.CALL_FUNCTION,{cb:e,thisArg:t}),u}),f(this,"typeCharacters",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach(function(e){u.addEventToQueue(c.TYPE_CHARACTER,{character:e,node:t})}),u}),f(this,"removeCharacters",function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach(function(){u.addEventToQueue(c.REMOVE_CHARACTER)}),u}),f(this,"addEventToQueue",function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return u.addEventToStateProperty(e,t,n,"eventQueue")}),f(this,"addReverseCalledEvent",function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=u.options.loop;return r?u.addEventToStateProperty(e,t,n,"reverseCalledEvents"):u}),f(this,"addEventToStateProperty",function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return u.state[r]=n?[o].concat(d(u.state[r])):[].concat(d(u.state[r]),[o]),u}),f(this,"runEventLoop",function(){u.state.lastFrameTime||(u.state.lastFrameTime=Date.now());var e=Date.now(),t=e-u.state.lastFrameTime;if(!u.state.eventQueue.length){if(!u.options.loop)return;u.state.eventQueue=d(u.state.calledEvents),u.state.calledEvents=[],u.options=p({},u.state.initialOptions)}if(u.state.eventLoop=o()(u.runEventLoop),!u.state.eventLoopPaused){if(u.state.pauseUntil){if(e<u.state.pauseUntil)return;u.state.pauseUntil=null}var n=d(u.state.eventQueue),r=n.shift(),a=0;if(!(t<=(a=r.eventName===c.REMOVE_LAST_VISIBLE_NODE||r.eventName===c.REMOVE_CHARACTER?"natural"===u.options.deleteSpeed?s(40,80):u.options.deleteSpeed:"natural"===u.options.delay?s(120,160):u.options.delay))){var i=r.eventName,E=r.eventArgs;switch(u.logInDevMode({currentEvent:r,state:u.state,delay:a}),i){case c.TYPE_CHARACTER:var f=E.character,v=E.node,h=document.createTextNode(f);v?v.appendChild(h):u.state.elements.wrapper.appendChild(h),u.state.visibleNodes=[].concat(d(u.state.visibleNodes),[{type:l.TEXT_NODE,node:h}]);break;case c.REMOVE_CHARACTER:n.unshift({eventName:c.REMOVE_LAST_VISIBLE_NODE,eventArgs:{removingCharacterNode:!0}});break;case c.PAUSE_FOR:var m=r.eventArgs.ms;u.state.pauseUntil=Date.now()+parseInt(m);break;case c.CALL_FUNCTION:var T=r.eventArgs,_=T.cb,y=T.thisArg;_.call(y,{elements:u.state.elements});break;case c.ADD_HTML_TAG_ELEMENT:var A=r.eventArgs,w=A.node,g=A.parentNode;g?g.appendChild(w):u.state.elements.wrapper.appendChild(w),u.state.visibleNodes=[].concat(d(u.state.visibleNodes),[{type:l.HTML_TAG,node:w,parentNode:g||u.state.elements.wrapper}]);break;case c.REMOVE_ALL:var L=u.state.visibleNodes,C=E.speed,N=[];C&&N.push({eventName:c.CHANGE_DELETE_SPEED,eventArgs:{speed:C,temp:!0}});for(var b=0,O=L.length;b<O;b++)N.push({eventName:c.REMOVE_LAST_VISIBLE_NODE,eventArgs:{removingCharacterNode:!1}});C&&N.push({eventName:c.CHANGE_DELETE_SPEED,eventArgs:{speed:u.options.deleteSpeed,temp:!0}}),n.unshift.apply(n,N);break;case c.REMOVE_LAST_VISIBLE_NODE:var S=r.eventArgs.removingCharacterNode;if(u.state.visibleNodes.length){var R=u.state.visibleNodes.pop(),M=R.type,D=R.node;D.parentNode.removeChild(D),M===l.HTML_TAG&&S&&n.unshift({eventName:c.REMOVE_LAST_VISIBLE_NODE,eventArgs:{}})}break;case c.CHANGE_DELETE_SPEED:u.options.deleteSpeed=r.eventArgs.speed;break;case c.CHANGE_DELAY:u.options.delay=r.eventArgs.delay;break;case c.CHANGE_CURSOR:u.options.cursor=r.eventArgs.cursor,u.state.elements.cursor.innerHTML=r.eventArgs.cursor}u.options.loop&&(r.eventName===c.REMOVE_LAST_VISIBLE_NODE||r.eventArgs&&r.eventArgs.temp||(u.state.calledEvents=[].concat(d(u.state.calledEvents),[r]))),u.state.eventQueue=n,u.state.lastFrameTime=e}}}),!t)throw new Error("No container element was provided");if("string"==typeof t){var E=document.querySelector(t);if(!E)throw new Error("Could not find container element");this.state.elements.container=E}else this.state.elements.container=t;n&&(this.options=p({},this.options,n)),this.state.initialOptions=p({},this.options),this.init()}var t,n,v;return t=e,(n=[{key:"init",value:function(){this.setupWrapperElement(),this.addEventToQueue(c.CHANGE_CURSOR,{cursor:this.options.cursor},!0),this.addEventToQueue(c.REMOVE_ALL,null,!0),window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(u(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&E(t.prototype,n),v&&E(t,v),e}();n.d(t,"default",function(){return v})},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){(function(){var n,r,o,a,i,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),i=a-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(4))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,c=[],l=!1,p=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):p=-1,c.length&&E())}function E(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++p<t;)u&&u[p].run();p=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||l||s(E)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]).default});
(function () {

    var typewriter = new Typewriter(document.getElementById('typewriter'), {
        loop: false,
        autoStart: true
    });

    typewriter
        .typeString('Hi')
        .pauseFor(1000)
        .deleteChars(2)
        .typeString('I\'m <b>Nidhin Joseph</b>')
        .start();

    setTimeout(function () {
        document.querySelector('.links').style.bottom = '-0px';
    }, 5000);

})();