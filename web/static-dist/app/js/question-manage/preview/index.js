!function(c){function t(t){for(var e,n,a=t[0],o=t[1],r=t[2],l=0,i=[];l<a.length;l++)n=a[l],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&i.push(d[n][0]),d[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(c[e]=o[e]);for(p&&p(t);i.length;)i.shift()();return s.push.apply(s,r||[]),u()}function u(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var r=n[o];0!==d[r]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=n[0]))}return t}var n={},d={294:0},s=[];function l(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=c,l.c=n,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],a=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var p=a;s.push([813,0]),u()}({813:function(t,e,n){"use strict";n.r(e);var a,o=n(20),r=n.n(o),l={data:function(){return{item:JSON.parse($("[name=item]").val()),showAttachment:$("[name=show_attachment]").val(),cdnHost:$("[name=cdn_host]").val(),fileId:0}},methods:{previewAttachment:function(t){this.fileId=t},downloadAttachment:function(t){console.log(t),this.fileId=t},previewAttachmentCallback:function(){var t=this,n=this;return new r.a(function(e){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:t.fileId},beforeSend:function(t){t.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(t){t.data.sdkBaseUri=app.cloudSdkBaseUri,t.data.disableDataUpload=app.cloudDisableLogReport,t.data.disableSentry=app.cloudDisableLogReport,e(t),n.fileId=0})})},downloadAttachmentCallback:function(){var t=this,n=this;return new r.a(function(e){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:t.fileId},beforeSend:function(t){t.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(t){e(t),n.fileId=0})})}}},i=n(19),c=Object(i.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ibs-vue",attrs:{id:"app"}},[n("item-preview",{attrs:{item:t.item,showAttachment:t.showAttachment,cdnHost:t.cdnHost,previewAttachmentCallback:t.previewAttachmentCallback,downloadAttachmentCallback:t.downloadAttachmentCallback},on:{previewAttachment:t.previewAttachment,downloadAttachment:t.downloadAttachment}})],1)},[],!1,null,null,null).exports,u=n(15);Vue.config.productionTip=!1,"en"==app.lang&&(a=local.default,itemBank.default.install(Vue,{locale:a})),new Vue({render:function(t){return t(c)}}).$mount("#app"),(u.a.ie||u.a.ie10||u.a.ie11||u.a.edge)&&$(".modal").on("hide.bs.modal",function(){window.location.reload()})}});