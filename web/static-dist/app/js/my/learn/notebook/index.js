!function(t){var n={};function r(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(o,e,t){r.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:t})},r.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)r.d(t,n,function(o){return e[o]}.bind(null,n));return t},r.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(e,"a",e),e},r.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},r.p="/static-dist/",r(r.s=687)}({687:function(o,e){$("#notebook-list").on("click",".media",function(){window.location.href=$(this).find(".notebook-go").attr("href")});var t=$("#notebook");t.on("click",".notebook-note-collapsed",function(){$(this).removeClass("notebook-note-collapsed")}),t.on("click",".notebook-note-collapse-bar",function(){$(this).parents(".notebook-note").addClass("notebook-note-collapsed")}),t.on("click",".notebook-note-delete",function(){var o=$(this);if(!confirm(Translator.trans("course.notebook.delete_hint")))return!1;$.post(o.data("url"),function(){o.parents(".notebook-note").remove()})})}});