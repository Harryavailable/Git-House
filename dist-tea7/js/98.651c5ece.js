"use strict";(self["webpackChunkvue_tea"]=self["webpackChunkvue_tea"]||[]).push([[98],{1098:function(t,s,a){a.r(s),a.d(s,{default:function(){return f}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"order"},[s("header",[s("i",{staticClass:"iconfont icon-fanhui",on:{click:t.backNextPage}}),s("span",[t._v("提交订单")]),s("i",{staticClass:"iconfont icon-xiaoxi"})]),s("section",{ref:"wrapper"},[s("div",[s("span",{staticClass:"shxx"},[t._v("收货信息:")]),s("div",{staticClass:"userDZ"},[s("div",{staticClass:"userDZ_l"},[s("ul",[s("li",[s("span",[t._v(t._s(t.userDefaults?.name))]),s("span",[t._v(t._s(t.userDefaults?.tel))])]),s("li",[s("span",{staticStyle:{"font-size":"0.4rem"}},[t._v(t._s(t.userDefaults?.cityCounty))]),s("span",{staticStyle:{"font-size":"0.4rem"}},[t._v(t._s(t.userDefaults?.addressDetail))])])])]),s("div",{staticClass:"userDZ_r"},[s("i",{staticClass:"iconfont icon-liebiao",on:{click:t.changeTackDelivery}})])]),t._m(0),t._l(t.shopList,(function(a,i){return s("div",{key:i,staticClass:"spxx"},[s("div",{staticClass:"spxq"},[s("div",{staticClass:"spimg"},[s("img",{staticStyle:{width:"2.5rem",height:"2.5rem"},attrs:{src:a.goods_imgUrl}})]),s("div",{staticClass:"spqtxx"},[s("ul",[s("li",[t._v(t._s(a.goods_name))]),t._m(1,!0),s("li",{staticClass:"spanli"},[s("b",[t._v("￥"+t._s(a.goods_price))]),s("span",[t._v(t._s(a.goods_num))])])])])]),t._m(2,!0)])})),s("span",{staticClass:"shxx"},[t._v("账单明细:")]),s("div",{staticClass:"ddzj"},[s("ul",[s("li",[s("span",[t._v("订单总价:")]),s("b",[t._v("￥"+t._s(t.sumPrice))])]),t._m(3),t._m(4),s("li",[s("span",[t._v("实际付款:")]),s("b",[t._v("￥"+t._s(t.sumPrice+10))])])])]),s("van-notice-bar",{attrs:{"left-icon":"volume-o",text:"订单在12小时内未支付将自动取消"}})],2)]),s("footer",[s("div",{staticClass:"f-left"},[s("span",[t._v("共"),s("b",[t._v(t._s(t.sumNum))]),t._v("件，总金额"),s("b",[t._v("￥"+t._s(t.sumPrice+10))])])]),s("div",{staticClass:"f-right",on:{click:t.submitOrder}},[t._v("提交订单")])])])},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"zffs"},[s("ul",[s("li",[s("span",[t._v("支付方式：")]),s("b",[t._v("选择在线支付,随机减金额")])]),s("li",{staticClass:"gezhozhifu"},[s("span",{staticClass:"gezhozhifuBorder"},[t._v("支付宝支付")]),s("span",[t._v("微信支付")]),s("span",[t._v("货到付款")]),s("span",[t._v("信用卡支付")])])])])},function(){var t=this,s=t._self._c;return s("li",[s("span",[t._v("商品规格:无")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"maijialiuyan"},[s("input",{attrs:{type:"text",placeholder:"给卖家留言"}})])},function(){var t=this,s=t._self._c;return s("li",[s("span",[t._v("运费:")]),s("b",[t._v("￥10.00")])])},function(){var t=this,s=t._self._c;return s("li",[s("span",[t._v("优惠卷:")]),s("b",[t._v("-￥0.00")])])}],r=(a(7658),a(144)),n=a(5109),d=a(7370),o=a(8255),u=a(629),c=a(7535),l=a(6665);r.ZP.use(d.Z);var h={name:"order-vue",data(){return{addressList:[],shopList:[],thisaddList:[],sumNum:0,sumPrice:0}},created(){let t=this.$route.params.selectList,s=0,a=0;for(let i of this.list)-1!=t.indexOf(i.id)&&(this.shopList.push(i),s+=parseInt(i.goods_num),a+=i.goods_num*i.goods_price);this.sumNum=s,this.sumPrice=a},activated(){this.$route.params.item&&this.thisaddList.push(JSON.parse(this.$route.params.item))},methods:{backNextPage(){this.$router.push("/cart")},async getUserAddress(){let t=await(0,o.ic)();200==t.data.code&&(this.addressList=t.data.data.r)},changeTackDelivery(){this.$router.push({name:"AddressIndex",params:{path:!0}})},async submitOrder(){let t=[];for(let a of this.shopList)t.push(a.id);let s=await(0,c.N7)(this.productToken);if(200==s.data.code){let s=await(0,l.$x)(t);if(200==s.data.code){let t=await(0,c._r)(this.productToken);200==t.data.code&&(window.location.href=t.data.data.payMentUrl)}}}},mounted(){this.getUserAddress(),this.$nextTick((()=>{new n.ZP(this.$refs.wrapper,{movable:!0,zoom:!0,click:!0})}))},computed:{userDefaults(){if(0==this.thisaddList.length){let t={};return this.addressList.forEach((s=>{1==s.isDefault&&(t=s)})),t.id?t:this.addressList[0]}return this.thisaddList[this.thisaddList.length-1]},...(0,u.rn)({list:t=>t.cart.list}),...(0,u.rn)({productToken:t=>t.cart.productToken})}},p=h,_=a(1001),v=(0,_.Z)(p,i,e,!1,null,"ccc802b4",null),f=v.exports},6665:function(t,s,a){a.d(s,{$x:function(){return d},CI:function(){return n},IU:function(){return r},N:function(){return o},xL:function(){return e}});var i=a(8859);const e=t=>(0,i.Z)({url:"/api/shop/addCart",method:"post",data:{goodsId:t}}),r=()=>(0,i.Z)({url:"/api/shop/getShopList",method:"get"}),n=t=>(0,i.Z)({url:"/api/shop/deleteCart",method:"post",data:{id:t}}),d=t=>(0,i.Z)({url:"/api/shop/deleteAllCart",method:"post",data:{idArr:t}}),o=(t,s)=>(0,i.Z)({url:"/api/shop/updateShopNum",method:"post",data:{id:t,num:s}})},8255:function(t,s,a){a.d(s,{EK:function(){return n},ic:function(){return r},nd:function(){return d},uC:function(){return e}});var i=a(8859);const e=t=>(0,i.Z)({url:"/api/add/userAdd",method:"post",data:{addList:t}}),r=()=>(0,i.Z)({url:"/api/add/userAddList",method:"get"}),n=(t,s)=>(0,i.Z)({url:"/api/add/changeAddlist",method:"post",data:{id:t,changeList:s}}),d=t=>(0,i.Z)({url:"/api/add/deleteAddress",method:"get",params:{id:t}})}}]);
//# sourceMappingURL=98.651c5ece.js.map