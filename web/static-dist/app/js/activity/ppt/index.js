!function(o){function e(e){for(var t,n,r=e[0],a=e[1],l=e[2],i=0,s=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&s.push(u[n][0]),u[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(o[t]=a[t]);for(p&&p(e);s.length;)s.shift()();return f.push.apply(f,l||[]),c()}function c(){for(var e,t=0;t<f.length;t++){for(var n=f[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==u[l]&&(r=!1)}r&&(f.splice(t--,1),e=i(i.s=n[0]))}return e}var n={},u={43:0},f=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=o,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var p=r;f.push([504,0]),c()}({164:function(a,e,t){
/*!
* screenfull
* v3.0.0 - 2015-11-24
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var e=a.exports,n="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,r=function(){for(var e,t,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,a=n.length,l={};r<a;r++)if((e=n[r])&&e[1]in document){for(r=0,t=e.length;r<t;r++)l[n[0][r]]=e[r];return l}return!1}(),t={request:function(e){var t=r.requestFullscreen;e=e||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?e[t]():n?e[t](Element.ALLOW_KEYBOARD_INPUT):e[t]({navigationUI:"auto"})},exit:function(){document[r.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},raw:r};r?(Object.defineProperties(t,{isFullscreen:{get:function(){return Boolean(document[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[r.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(document[r.fullscreenEnabled])}}}),e?a.exports=t:window.screenfull=t):e?a.exports=!1:window.screenfull=!1}()},346:function(e,t,n){"use strict";n.d(t,"a",function(){return A});var r=n(2),l=n.n(r),a=n(0),s=n.n(a),i=n(1),o=n.n(i),c=n(8),u=n.n(c),f=n(9),p=n.n(f),d=n(5),h=n.n(d),g=n(99),v=n(164),m=n.n(v);function y(r){var a=function(){if("undefined"==typeof Reflect||!l.a)return!1;if(l.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(l()(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n=h()(r);return t=a?(e=h()(this).constructor,l()(n,arguments,e)):n.apply(this,arguments),p()(this,t)}}var A=function(e){u()(i,e);var l=y(i);function i(e){var t,n=e.element,r=e.slides,a=e.watermark;return s()(this,i),(t=l.call(this)).element=$(n),t.slides=r||[],t.watermark=a||"",t._KEY_ACTION_MAP={37:t._onPrev,39:t._onNext,38:t._onLast,40:t._onFirst},t.total=t.slides.length,t._page=0,t.placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",t._init(),t}return o()(i,[{key:"_render",value:function(){this.element.html('\n      <div class="slide-player">\n        <div class="slide-player-body loading-background"></div>\n        <div class="slide-notice">\n          <div class="header">{{ \'site.data_last_picture\'|trans }}\n            <button type="button" class="close">×</button>\n          </div>\n        </div>\n      \n        <div class="slide-player-control clearfix">\n          <a href="javascript:" class="goto-first">\n            <span class="glyphicon glyphicon-step-backward"></span>\n          </a>\n          <a href="javascript:" class="goto-prev">\n            <span class="glyphicon glyphicon-chevron-left"></span>\n          </a>\n          <a href="javascript:" class="goto-next">\n            <span class="glyphicon glyphicon-chevron-right"></span>\n          </a>\n          <a href="javascript:" class="goto-last">\n            <span class="glyphicon glyphicon-step-forward"></span>\n          </a>\n          <a href="javascript:" class="fullscreen">\n            <span class="glyphicon glyphicon-fullscreen"></span>\n          </a>\n          <div class="goto-page-input">\n            <input type="text" class="goto-page form-control input-sm" value="1">&nbsp;/&nbsp;\n              <span class="total"></span>\n          </div>\n        </div>\n      </div>'),this.element.find(".total").text(this.total);var e=this.slides.reduce(function(e,t,n){return e+='<img data-src="'.concat(t,'" class="slide" data-page="').concat(n+1,'">')},"");this.element.find(".slide-player-body").html(e),this.watermark&&this.element.append('<div class="slide-player-watermark">'.concat(this.watermark,"</div>"))}},{key:"_init",value:function(){this._render(),this._bindEvents(),this._onFirst()}},{key:"_lazyLoad",value:function(e){for(var t=e;t<e+4&&!(t>this.total);t++){var n=this._getSlide(t);n.attr("src")||n.attr("src",n.data("src"))}}},{key:"_getSlide",value:function(e){return this.element.find(".slide-player-body .slide").eq(e-1)}},{key:"_bindEvents",value:function(){var n=this;$(document).on("keydown",function(e){n._KEY_ACTION_MAP[e.keyCode]&&n._KEY_ACTION_MAP[e.keyCode].call(n)}),this.element.on("click",".goto-next",function(e){return n._onNext(e)}),this.element.on("click",".goto-prev",function(e){return n._onPrev(e)}),this.element.on("click",".goto-first",function(e){return n._onFirst(e)}),this.element.on("click",".goto-last",function(e){return n._onLast(e)}),this.element.on("click",".fullscreen",function(e){return n._onFullScreen(e)}),this.element.on("change",".goto-page",function(e){return n._onChangePage(e)});var r=this;this.on("change",function(e){var t=e.current;e.before;t==r.total&&r.emit("end",{page:n.total})})}},{key:"_onNext",value:function(){this.page!==this.total?this.page++:this.emit("end",{page:this.total})}},{key:"_onPrev",value:function(){1!=this.page&&this.page--}},{key:"_onFirst",value:function(){this.page=1}},{key:"_onLast",value:function(){this.page=this.total}},{key:"_onFullScreen",value:function(){var e=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);m.a.enabled?m.a.isFullscreen?m.a.toggle():m.a.request():e&&$("#task-content-iframe",parent.document).toggleClass("ios-full-screen")}},{key:"_onChangePage",value:function(e){this.page=$(e.target).val()}},{key:"page",get:function(){return this._page},set:function(e){var t=this,n=this.page,r=e;r>this.total&&(this.element.find(".goto-page").val(r),this._page=r),r<1&&(this.element.find(".goto-page").val(n),this._page=n),n&&this.element.find(".slide-player-body .slide").eq(n-1).removeClass("active");var a=this._getSlide(r);a.attr("src")?a.addClass("active"):(a.load(function(){t._page==a.data("page")&&a.addClass("active")}),a.attr("src",a.data("src"))),this._lazyLoad(r),this.element.find(".goto-page").val(r),this._page=r,this.emit("change",{current:r,before:n})}}]),i}(g.a)},504:function(e,t,n){"use strict";n.r(t);function r(e){var t=new a.a({element:"#activity-ppt-content",slides:i.data("slides").split(","),watermark:e});return"end"===i.data("finishType")&&(1===t.total?setTimeout(function(){l.emit("finish",{page:1})},1e3):t.once("end",function(e){l.emit("finish",e)})),t}var a=n(346),l=new(n(139).a),i=$("#activity-ppt-content"),s=i.data("watermarkUrl");void 0===s?r():$.get(s).then(function(e){r(e)}).fail(function(e){console.error(e)})}});