(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"1b8a":function(e,n,o){"use strict";o.r(n);var t=o("faaf"),a=o("5e6e");for(var l in a)["default"].indexOf(l)<0&&function(e){o.d(n,e,(function(){return a[e]}))}(l);o("cd50");var i=o("f0c5"),u=Object(i["a"])(a["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);n["default"]=u.exports},"2ead":function(e,n,o){"use strict";(function(e,t){var a=o("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=a(o("2eee")),i=a(o("278c")),u=a(o("c973")),r={data:function(){return{role:"newrole"}},methods:{getUserInfo:function(e){e.detail.errMsg,console.log(e),this.getToken(e.detail)},getToken:function(n){var o=this;return(0,u.default)(l.default.mark((function n(){var a,u,r;return l.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=o,n.next=3,new Promise((function(n,o){e.login({provider:"weixin",success:function(o){n([null,o]),t.request({url:getApp().globalData.base_url+"/login/",method:"POST",data:{code:o.code},success:function(n){console.log("登录成功"),console.log(n),a.role=n.data.code.role,getApp().globalData.global_openid=n.data.code.openid,getApp().globalData.global_id=n.data.code.specialid,getApp().globalData.global_identity=a.role,console.log(getApp().globalData.global_openid),console.log(getApp().globalData.global_id),console.log(a.role),console.log(a.role),"newUser"===a.role?e.navigateTo({url:"/pages/identity/identity"}):"doctor"===a.role?e.navigateTo({url:"/pages/doctor_myinfo/doctor_myinfo"}):"guardian"===a.role?e.navigateTo({url:"/pages/guardian_myinfo/guardian_myinfo"}):"patient"===a.role&&e.navigateTo({url:"/pages/patient_memorandum/patient_memorandum"})},fail:function(e){console.log("登陆失败"),console.log(e)}})},fail:function(e){o([e,null])}})}));case 3:u=n.sent,r=(0,i.default)(u,2),r[0],r[1];case 7:case"end":return n.stop()}}),n)})))()}}};n.default=r}).call(this,o("543d")["default"],o("bc2e")["default"])},"5e6e":function(e,n,o){"use strict";o.r(n);var t=o("2ead"),a=o.n(t);for(var l in t)["default"].indexOf(l)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(l);n["default"]=a.a},"97b8":function(e,n,o){"use strict";(function(e,n){var t=o("4ea4");o("8371");t(o("66fd"));var a=t(o("1b8a"));e.__webpack_require_UNI_MP_PLUGIN__=o,n(a.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])},cd50:function(e,n,o){"use strict";var t=o("eb66"),a=o.n(t);a.a},eb66:function(e,n,o){},faaf:function(e,n,o){"use strict";o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return l})),o.d(n,"a",(function(){return t}));var t={uniNavBar:function(){return o.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"8058"))},uniIcons:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(o.bind(null,"2623"))}},a=function(){var e=this.$createElement;this._self._c},l=[]}},[["97b8","common/runtime","common/vendor"]]]);