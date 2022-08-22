
wx.cloud.init({
  env:'cloud1-1g68zuok4f972040',
  traceUser:true,
})
const db=wx.cloud.database()
const app=getApp();// pages/nmzr/nmzr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
nmzr:'',
flage:''
  },
  hiden:function(){
    wx.switchTab({
      url: '/pages/my/my',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var app = getApp();
    var flage = app.globalData.flage;
    console.log(flage);
    this.setData({
    flage:flage
    })
    db.collection("recruit").get({
      success:res=>{
        console.log(res)
        this.setData({
          nmzr:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})