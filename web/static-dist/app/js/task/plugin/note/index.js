!function(s){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],i=0,l=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&l.push(c[n][0]),c[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t]);for(p&&p(e);l.length;)l.shift()();return f.push.apply(f,a||[]),u()}function u(){for(var e,t=0;t<f.length;t++){for(var n=f[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(f.splice(t--,1),e=i(i.s=n[0]))}return e}var n={},c={353:0},f=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=s,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=r;f.push([905,0]),u()}({15:function(e,t){e.exports=jQuery},905:function(e,t,n){"use strict";n.r(t);var o=n(4),r=n(98),a=$("[data-role=saved-message]");Object(r.a)();var i,l=$(".js-sidebar-pane").height()-175,s=$("#note-content-field"),u=CKEDITOR.replace("note-content-field",{toolbar:"Minimal",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:s.data("imageUploadUrl"),allowedContent:!0,height:l<300?200:l});function c(){var e,n,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;$.trim(s.val())?(e=$("#task-note-plugin-form"),n=e.serializeArray(),i!==n[0].value&&(a.html(Translator.trans("task.plugin_redmine_save_hint")).show(),r&&r.attr("disabled","disabled"),$.post(e.attr("action"),n).then(function(e){var t;t=(new Date).Format("yyyy-MM-dd hh:mm:ss"),a.html(Translator.trans("task.plugin_redmine_save_success_hint",{date:t})).show(),setTimeout(function(){a.hide()},3e3),r&&r.removeAttr("disabled"),i=n[0].value}).catch(function(e){r.removeAttr("disabled"),a.html("")}))):r&&Object(o.a)("danger",Translator.trans("course.notebook.empty_note_content_notice"))}u.on("change",function(){s.val(u.getData())}),$("#note-save-btn").click(function(e){var t=$(this);e.preventDefault(),c(t)}),setInterval(c,3e4)}});