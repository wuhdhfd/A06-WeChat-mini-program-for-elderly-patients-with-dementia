(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/guardian_contact_doctor/guardian_contact_doctor"],{"1c94":function(n,i,e){"use strict";e.r(i);var t=e("30ae"),u=e("235f");for(var o in u)["default"].indexOf(o)<0&&function(n){e.d(i,n,(function(){return u[n]}))}(o);e("6881");var l=e("f0c5"),c=Object(l["a"])(u["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);i["default"]=c.exports},"235f":function(n,i,e){"use strict";e.r(i);var t=e("6505"),u=e.n(t);for(var o in t)["default"].indexOf(o)<0&&function(n){e.d(i,n,(function(){return t[n]}))}(o);i["default"]=u.a},"30ae":function(n,i,e){"use strict";e.d(i,"b",(function(){return u})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return t}));var t={uniNavBar:function(){return e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"8058"))},fuiSection:function(){return e.e("node-modules/firstui-uni/firstui/fui-section/fui-section").then(e.bind(null,"bc9c"))},uList:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/uview-ui/components/u-list/u-list")]).then(e.bind(null,"8122"))},fuiListCell:function(){return e.e("node-modules/firstui-uni/firstui/fui-list-cell/fui-list-cell").then(e.bind(null,"b2ae"))},fuiIcon:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/firstui-uni/firstui/fui-icon/fui-icon")]).then(e.bind(null,"d2dc"))},uBadge:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/uview-ui/components/u-badge/u-badge")]).then(e.bind(null,"3c56"))}},u=function(){var n=this.$createElement;this._self._c},o=[]},6505:function(n,i,e){"use strict";(function(n,t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var u={data:function(){return{openid:"",id_data:"guardian",navheight:"60px",indexList:[{doctor_id:"",flag:!1}],scrollheight:"1100rpx",urls:["https://cdn.uviewui.com/uview/album/1.jpg","https://cdn.uviewui.com/uview/album/2.jpg","https://cdn.uviewui.com/uview/album/3.jpg","https://cdn.uviewui.com/uview/album/4.jpg","https://cdn.uviewui.com/uview/album/5.jpg","https://cdn.uviewui.com/uview/album/6.jpg","https://cdn.uviewui.com/uview/album/7.jpg","https://cdn.uviewui.com/uview/album/8.jpg","https://cdn.uviewui.com/uview/album/9.jpg","https://cdn.uviewui.com/uview/album/10.jpg"],timer:"",doctor_nickname:""}},methods:{scrolltolower:function(){},gotochat:function(i){getApp().globalData.global_opposite_id=i,console.log(i),n.request({url:getApp().globalData.base_url+"/GuardianFlagFalse/",method:"POST",data:{openid:this.openid},success:function(n){console.log("修改标识为false成功")},fail:function(n){console.log("修改标识为false失败")}}),t.navigateTo({url:"/pages/chatting/chatting"})},valChange:function(){this.indexList[0].flag=getApp().globalData.global_flag,console.log(this.indexList)}},components:{tabBar:function(){e.e("components/tabbar/tabbar").then(function(){return resolve(e("00f8"))}.bind(null,e)).catch(e.oe)},fuiList:function(){e.e("node-modules/firstui-uni/firstui/fui-list/fui-list").then(function(){return resolve(e("1023"))}.bind(null,e)).catch(e.oe)},fuiListCell:function(){e.e("node-modules/firstui-uni/firstui/fui-list-cell/fui-list-cell").then(function(){return resolve(e("b2ae"))}.bind(null,e)).catch(e.oe)},fuiBadge:function(){e.e("node-modules/firstui-uni/firstui/fui-badge/fui-badge").then(function(){return resolve(e("ab3d"))}.bind(null,e)).catch(e.oe)},fuiIcon:function(){Promise.all([e.e("common/vendor"),e.e("node-modules/firstui-uni/firstui/fui-icon/fui-icon")]).then(function(){return resolve(e("d2dc"))}.bind(null,e)).catch(e.oe)},fuisection:function(){e.e("node-modules/firstui-uni/firstui/fui-section/fui-section").then(function(){return resolve(e("bc9c"))}.bind(null,e)).catch(e.oe)}},onShow:function(){this.indexList[0].doctor_id=getApp().globalData.global_opposite_id,this.indexList[0].flag=getApp().globalData.global_flag,console.log(this.indexList),this.timer=setInterval(this.valChange,2e3),this.doctor_nickname=getApp().globalData.global_opposite_nickname,this.openid=getApp().globalData.global_openid},onLoad:function(){}};i.default=u}).call(this,e("bc2e")["default"],e("543d")["default"])},6881:function(n,i,e){"use strict";var t=e("e69d"),u=e.n(t);u.a},b2ee:function(n,i,e){"use strict";(function(n,i){var t=e("4ea4");e("8371");t(e("66fd"));var u=t(e("1c94"));n.__webpack_require_UNI_MP_PLUGIN__=e,i(u.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},e69d:function(n,i,e){}},[["b2ee","common/runtime","common/vendor"]]]);