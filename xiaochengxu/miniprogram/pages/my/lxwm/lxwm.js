// pages/my/grzl/grzl.js
Page({
  handleContact(e){
console.log(e.detail.path)
  },
  data: {
pic:[
  'https://636c-cloud1-1g68zuok4f972040-1308408565.tcb.qcloud.la/%E6%A0%A1%E5%9B%AD%E5%85%BC%E8%81%8C/%E8%BD%AE%E6%92%AD%E5%9B%BE1.jpg?sign=c82f0a4ccf454fe1c257d8fb025ce0aa&t=1653052906',
  'https://636c-cloud1-1g68zuok4f972040-1308408565.tcb.qcloud.la/%E6%A0%A1%E5%9B%AD%E5%85%BC%E8%81%8C/%E8%BD%AE%E6%92%AD%E5%9B%BE2.jpg?sign=c68781e5881a053235d01adc0852f012&t=1653052940',
  'https://636c-cloud1-1g68zuok4f972040-1308408565.tcb.qcloud.la/%E6%A0%A1%E5%9B%AD%E5%85%BC%E8%81%8C/%E8%BD%AE%E6%92%AD%E5%9B%BE3.jpg?sign=5925e68a93a8a7f7f2a2afeba6318011&t=1653052957',
  'https://636c-cloud1-1g68zuok4f972040-1308408565.tcb.qcloud.la/%E6%A0%A1%E5%9B%AD%E5%85%BC%E8%81%8C/%E8%BD%AE%E6%92%AD%E5%9B%BE4.jpg?sign=12f34d8e3bf752208cb0a29d33c1e4e2&t=1653053006'
],
indicatorDots: true,  //是否显示面板指示点
autoplay: true,      //是否自动切换
interval: 3000,       //自动切换时间间隔
duration: 1000,       //滑动动画时长
inputShowed: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
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

  }
})