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
name:'',
pic:'',
flage:false,
userInfo:'',
openid:''
  },
  getuser:function(){
 wx:wx.getUserProfile({
   desc: '用于小程序登录', 
      success:(res)=>{
      console.log(res),
      getApp().globalData.flage=true,
        this.setData({
        userInfo:res.userInfo,
     name:res.userInfo.nickName,
     pic:res.userInfo.avatarUrl,
   flage:true
        })
      },
      fail(res){
        console.log("获取失败",res);
      }
  })
},
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  showwdjz:function(e){
    wx.navigateTo({
      url: '/pages/my/lxwm/lxwm',
    })
  },
  showlxwm:function(e){
    wx.navigateTo({
      url: '/pages/my/lxwm/lxwm',
    }) 
  },
  showsjzx:function(){
    wx.navigateTo({
      url: '/pages/zixun/zixun',
    })
  },
  shownmzr:function(){
    wx.navigateTo({
      url: '/pages/nmzr/nmzr',
    })
  },
  shownmzl:function(){
    wx.navigateTo({
      url: '/pages/njzp/njzp',
    })
  },
  showgrzl:function(e){
    var fla = this.data.flage;
    if(fla){
    wx.navigateTo({
      url: '/pages/my/grzl/grzl?userInfo='+JSON.stringify(this.data.userInfo),
    })}else{
      wx.showToast({
        title: '请登录',
        icon: 'error',
        duration: 1000
      })}
  }
})