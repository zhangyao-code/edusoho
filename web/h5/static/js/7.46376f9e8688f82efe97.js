webpackJsonp([7],{odi1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("f4F5"),e("Cj3+"),e("wA3Z");var o=e("Dd8w"),s=e.n(o),i=e("woOf"),a=e.n(i),c=e("//Fk"),l=e.n(c),r=e("7+uW"),u=e("9JZw"),f=e("SSsa"),m=e("CsZI"),d=Object(u.a)({render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"van-dialog-bounce"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],class:t.b()},[t.title?e("div",{class:t.b("header"),domProps:{textContent:t._s(t.title)}}):t._e(),e("div",{staticClass:"van-hairline",class:t.b("content")},[t._t("default",[t.message?e("div",{class:t.b("message",{withtitle:t.title}),domProps:{innerHTML:t._s(t.message)}}):t._e()])],2),e("div",{class:t.b("footer",{buttons:t.showCancelButton&&t.showConfirmButton})},[e("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showCancelButton,expression:"showCancelButton"}],class:t.b("cancel"),attrs:{loading:t.loading.cancel,size:"large"},on:{click:function(n){t.handleAction("cancel")}}},[t._v("\n        "+t._s(t.cancelButtonText||t.$t("cancel"))+"\n      ")]),e("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showConfirmButton,expression:"showConfirmButton"}],class:[t.b("confirm"),{"van-hairline--left":t.showCancelButton&&t.showConfirmButton}],attrs:{size:"large",loading:t.loading.confirm},on:{click:function(n){t.handleAction("confirm")}}},[t._v("\n        "+t._s(t.confirmButtonText||t.$t("confirm"))+"\n      ")])],1)])])},name:"dialog",components:{VanButton:f.a},mixins:[m.a],props:{title:String,message:String,callback:Function,beforeClose:Function,confirmButtonText:String,cancelButtonText:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{handleAction:function(t){var n=this;this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(){n.onClose(t),n.loading[t]=!1})):this.onClose(t)},onClose:function(t){this.$emit("input",!1),this.$emit(t),this.callback&&this.callback(t)}}}),v=void 0,h=function(t){return new l.a(function(n,e){v||((v=new(r.default.extend(d))({el:document.createElement("div")})).$on("input",function(t){v.value=t}),document.body.appendChild(v.$el)),a()(v,s()({resolve:n,reject:e},t))})};h.defaultOptions={value:!0,title:"",message:"",overlay:!0,lockScroll:!0,beforeClose:null,confirmButtonText:"",cancelButtonText:"",showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,callback:function(t){v["confirm"===t?"resolve":"reject"](t)}},h.alert=function(t){return h(s()({},h.currentOptions,t))},h.confirm=function(t){return h(s()({},h.currentOptions,{showCancelButton:!0},t))},h.close=function(){v&&(v.value=!1)},h.setDefaultOptions=function(t){a()(h.currentOptions,t)},h.resetDefaultOptions=function(){h.currentOptions=s()({},h.defaultOptions)},h.install=function(){r.default.use(d)},r.default.prototype.$dialog=h,h.resetDefaultOptions();var g=h,p=(e("eqfM"),e("/QYm")),_=e("NYxO"),C=e("gyMJ"),w=e("Du/2"),b=(e("IcnI"),{data:function(){return{settings:[{name:"头像",info:""},{name:"昵称",info:""}]}},computed:s()({},Object(_.mapState)({user:function(t){return t.user},isLoading:function(t){return t.isLoading}})),created:function(){this.$set(this.settings[0],"info",this.user.avatar.large),this.$set(this.settings[1],"info",this.user.nickname)},methods:s()({},Object(_.mapActions)(["setAvatar"]),{handleSetting:function(t){switch(t){case 0:break;case 1:this.$router.push({name:"setting_nickname",query:{nickname:""==this.user.nickname?"":this.user.nickname}});break;case 2:Object(p.a)("更改手机号，后续开通")}},logout:function(){var t=this;g.confirm({title:"退出登录",message:"确定要退出登录吗？"}).then(function(){t.$store.commit(w.l,{token:"",user:{}}),t.$router.push({name:"my"})})},onRead:function(t){var n=this;C.a.updateFile({data:{file:t.content,group:"user"}}).then(function(e){n.$set(n.settings[0],"info",t.content),n.setAvatar({avatarId:e.id}).then(function(){p.a.success("修改成功")}).catch(function(t){p.a.fail(t.message)})})}})}),B={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my_setting"},[t.isLoading?e("e-loading"):t._e(),t._v(" "),t._l(t.settings,function(n,o){return e("div",{staticClass:"my_setting-item",on:{click:function(n){t.handleSetting(o)}}},[e("span",{staticClass:"my_setting-title title-18"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"my_setting-content"},[o?t._e():e("img",{staticClass:"my_setting-avatar",attrs:{src:n.info,alt:""}}),t._v(" "),o?e("span",[t._v(t._s(n.info))]):t._e(),t._v(" "),e("img",{staticClass:"my_setting-more",attrs:{src:"static/images/more.png",alt:""}})]),t._v(" "),o?t._e():e("van-uploader",{attrs:{"after-read":t.onRead}})],1)}),t._v(" "),e("div",{staticClass:"log-out-btn title-18",on:{click:t.logout}},[e("span",[t._v("退出登录")])])],2)},staticRenderFns:[]},k=e("VU/8")(b,B,!1,null,null,null);n.default=k.exports},wA3Z:function(t,n){}});