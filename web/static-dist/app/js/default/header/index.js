!function(s){function n(n){for(var t,i,o=n[0],e=n[1],r=n[2],a=0,c=[];a<o.length;a++)i=o[a],Object.prototype.hasOwnProperty.call(f,i)&&f[i]&&c.push(f[i][0]),f[i]=0;for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t]);for(d&&d(n);c.length;)c.shift()();return u.push.apply(u,r||[]),l()}function l(){for(var n,t=0;t<u.length;t++){for(var i=u[t],o=!0,e=1;e<i.length;e++){var r=i[e];0!==f[r]&&(o=!1)}o&&(u.splice(t--,1),n=a(a.s=i[0]))}return n}var i={},f={160:0},u=[];function a(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return s[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=s,a.c=i,a.d=function(n,t,i){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)a.d(i,o,function(n){return t[n]}.bind(null,o));return i},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],o=t.push.bind(t);t.push=n,t=t.slice();for(var e=0;e<t.length;e++)n(t[e]);var d=o;u.push([834,0]),l()}({834:function(n,t,i){"use strict";i.r(t);var o=i(0),e=i.n(o),r=i(1),a=i.n(r),c=i(67),s=i.n(c),l=i(33);new(function(){function n(){e()(this,n),this.isClicked=!1,this.init()}return a()(n,[{key:"init",value:function(){this.initEvent(),this.initNotification(),this.bindEvent()}},{key:"initEvent",value:function(){$("body").on("click",".js-user-nav-dropdown",function(n){n.stopPropagation()});var n=$(".js-switch-pc"),t=$(".js-switch-mobile");n.length&&n.on("click",function(){s.a.set("PCVersion",1),window.location.reload()}),t.length&&t.on("click",function(){s.a.remove("PCVersion"),window.location.reload()})}},{key:"initNotification",value:function(){var n=$(".js-user-inform"),t="block"===n.css("display"),i=$(".js-inform-newNotification");n.length&&t&&this.api("newNotification",i,!0)}},{key:"bindEvent",value:function(){var t=this;$(".js-inform-tab").on("click",function(n){return t.changeTab(n)}),$(".js-user-nav-dropdown").on("click",".js-inform-notification",function(n){return t.toNotification(n)}),$(".js-back").on("click",function(){return t.mobileHistory()})}},{key:"changeTab",value:function(n){var t=$(n.target);this.isClicked=!0,n.preventDefault(),t.tab("show");var i=t.data("type"),o=t.hasClass("active"),e=$(".js-inform-conversation"),r=$(".js-inform-newNotification"),a="conversation"===i?e:r,c="conversation"!==i;$(".tab-pane.active").find(".js-inform-empty").length||o||this.api(i,a,c),t.addClass("active").siblings().removeClass("active")}},{key:"api",value:function(n,t,i){var o=this,e=this;l.a[n].search({before:function(){e.loadingShow()}}).then(function(n){o.informShow(t,n,i)}).catch(function(n){console.log("catch",n.responseJSON.message)})}},{key:"informShow",value:function(n,t,i){this.isClicked&&n.empty(),$(".tab-pane.active").find(".js-inform-loading").addClass("hidden"),$(".js-inform-dropdown-body").css("overflow-y","auto"),n.append(t),i&&(n.find(".notification-footer").addClass("hidden"),n.find(".pull-left").addClass("hidden"))}},{key:"loadingShow",value:function(){var n=$(".tab-pane.active").find(".js-inform-loading"),t=cd.loading();n.removeClass("hidden"),$(".js-inform-dropdown-body").css("overflow-y","hidden"),n.html(t)}},{key:"toNotification",value:function(n){var t=$(n.currentTarget);window.location.href=t.data("url")}},{key:"mobileHistory",value:function(){1!==history.length?history.go(-1):location.href="/"}}]),n}())}});