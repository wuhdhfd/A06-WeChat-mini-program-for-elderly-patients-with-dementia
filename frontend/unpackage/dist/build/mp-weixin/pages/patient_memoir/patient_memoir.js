(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/patient_memoir/patient_memoir"],{"0369":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={"u-Text":function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u--text/u--text")]).then(n.bind(null,"496e"))},uAlbum:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-album/u-album")]).then(n.bind(null,"5a2a"))},add_memoir:function(){return Promise.all([n.e("common/vendor"),n.e("components/add_memoir/add_memoir")]).then(n.bind(null,"a3ab"))}},a=function(){var e=this.$createElement;this._self._c},i=[]},"0c15":function(e,t,n){"use strict";n.r(t);var o=n("0369"),a=n("dbae");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("87a6");var r=n("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=u.exports},1451:function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("a1e5");o(n("66fd"));var a=o(n("0c15"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"87a6":function(e,t,n){"use strict";var o=n("ed32"),a=n.n(o);a.a},da32:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{urls2:[],openid:"",messages:[],scrollTop:0}},components:{add_memoir:function(){Promise.all([n.e("common/vendor"),n.e("components/add_memoir/add_memoir")]).then(function(){return resolve(n("a3ab"))}.bind(null,n)).catch(n.oe)}},methods:{onClickShow:function(){this.$refs["customModal"].showModal()},onClickConfirm:function(t){var n=JSON.parse(t);console.log(n);var o=n.img,a=this,i=new Date,r=i.getFullYear(),u=(i.getMonth()+1).toString().padStart(2,"0"),l=i.getDate().toString().padStart(2,"0"),s=i.getHours().toString().padStart(2,"0"),c=i.getMinutes().toString().padStart(2,"0"),d=r+"-"+u+"-"+l+" "+s+":"+c,m={text:n.text,urls:o,time:d};a.messages.unshift(m),a.scrollTop=0,a.$nextTick((function(){a.$refs.scrollView&&a.$refs.scrollView.scrollTo(0,0)})),e.request({url:getApp().globalData.base_url+"/SendMemoir/",method:"POST",data:{openid:this.openid,memoir:this.messages},success:function(e){console.log("添加回忆录成功"),console.log(e)},fail:function(e){console.log("添加回忆录失败")}}),this.$refs["customModal"].hideModal()}},onLoad:function(){var t=this;this.openid=getApp().globalData.global_openid,e.request({url:getApp().globalData.base_url+"/getPatientInfo/",method:"POST",data:{openid:this.openid},success:function(e){console.log("获取回忆录成功",e),t.messages=e.data.code.Memoir,null==t.messages&&(t.messages=[])},fail:function(e){console.log("获取回忆录失败")}})}};t.default=o}).call(this,n("bc2e")["default"])},dbae:function(e,t,n){"use strict";n.r(t);var o=n("da32"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},ed32:function(e,t,n){}},[["1451","common/runtime","common/vendor"]]]);