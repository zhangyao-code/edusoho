!function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(u&&u(e);f.length;)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={45:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([667,0]),n()}({395:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var a=n(5),i=n.n(a),r=n(2),o=n.n(r),s=n(3),l=n.n(s),c=n(12),u=n.n(c),p=n(13),f=n.n(p),d=n(9),h=n.n(d),g=n(135),v=n(77),y=n.n(v);function A(t){var e=function(){if("undefined"==typeof Reflect||!i.a)return!1;if(i.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(i()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=h()(t);if(e){var r=h()(this).constructor;n=i()(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var _=function(t){u()(n,t);var e=A(n);function n(t){var a,i=t.element,r=t.slides,s=t.watermark;return o()(this,n),(a=e.call(this)).element=$(i),a.slides=r||[],a.watermark=s||"",a._KEY_ACTION_MAP={37:a._onPrev,39:a._onNext,38:a._onLast,40:a._onFirst},a.total=a.slides.length,a._page=0,a.placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",a._init(),a}return l()(n,[{key:"_render",value:function(){this.element.html('\n      <div class="slide-player">\n        <div class="slide-player-body loading-background"></div>\n        <div class="slide-notice">\n          <div class="header">{{ \'site.data_last_picture\'|trans }}\n            <button type="button" class="close">×</button>\n          </div>\n        </div>\n      \n        <div class="slide-player-control clearfix">\n          <a href="javascript:" class="goto-first">\n            <span class="glyphicon glyphicon-step-backward"></span>\n          </a>\n          <a href="javascript:" class="goto-prev">\n            <span class="glyphicon glyphicon-chevron-left"></span>\n          </a>\n          <a href="javascript:" class="goto-next">\n            <span class="glyphicon glyphicon-chevron-right"></span>\n          </a>\n          <a href="javascript:" class="goto-last">\n            <span class="glyphicon glyphicon-step-forward"></span>\n          </a>\n          <a href="javascript:" class="fullscreen">\n            <span class="glyphicon glyphicon-fullscreen"></span>\n          </a>\n          <div class="goto-page-input">\n            <input type="text" class="goto-page form-control input-sm" value="1">&nbsp;/&nbsp;\n              <span class="total"></span>\n          </div>\n        </div>\n      </div>'),this.element.find(".total").text(this.total);var t=this.slides.reduce((function(t,e,n){return t+='<img data-src="'.concat(e,'" class="slide" data-page="').concat(n+1,'">')}),"");this.element.find(".slide-player-body").html(t),this.watermark&&this.element.append('<div class="slide-player-watermark">'.concat(this.watermark,"</div>"))}},{key:"_init",value:function(){this._render(),this._bindEvents(),this._onFirst()}},{key:"_lazyLoad",value:function(t){for(var e=t;e<t+4&&!(e>this.total);e++){var n=this._getSlide(e);n.attr("src")||n.attr("src",n.data("src"))}}},{key:"_getSlide",value:function(t){return this.element.find(".slide-player-body .slide").eq(t-1)}},{key:"_bindEvents",value:function(){var t=this;$(document).on("keydown",(function(e){t._KEY_ACTION_MAP[e.keyCode]&&t._KEY_ACTION_MAP[e.keyCode].call(t)})),this.element.on("click",".goto-next",(function(e){return t._onNext(e)})),this.element.on("click",".goto-prev",(function(e){return t._onPrev(e)})),this.element.on("click",".goto-first",(function(e){return t._onFirst(e)})),this.element.on("click",".goto-last",(function(e){return t._onLast(e)})),this.element.on("click",".fullscreen",(function(e){return t._onFullScreen(e)})),this.element.on("change",".goto-page",(function(e){return t._onChangePage(e)}));var e=this;this.on("change",(function(n){var a=n.current;n.before;a==e.total&&e.emit("end",{page:t.total})}))}},{key:"_onNext",value:function(){this.page!==this.total?this.page++:this.emit("end",{page:this.total})}},{key:"_onPrev",value:function(){1!=this.page&&this.page--}},{key:"_onFirst",value:function(){this.page=1}},{key:"_onLast",value:function(){this.page=this.total}},{key:"_onFullScreen",value:function(){var t=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);y.a.enabled?y.a.isFullscreen?y.a.toggle():y.a.request():t&&$("#task-content-iframe",parent.document).toggleClass("ios-full-screen")}},{key:"_onChangePage",value:function(t){this.page=$(t.target).val()}},{key:"page",get:function(){return this._page},set:function(t){var e=this,n=this.page,a=t;a>this.total&&(this.element.find(".goto-page").val(a),this._page=a),a<1&&(this.element.find(".goto-page").val(n),this._page=n),n&&this.element.find(".slide-player-body .slide").eq(n-1).removeClass("active");var i=this._getSlide(a);i.attr("src")?i.addClass("active"):(i.load((function(){e._page==i.data("page")&&i.addClass("active")})),i.attr("src",i.data("src"))),this._lazyLoad(a),this.element.find(".goto-page").val(a),this._page=a,this.emit("change",{current:a,before:n})}}]),n}(g.a)},667:function(t,e,n){"use strict";n.r(e);var a=n(395),i=new(n(176).a),r=$("#activity-ppt-content"),o=r.data("watermarkUrl"),s=function(t){var e=new a.a({element:"#activity-ppt-content",slides:r.data("slides").split(","),watermark:t});return"end"===r.data("finishType")&&(1===e.total?setTimeout((function(){i.emit("finish",{page:1})}),1e3):e.once("end",(function(t){i.emit("finish",t)}))),e};if(void 0===o)s();else $.get(o).then((function(t){s(t)})).fail((function(t){console.error(t)}))}});