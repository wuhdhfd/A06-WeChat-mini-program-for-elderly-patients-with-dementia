(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/follow/follow"],{"1cdd":function(n,t,u){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{followurl:"",uid:"请输入上述公众号返回的UID"}},components:{fuiInput:function(){u.e("node-modules/firstui-uni/firstui/fui-input/fui-input").then(function(){return resolve(u("2b2c"))}.bind(null,u)).catch(u.oe)},fuiButton:function(){u.e("node-modules/firstui-uni/firstui/fui-button/fui-button").then(function(){return resolve(u("c590"))}.bind(null,u)).catch(u.oe)}},onLoad:function(){var t=this;this.followurl=decodeURIComponent("https://wxpusher.zjiecode.com/wxuser/?type=1&id=67688#/follow"),console.log(this.followurl),n.request({url:getApp().globalData.base_url+"/getPatientInfo/",method:"POST",data:{openid:this.openid},success:function(n){t.uid=n.data.code.uid,console.log("绑定患者账号成功"),console.log(n)},fail:function(n){console.log("绑定患者账号失败")}})},methods:{input:function(n){this.uid=n},confirm:function(){console.log(this.uid),n.request({url:getApp().globalData.base_url+"/WriteUid/",method:"POST",data:{openid:this.openid,uid:this.uid},success:function(n){console.log("绑定患者账号成功"),console.log(n)},fail:function(n){console.log("绑定患者账号失败")}})}}};t.default=e}).call(this,u("bc2e")["default"])},"372d":function(n,t,u){"use strict";u.r(t);var e=u("1cdd"),o=u.n(e);for(var i in e)["default"].indexOf(i)<0&&function(n){u.d(t,n,(function(){return e[n]}))}(i);t["default"]=o.a},"836e":function(n,t,u){"use strict";u.d(t,"b",(function(){return o})),u.d(t,"c",(function(){return i})),u.d(t,"a",(function(){return e}));var e={fuiInput:function(){return u.e("node-modules/firstui-uni/firstui/fui-input/fui-input").then(u.bind(null,"2b2c"))},fuiButton:function(){return u.e("node-modules/firstui-uni/firstui/fui-button/fui-button").then(u.bind(null,"c590"))}},o=function(){var n=this.$createElement;this._self._c},i=[]},b03e:function(n,t,u){"use strict";u.r(t);var e=u("836e"),o=u("372d");for(var i in o)["default"].indexOf(i)<0&&function(n){u.d(t,n,(function(){return o[n]}))}(i);u("fa28");var l=u("f0c5"),c=Object(l["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);t["default"]=c.exports},e330:function(n,t,u){},e746:function(n,t,u){"use strict";(function(n,t){var e=u("4ea4");u("8371");e(u("66fd"));var o=e(u("b03e"));n.__webpack_require_UNI_MP_PLUGIN__=u,t(o.default)}).call(this,u("bc2e")["default"],u("543d")["createPage"])},fa28:function(n,t,u){"use strict";var e=u("e330"),o=u.n(e);o.a}},[["e746","common/runtime","common/vendor"]]]);