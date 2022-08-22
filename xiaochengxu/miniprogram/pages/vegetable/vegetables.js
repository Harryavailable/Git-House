wx.cloud.init({
  env:'cloud1-1g68zuok4f972040',
  traceUser:true,
})
const db=wx.cloud.database()
const app=getApp();
Page({
  data: {
    vegetables:'',
value:0,
  },
  /**
   * 页面的初始数据
   */
onLoad:function(){
  db.collection("vegetables").get({
    success:res=>{
      console.log(res)
      this.setData({
        vegetables:res.data
      })
    }
  })
},
shucai:function(e){
  var value = e.target.dataset.value;
  this.setData({ 
    value:value,
  })
  /*
li_shucai.select('.li_shucai').boundingClientRect();
  li_shucai.exec(function(e){
    console.log(e);
  })*/
},





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
 /* handleActive(evt){
    this.setData({
      current:evt.currentTarget.dataset.index
    })
  }*/
})