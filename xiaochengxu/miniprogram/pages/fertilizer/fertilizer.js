wx.cloud.init({
  env:'cloud1-1g68zuok4f972040',
  traceUser:true,
})
const db=wx.cloud.database()
const app=getApp();
// pages/fertilizer/fertilizer.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
      fertilizer:'',
    value:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    db.collection("toolss").get({
      success:res=>{
        console.log(res)
        this.setData({
          fertilizer:res.data
        })
      }
    })
  },
  shucai:function(e){
    var value = e.target.dataset.value;
    this.setData({ 
      value:value,
    })
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

  }
})