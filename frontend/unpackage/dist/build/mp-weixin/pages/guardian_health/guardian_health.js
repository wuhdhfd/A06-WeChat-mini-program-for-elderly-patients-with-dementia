(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/guardian_health/guardian_health"],{"04a8":function(n,e,t){"use strict";var o=t("0669"),i=t.n(o);i.a},"0669":function(n,e,t){},"20a2":function(n,e,t){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{id_data:"guardian",note:{name:"11",place:"22",phone:"33"}}},onShow:function(){n.hideTabBar({animation:!1}),n.hideHomeButton&&(console.log("uni.hideHomeButton"),o.hideHomeButton())},components:{uniPopup:function(){t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(function(){return resolve(t("1b1b"))}.bind(null,t)).catch(t.oe)},uniPopupDialog:function(){Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog")]).then(function(){return resolve(t("dc70"))}.bind(null,t)).catch(t.oe)},tabBar:function(){t.e("components/tabbar/tabbar").then(function(){return resolve(t("9831"))}.bind(null,t)).catch(t.oe)},edit_note:function(){t.e("components/edit_note/edit_note").then(function(){return resolve(t("4679"))}.bind(null,t)).catch(t.oe)},fuilistcell:function(){t.e("components/firstui-uni/firstui/fui-list-cell/fui-list-cell").then(function(){return resolve(t("97b0"))}.bind(null,t)).catch(t.oe)},fuisection:function(){t.e("node-modules/firstui-uni/firstui/fui-section/fui-section").then(function(){return resolve(t("ba4c"))}.bind(null,t)).catch(t.oe)},fuiAvatar:function(){t.e("node-modules/firstui-uni/firstui/fui-avatar/fui-avatar").then(function(){return resolve(t("d329"))}.bind(null,t)).catch(t.oe)},fuiTag:function(){t.e("node-modules/firstui-uni/firstui/fui-tag/fui-tag").then(function(){return resolve(t("fef5"))}.bind(null,t)).catch(t.oe)}},methods:{goto_pill:function(){n.navigateTo({url:"/pages/guardian_pill/guardian_pill"})},goto_healthdata:function(){n.navigateTo({url:"/pages/guardian_healthdata/guardian_healthdata"})},onClickShow:function(){this.$refs["customModal"].showModal()},onClickConfirm:function(n){var e=JSON.parse(n);console.log(e.name),console.log(e.place),console.log(e.phone),o.request({url:getApp().globalData.base_url+"/modifyMemorial/",method:"POST",data:{openid:this.openid,name:e.name,place:e.place,phone:e.phone},success:function(n){console.log("修改备忘录成功"),console.log(n)},fail:function(n){console.log("修改备忘录失败")}}),this.$refs["customModal"].hideModal()}},onLoad:function(){this.openid=getApp().globalData.global_openid}};e.default=i}).call(this,t("543d")["default"],t("bc2e")["default"])},"4f13":function(n,e,t){"use strict";t.r(e);var o=t("20a2"),i=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a},5721:function(n,e,t){"use strict";(function(n,e){var o=t("4ea4");t("a1e5");o(t("66fd"));var i=o(t("7502"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(i.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"69b6":function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var o={uniNavBar:function(){return t.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"feb3"))},fuiSection:function(){return t.e("node-modules/firstui-uni/firstui/fui-section/fui-section").then(t.bind(null,"ba4c"))},fuiListCell:function(){return t.e("node-modules/firstui-uni/firstui/fui-list-cell/fui-list-cell").then(t.bind(null,"8cfa"))},edit_note:function(){return t.e("components/edit_note/edit_note").then(t.bind(null,"4679"))}},i=function(){var n=this.$createElement;this._self._c},u=[]},7502:function(n,e,t){"use strict";t.r(e);var o=t("69b6"),i=t("4f13");for(var u in i)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t("04a8");var a=t("f0c5"),l=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=l.exports}},[["5721","common/runtime","common/vendor"]]]);