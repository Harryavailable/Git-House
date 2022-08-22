// pages/my/grzl/sjzhuce/sjzhuce.js
wx.cloud.init({
  env:'cloud1-1g68zuok4f972040',
  traceUser:true,
})
const db=wx.cloud.database()
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
userlocal:'',
usertextcont:'',
username:'',
userdescribe:'',
status:'',
usersex:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
let userInfo = JSON.parse(options.userInfo);
let userlocal = JSON.parse(options.local);
let usertextcont = JSON.parse(options.textcont);
let username = JSON.parse(options.textname);
let userstatus = JSON.parse(options.status);
let usersex = JSON.parse(options.gender);
this.setData({
  userInfo:userInfo,
  userlocal:userlocal,
  usertextcont:usertextcont,
  username:username,
  status:userstatus,
  usersex:usersex
})
  },
  mouseleave:function(e){
    var rg = /[\u4e00-\u9fa5-0-9]+/;
    var count = e.detail.value.trim();
    if(rg.test(count)){
          this.setData({
      userdescribe:count
    })
    }else{
      wx.showToast({
        title: '请正确输入',
        icon: 'error',
        duration: 500
      })
    }
  },
submit:function(e){
  var rg = /[\u4e00-\u9fa5-0-9]+/;
  let cou = this.data.userdescribe;
  var that = this;
if(rg.test(cou)){
  wx.showModal({
    title:'提示',
    cancelColor:'#000',
    confirmColor:'#ff0000',
    content: '慧农家将存储您的姓名，地址信息，详细介绍',
    success: function (res) {
      if (res.confirm) {//这里是点击了确定以后
         db.collection("business").add({
    data:{
name:that.data.username,
add: that.data.userlocal,
phone:that.data.usertextcont,
information:that.data.userdescribe,
wxname:that.data.userInfo.nickName,
status:that.data.status,
sex:that.data.usersex
    },
    success:res=>{
     wx.showToast({
       icon:'success',
       title: '提交成功',
       duration:500
     })
    },
    fail:err=>{
      wx.showToast({
        icon:'error',
        title: '提交失败',
        duration:500
            })
    },
  })
     setTimeout(function(){
    wx.switchTab({
      url: '/pages/fabu/fabu',
    })
},1000)
    }
    else{
      wx.showToast({
        title: '信息提交失败',
        icon:'error',
        duration:500
      })
    }
  }
})

  }else{
    wx.showToast({
      icon:'error',
      title: '提交失败',
      duration:500
  })
}
},
})