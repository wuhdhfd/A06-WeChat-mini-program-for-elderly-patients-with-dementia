(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/guardian_myinfo/guardian_myinfo"],{"0fcf":function(n,t,e){"use strict";e.r(t);var i=e("c21c"),o=e("f5fb");for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("c959");var u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=c.exports},"1c12":function(n,t,e){"use strict";(function(n,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{datapatient:{remark:"11",status:0},datadoctor:{remark:"11",status:0},id_data:"guardian",id:"",nickname:"暂无昵称",name_info:{name:""},openid:""}},onShow:function(){n.hideTabBar({animation:!1}),n.hideHomeButton&&(console.log("uni.hideHomeButton"),i.hideHomeButton())},computed:{myId:function(){return this.id}},components:{uniPopup:function(){e.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(function(){return resolve(e("994a"))}.bind(null,e)).catch(e.oe)},uniPopupDialog:function(){Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog")]).then(function(){return resolve(e("dc99"))}.bind(null,e)).catch(e.oe)},tabBar:function(){e.e("components/tabbar/tabbar").then(function(){return resolve(e("00f8"))}.bind(null,e)).catch(e.oe)},guardianpatient_state:function(){e.e("components/guardian_patient_state/guardian_patient_state").then(function(){return resolve(e("4671"))}.bind(null,e)).catch(e.oe)},guardiandoctor_state:function(){e.e("components/guardian_doctor_state/guardian_doctor_state").then(function(){return resolve(e("417c"))}.bind(null,e)).catch(e.oe)},fuilistcell:function(){e.e("components/firstui-uni/firstui/fui-list-cell/fui-list-cell").then(function(){return resolve(e("37a8"))}.bind(null,e)).catch(e.oe)},fuisection:function(){e.e("node-modules/firstui-uni/firstui/fui-section/fui-section").then(function(){return resolve(e("bc9c"))}.bind(null,e)).catch(e.oe)},fuiAvatar:function(){e.e("node-modules/firstui-uni/firstui/fui-avatar/fui-avatar").then(function(){return resolve(e("a7f8"))}.bind(null,e)).catch(e.oe)},fuiTag:function(){e.e("node-modules/firstui-uni/firstui/fui-tag/fui-tag").then(function(){return resolve(e("4712"))}.bind(null,e)).catch(e.oe)},edit_nickname:function(){e.e("components/edit_nickname/edit_nickname").then(function(){return resolve(e("34ef"))}.bind(null,e)).catch(e.oe)}},methods:{goto_memoir:function(){n.navigateTo({url:"/pages/patient_memoir/patient_memoir"})},goto_healthdata:function(){n.navigateTo({url:"/pages/patient_healthdata/patient_healthdata"})},show_patient:function(){this.$refs["patient"].showModal()},show_doctor:function(){this.$refs["doctor"].showModal()},confirm_patient:function(n){var t=JSON.parse(n);console.log(t.remark),i.request({url:getApp().globalData.base_url+"/GuardianToPatient/",method:"POST",data:{openid:this.openid,patient_id:t.remark},success:function(n){console.log("绑定患者账号成功"),console.log(n)},fail:function(n){console.log("绑定患者账号失败")}}),this.$refs["patient"].hideModal()},confirm_doctor:function(n){var t=JSON.parse(n);console.log(t.remark),i.request({url:getApp().globalData.base_url+"/GuardianToDoctor/",method:"POST",data:{openid:this.openid,doctor_id:t.remark},success:function(n){getApp().globalData.global_opposite_id=t.remark,console.log("绑定医生账号成功"),console.log(n)},fail:function(n){console.log("绑定医生账号失败")}}),this.$refs["doctor"].hideModal()},editnickname:function(){this.$refs["customModal"].showModal()},onClickConfirm:function(n){var t=JSON.parse(n);console.log(t.name),this.nickname=t.name,i.request({url:getApp().globalData.base_url+"/ModifyGaurdianNickname/",method:"POST",data:{openid:this.openid,nickname:this.nickname},success:function(){console.log(111)},fail:function(n){console.log(222)}}),this.$refs["customModal"].hideModal()}},onLoad:function(){this.openid=getApp().globalData.global_openid;var n=this;i.request({url:getApp().globalData.base_url+"/getGuardianInfo/",method:"POST",data:{openid:this.openid},success:function(t){console.log("获取监护人id成功"),n.id=t.data.code.Guardian_id,n.nickname=t.data.code.Nickname,""!=n.nickname&&"UNDEFINED"!=n.nickname&&void 0!=n.nickname&&null!=n.nickname||(n.nickname="暂无昵称"),console.log(t)},fail:function(n){console.log("绑定患者账号失败")}})}};t.default=o}).call(this,e("543d")["default"],e("bc2e")["default"])},"54c4":function(n,t,e){"use strict";(function(n,t){var i=e("4ea4");e("8371");i(e("66fd"));var o=i(e("0fcf"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(o.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},c21c:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var i={uniNavBar:function(){return e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"8058"))},fuiAvatar:function(){return e.e("node-modules/firstui-uni/firstui/fui-avatar/fui-avatar").then(e.bind(null,"a7f8"))},fuiTag:function(){return e.e("node-modules/firstui-uni/firstui/fui-tag/fui-tag").then(e.bind(null,"4712"))},fuiSection:function(){return e.e("node-modules/firstui-uni/firstui/fui-section/fui-section").then(e.bind(null,"bc9c"))},fuiListCell:function(){return e.e("node-modules/firstui-uni/firstui/fui-list-cell/fui-list-cell").then(e.bind(null,"b2ae"))},edit_nickname:function(){return e.e("components/edit_nickname/edit_nickname").then(e.bind(null,"34ef"))}},o=function(){var n=this.$createElement;this._self._c},a=[]},c959:function(n,t,e){"use strict";var i=e("fa5b"),o=e.n(i);o.a},f5fb:function(n,t,e){"use strict";e.r(t);var i=e("1c12"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=o.a},fa5b:function(n,t,e){}},[["54c4","common/runtime","common/vendor"]]]);