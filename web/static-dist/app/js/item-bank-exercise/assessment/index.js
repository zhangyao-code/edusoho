!function(e){function t(t){for(var s,o,i=t[0],l=t[1],c=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={241:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;a.push([883,0]),n()}({883:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),a=n(3),o=n.n(a);new(n(173).a)($(".js-assessment-container")),new(function(){function e(){r()(this,e),this.element=$(".js-all-container"),this.init()}return o()(e,[{key:"init",value:function(){var e=this;this.element.on("click",".js-batch-delete",(function(t){return e.batchDelete(t)})),this.element.on("click",".js-delete-single",(function(t){return e.deleteSingle(t)})),this.initChange()}},{key:"batchDelete",value:function(e){var t=$(e.currentTarget);if(this.element.find('[data-role="batch-item"]:checked').length>0){var n=[];this.element.find('[data-role="batch-item"]:checked').each((function(){n.push(this.value)})),cd.confirm({title:Translator.trans("item_bank_exercise.assessment_module.assessment_delete.title"),content:Translator.trans("item_bank_exercise.assessment_module.assessment_delete"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(t.data("url"),{ids:n},(function(e){e?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),location.reload()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})})).error((function(e){cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})}))}))}}},{key:"deleteSingle",value:function(e){var t=$(e.currentTarget);cd.confirm({title:Translator.trans("item_bank_exercise.assessment_module.assessment_delete.title"),content:Translator.trans("item_bank_exercise.assessment_module.assessment_delete"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(t.data("url"),(function(e){e?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),location.reload()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})})).error((function(e){cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})}))}))}},{key:"initChange",value:function(){cd.onoff({el:"#switch"}).on("change",(function(e){$.get($("#canOpen").val(),(function(t){t?$.post($("#switch").data("url"),{assessmentEnable:e},(function(){location.reload()})):(cd.message({type:"danger",message:Translator.trans("item_bank_exercise.module.switch.danger")}),setTimeout((function(){window.location.reload()}),1e3))}))}))}}]),e}())}});