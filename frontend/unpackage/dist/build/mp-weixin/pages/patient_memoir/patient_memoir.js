(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/patient_memoir/patient_memoir"],{1540:function(e,t,u){"use strict";u.r(t);var n=u("2eea"),o=u.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){u.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},1884:function(e,t,u){"use strict";u.d(t,"b",(function(){return o})),u.d(t,"c",(function(){return i})),u.d(t,"a",(function(){return n}));var n={"u-Text":function(){return Promise.all([u.e("common/vendor"),u.e("node-modules/uview-ui/components/u--text/u--text")]).then(u.bind(null,"c33c"))},uAlbum:function(){return Promise.all([u.e("common/vendor"),u.e("node-modules/uview-ui/components/u-album/u-album")]).then(u.bind(null,"225c"))},add_memoir:function(){return Promise.all([u.e("common/vendor"),u.e("components/add_memoir/add_memoir")]).then(u.bind(null,"7c19"))}},o=function(){var e=this.$createElement;this._self._c},i=[]},"2eea":function(e,t,u){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{urls2:["https://cdn.uviewui.com/uview/album/1.jpg","https://cdn.uviewui.com/uview/album/2.jpg","https://cdn.uviewui.com/uview/album/3.jpg","https://cdn.uviewui.com/uview/album/4.jpg","https://cdn.uviewui.com/uview/album/5.jpg","https://cdn.uviewui.com/uview/album/6.jpg","https://cdn.uviewui.com/uview/album/7.jpg","https://cdn.uviewui.com/uview/album/8.jpg","https://cdn.uviewui.com/uview/album/9.jpg","https://cdn.uviewui.com/uview/album/10.jpg"],openid:"",messages:[{text:"消息1",urls:["https://cdn.uviewui.com/uview/album/1.jpg","https://cdn.uviewui.com/uview/album/2.jpg","https://cdn.uviewui.com/uview/album/3.jpg","https://cdn.uviewui.com/uview/album/4.jpg","https://cdn.uviewui.com/uview/album/5.jpg","https://cdn.uviewui.com/uview/album/6.jpg","https://cdn.uviewui.com/uview/album/7.jpg","https://cdn.uviewui.com/uview/album/8.jpg","https://cdn.uviewui.com/uview/album/9.jpg","https://cdn.uviewui.com/uview/album/10.jpg"],time:"2023-12-2-2-2-2"}],scrollTop:0}},components:{add_memoir:function(){Promise.all([u.e("common/vendor"),u.e("components/add_memoir/add_memoir")]).then(function(){return resolve(u("7c19"))}.bind(null,u)).catch(u.oe)}},methods:{onClickShow:function(){this.$refs["customModal"].showModal()},onClickConfirm:function(t){var u=JSON.parse(t);console.log(u);var n=u.img,o=this,i=new Date,c=i.getFullYear(),a=(i.getMonth()+1).toString().padStart(2,"0"),l=i.getDate().toString().padStart(2,"0"),s=i.getHours().toString().padStart(2,"0"),m=i.getMinutes().toString().padStart(2,"0"),r=c+"-"+a+"-"+l+" "+s+":"+m,d={text:u.text,urls:n,time:r};o.messages.unshift(d),o.scrollTop=0,o.$nextTick((function(){o.$refs.scrollView&&o.$refs.scrollView.scrollTo(0,0)})),e.request({url:getApp().globalData.base_url+"/SendMemoir/",method:"POST",data:{openid:this.openid,memoir:this.messages},success:function(e){console.log("添加回忆录成功"),console.log(e)},fail:function(e){console.log("添加回忆录失败")}}),this.$refs["customModal"].hideModal()}},onLoad:function(){var t=this;this.openid=getApp().globalData.global_openid,e.request({url:getApp().globalData.base_url+"/getPatientInfo/",method:"POST",data:{openid:this.openid},success:function(e){console.log("获取回忆录成功",e),t.messages=e.data.code.Memoir,null==t.messages&&(t.messages=[])},fail:function(e){console.log("获取回忆录失败")}})}};t.default=n}).call(this,u("bc2e")["default"])},7045:function(e,t,u){"use strict";var n=u("c947"),o=u.n(n);o.a},"77e0":function(e,t,u){"use strict";u.r(t);var n=u("1884"),o=u("1540");for(var i in o)["default"].indexOf(i)<0&&function(e){u.d(t,e,(function(){return o[e]}))}(i);u("7045");var c=u("f0c5"),a=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=a.exports},aa45:function(e,t,u){"use strict";(function(e,t){var n=u("4ea4");u("8371");n(u("66fd"));var o=n(u("77e0"));e.__webpack_require_UNI_MP_PLUGIN__=u,t(o.default)}).call(this,u("bc2e")["default"],u("543d")["createPage"])},c947:function(e,t,u){}},[["aa45","common/runtime","common/vendor"]]]);