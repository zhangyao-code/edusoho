!function(o){function t(t){for(var e,a,i=t[0],n=t[1],r=t[2],l=0,s=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(o[e]=n[e]);for(u&&u(t);s.length;)s.shift()();return m.push.apply(m,r||[]),d()}function d(){for(var t,e=0;e<m.length;e++){for(var a=m[e],i=!0,n=1;n<a.length;n++){var r=a[n];0!==c[r]&&(i=!1)}i&&(m.splice(e--,1),t=l(l.s=a[0]))}return t}var a={},c={30:0},m=[];function l(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=o,l.c=a,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=t,e=e.slice();for(var n=0;n<e.length;n++)t(e[n]);var u=i;m.push([887,0]),d()}({15:function(t,e){t.exports=jQuery},887:function(t,e,a){"use strict";a.r(e);var i=a(18),n=a.n(i),r=a(69),l=a.n(r),s=a(0),o=a.n(s),d=a(1),c=a.n(d),m=a(68),u=(a(4),a(14)),h=a(105);new(function(){function t(){o()(this,t),this.$form=$("#step2-form"),this.firstName=$("#title").val(),this.media=l()(null),this.materials=l()(null),this.initStep2Form(),this.bindEvent(),this.initFileChooser()}return c()(t,[{key:"initStep2Form",value:function(){this.$form.validate({rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},link:"url",materials:"required"},messages:{link:Translator.trans("activity.download_manage.link_error_hint"),materials:Translator.trans("activity.download_manage.materials_error_hint")}})}},{key:"bindEvent",value:function(){var e=this;this.$form.on("click",".js-btn-delete",function(t){return e.deleteItem(t)}),this.$form.on("click",".js-video-import",function(){return e.importLink()}),this.$form.on("click",".js-add-file-list",function(){return e.addFile()}),this.$form.on("blur","#title",function(t){return e.changeTitle(t)})}},{key:"deleteItem",value:function(t){var e=$(t.currentTarget).closest("li"),a=e.data("id"),i=$("#materials");this.materials=Object(u.d)(i.val())?l()(null):JSON.parse(i.val()),this.materials&&this.materials[a]&&(delete this.materials[a],i.val(n()(this.materials))),e.siblings("li").length||i.val(""),e.remove()}},{key:"initFileChooser",value:function(){var e=this;(new m.a).on("select",function(t){$("#media").val(n()(t)),Object(h.b)(),$("#title").val(e.firstName),$(".js-current-file").text(t.name)})}},{key:"changeTitle",value:function(t){var e=$(t.currentTarget);this.firstName=e.val()}},{key:"importLink",value:function(){var t=$("#link"),e=$("#verifyLink");this.$form.data("validator").valid()&&t.val()?e.val(t.val()):(t.val(""),e.val("")),$(".js-current-file").text(e.val())}},{key:"addLink",value:function(){var t=$("#verifyLink").val(),e={source:"link",id:t,name:t,link:t,summary:$("#file-summary").val(),size:0};$("#media").val(n()(e))}},{key:"addFile",value:function(){var t=$("#media"),e=$("#materials"),a=$(".js-success-redmine"),i=$(".js-danger-redmine");$("#verifyLink").val()&&this.addLink(),this.media=Object(u.d)(t.val())?l()(null):JSON.parse(t.val()),this.materials=Object(u.d)(e.val())?l()(null):JSON.parse(e.val()),Object(u.d)(this.media)?this.showTip(a,i,"activity.download_manage.materials_error_hint"):Object(u.d)(this.materials)||!this.checkExisted()?(this.media.summary=$("#file-summary").val(),this.materials[this.media.id]=this.media,e.val(n()(this.materials)),this.firstName||(this.firstName=this.media.name,$("#title").val(this.firstName)),this.showFile(),this.showTip(i,a,"activity.download_manage.materials_add_success_hint"),$(".jq-validate-error:visible").length&&this.$form.data("validator").form()):this.showTip(a,i,"activity.download_manage.materials_exist_error_hint")}},{key:"checkExisted",value:function(){for(var t in this.materials){var e=this.materials[t],a=e.name===this.media.name,i=e.link&&e.link===this.media.id;if(a||i)return!0}return!1}},{key:"showFile",value:function(){var t="",t=this.media.link?'\n        <li class="download-item" data-id="'.concat(this.media.link,'">\n          <a class="gray-primary" href="').concat(this.media.link,'" target="_blank">').concat(this.media.summary?this.media.summary:this.media.name,'<span class="glyphicon glyphicon-new-window text-muted text-sm mlm" title="').concat(Translator.trans("activity.download_manage.materials_delete_btn"),'"></span></a>\n          <a class="gray-primary phm btn-delete js-btn-delete" href="javascript:;" data-url="" data-toggle="tooltip" data-placement="top" title="').concat(Translator.trans("activity.download_manage.materials_delete_btn"),'"><i class="es-icon es-icon-delete"></i></a>\n        </li>\n      '):'\n        <li class="download-item" data-id="'.concat(this.media.id,'">\n          <a class="gray-primary" href="/materiallib/').concat(this.media.id,'/download">').concat(this.media.name,'</a>\n          <a class="gray-primary phm btn-delete js-btn-delete" href="javascript:;" data-url="" data-toggle="tooltip" data-placement="top" title="').concat(Translator.trans("activity.download_manage.materials_delete_btn"),'"><i class="es-icon es-icon-delete"></i></a>\n        </li>\n      ');$("#material-list").append(t),$('[data-toggle="tooltip"]').tooltip()}},{key:"showTip",value:function(t,e,a){t.hide(),$(".js-current-file").text(""),$("#link").val(""),$("#verifyLink").val(""),$("#file-summary").val(""),$("#media").val(""),e.text(Translator.trans(a)).show(),setTimeout(function(){e.slideUp()},3e3)}}]),t}())}});