(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/identity/identity"],{"73f8":function(n,t,e){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{role:"",openid:""}},methods:{sendrole:function(){getApp().globalData.global_identity=this.role,n.request({url:getApp().globalData.base_url+"/role/",method:"POST",data:{role:this.role,openid:this.openid},success:function(n){getApp().globalData.global_id=n.data.code.specialid,console.log(n),console.log("保存身份成功")},fail:function(n){console.log("保存身份失败")}})},patient_info:function(){this.role="patient",this.sendrole(),e.redirectTo({url:"/pages/patient_memorandum/patient_memorandum"})},guardian_info:function(){this.role="guardian",this.sendrole(),e.redirectTo({url:"/pages/guardian_myinfo/guardian_myinfo"})},doctor_info:function(){this.role="doctor",this.sendrole(),e.redirectTo({url:"/pages/doctor_myinfo/doctor_myinfo"})}},onLoad:function(){this.openid=getApp().globalData.global_openid}};t.default=o}).call(this,e("bc2e")["default"],e("543d")["default"])},"7a86":function(n,t,e){"use strict";(function(n,t){var o=e("4ea4");e("8371");o(e("66fd"));var a=o(e("a15d"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"8a79":function(n,t,e){"use strict";var o=e("ac7c"),a=e.n(o);a.a},a15d:function(n,t,e){"use strict";e.r(t);var o=e("c61f"),a=e("f454");for(var i in a)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("8a79");var r=e("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=u.exports},ac7c:function(n,t,e){},c61f:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}));var o={uniNavBar:function(){return e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"8058"))}},a=function(){var n=this.$createElement;this._self._c},i=[]},f454:function(n,t,e){"use strict";e.r(t);var o=e("73f8"),a=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=a.a}},[["7a86","common/runtime","common/vendor"]]]);