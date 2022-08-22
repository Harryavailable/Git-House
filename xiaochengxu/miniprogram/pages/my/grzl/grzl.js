// pages/my/grzl/grzl.js
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
    local:'获取当前地址信息',
    userInfo:'',
    gender:'',
    textname:'点击输入',
    textcont:'点击输入',
    status:'',
    bg:true,//用来判断用户姓名是否输入;
    bg1:true,//用来判断用户号码是否输入；
    bg2:true,
    userzc:true,//用来判断用户表是否有此用户;
    userotherzc:false,
    userotherzr:false,
    userotherzj:false,//用来判断其他表中是否有次用户;
    username:'username',
    userphone:'userphone',
    usersex:'usersex'
  },
  getlocal:function(e){
    wx.chooseLocation({
      latitude: '获取地址信息',
      success:(res)=>{
        console.log(res)
        this.setData({
          local:res.name
        })
      }
    })
  },
  userphone:function(){
this.setData({
bg:false
})
  },
  usersex:function(){
this.setData({
  bg2:false
})
},
  username:function(){
this.setData({
  bg1:false
})
  },

  textname:function(e){
   var rg = /^(?:[\u4e00-\u9fa5·]{2,6})$/;
    var cou = e.detail.value.trim();
    if(rg.test(cou)){
        this.setData({
       bg1:true,
       textname:cou
    })
    }else{
    wx.showToast({
        title: '请输入正确信息',
        icon: 'error',
        duration: 500
      })
  }
  },
  textsex:function(e){
    var rg = /^(?:[\u4e00-\u9fa5·]{1})$/;
    var cou = e.detail.value.trim();
    if(rg.test(cou)){    this.setData({
       bg2:true,
       gender:cou
    })    
}else{
  wx.showToast({
        title: '请输入正确信息',
        icon: 'error',
        duration: 500
      })
  }
  },
    textleave:function(e){
     var rg = /0?(13|14|15|18|17)[0-9]{9}/;
    var cou = e.detail.value.trim();
    if(rg.test(cou)){
          this.setData({
       textcont:cou,
       bg:true,
    })
    }else{
      wx.showToast({
        title: '请输入正确信息',
        icon: 'error',
        duration: 500
      })
  }
  },
  sjzhuce:function(e){
    var that = this; //存储当前this 当前this指向出发时间的按钮，使用提示框后，this将指向window
     if(this.data.bg1&&this.data.bg){
      wx.showModal({
        title: '提示',
        content: '慧农家将使用您的姓名，联系方式，地址信息，来完善个人资料',
cancelColor:'#000',
confirmColor:'#ff0000',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
  getApp().globalData.num=getApp().globalData.num+1;
       console.log(getApp().globalData.num)
  that.setData({
    status:'商家'
  })
      db.collection("Users").add({
        data:{
    username:that.data.textname,
    userwxname:that.data.userInfo.nickName,
    userphone:that.data.textcont,
    useradd:that.data.local,
    usersex:that.data.gender,
    userstatus:'商家',
        },
      })
    wx.navigateTo({
      url: '/pages/my/grzl/sjzhuce/sjzhuce?userInfo='+JSON.stringify(that.data.userInfo)+'&local='+JSON.stringify(that.data.local)+'&textcont='+JSON.stringify(that.data.textcont)+'&gender='+JSON.stringify(that.data.gender)+'&textname='+JSON.stringify(that.data.textname)+'&status='+JSON.stringify(that.data.status)
    })
          }else {//这里是点击了取消以后
            wx.showToast({
              title: '信息提交失败',
              icon: 'error',
              duration: 500
            })
          }
        }
      })
     }else{
      wx.showToast({
        title: '请完善信息',
        icon: 'error',
        duration: 500
      })
    }
  },
  nmzhaoreng:function(){
var that = this;
    if(this.data.bg1&&this.data.bg){
      wx.showModal({
        title: '提示',
        content: '慧农家将使用您的姓名，联系方式，地址信息，来完善个人资料',
        cancelColor:'#000',
confirmColor:'#ff0000',
        success: function (res) {
          if(res.confirm){
    getApp().globalData.num=getApp().globalData.num+1;
    that.setData({
      status:'临时工'
    })
      db.collection("Users").add({
        data:{
    username:that.data.textname,
    userwxname:that.data.userInfo.nickName,
    userphone:that.data.textcont,
    useradd:that.data.local,
    usersex:that.data.gender,
    userstatus:'临时工'
        },
      })
    wx.navigateTo({
      url: '/pages/my/grzl/nmzhaoreng/nmzhaoreng?userInfo='+JSON.stringify(that.data.userInfo)+'&local='+JSON.stringify(that.data.local)+'&textcont='+JSON.stringify(that.data.textcont)+'&textname='+JSON.stringify(that.data.textname)+'&gender='+JSON.stringify(that.data.gender)+'&status='+JSON.stringify(that.data.status)
    })
  }else{
    wx.showToast({
      title: '信息提交失败',
      icon: 'error',
      duration: 500
  })
}
        }
      })
  }else{
      wx.showToast({
        title: '请完善信息',
        icon: 'error',
        duration: 500
      })
  }
},
  zjzhuce:function(){
    var that  =this;
    if(this.data.bg1&&this.data.bg){
      wx.showModal({
        title: '提示',
        content: '慧农家将使用您的姓名，联系方式，地址信息，来完善个人资料',
        cancelColor:'#000',
confirmColor:'#ff0000',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
      getApp().globalData.num=getApp().globalData.num+1;
      that.setData({
      status:'出租农具'
      })
        db.collection("Users").add({
          data:{
      username:that.data.textname,
      userwxname:that.data.userInfo.nickName,
      userphone:that.data.textcont,
      useradd:that.data.local,
      usersex:that.data.gender,
      userstatus:'出租农具'
          },
        })
      wx.navigateTo({
        url: '/pages/my/grzl/zjzhuce/zjzhuce?userInfo='+JSON.stringify(that.data.userInfo)+'&local='+JSON.stringify(that.data.local)+'&textcont='+JSON.stringify(that.data.textcont)+'&textname='+JSON.stringify(that.data.textname)+'&gender='+JSON.stringify(that.data.gender)+'&status='+JSON.stringify(that.data.status)
      })
    }else {//这里是点击了取消以后
      wx.showToast({
        title: '信息提交失败',
        icon: 'error',
        duration: 500
      })
    }
  }
})
    }else{
        wx.showToast({
          title: '请完善信息',
          icon: 'error',
          duration: 500
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let item=JSON.parse(options.userInfo);
    this.setData({
      userInfo:item,
   gender:item.gender?'女':'男',
    }),

    db.collection("business").where({
      wxname:item.nickName
      }).get().then(res=>{
        console.log(res)
          this.setData({
           local:res.data[0].add,
           textname:res.data[0].name,
           textcont:res.data[0].phone,
          status:res.data[0].status,
          gende:res.data[0].sex,
            userzc:res.data[0].status!=''?false:true,
            username:res.data[0].status!=''?'':'username',
              userphone:res.data[0].status!=''?'':'userphone',
              usersex:res.data[0].status!=''?'':'usersex',
        })
       }),
       db.collection("recruit").where({
        wxname:item.nickName
        }).get().then(res=>{
          console.log(res)
          this.setData({
            local:res.data[0].add,
            textname:res.data[0].name,
            textcont:res.data[0].phone,
           status:res.data[0].status,
           gende:res.data[0].sex,
             userzc:res.data[0].status!=''?false:true,
             username:res.data[0].status!=''?'':'username',
               userphone:res.data[0].status!=''?'':'userphone',
               usersex:res.data[0].status!=''?'':'usersex',
         })
         }),
         db.collection("tools").where({
          wxname:item.nickName
          }).get().then(res=>{
            console.log(res)
            this.setData({
              local:res.data[0].add,
              textname:res.data[0].name,
              textcont:res.data[0].phone,
             status:res.data[0].status,
             gende:res.data[0].sex,
               userzc:res.data[0].status!=''?false:true,
               username:res.data[0].status!=''?'':'username',
                 userphone:res.data[0].status!=''?'':'userphone',
                 usersex:res.data[0].status!=''?'':'usersex',
           })
           })
          },
  onShow:function(){
    db.collection("business").where({
      wxname:this.data.userInfo.nickName
      }).get().then(res=>{
        this.setData({
          userotherzc:res.data.length=== 0 ?false:true,
       }) 
       }),
       db.collection("recruit").where({
        wxname:this.data.userInfo.nickName
        }).get().then(res=>{
          this.setData({
            userotherzr:res.data.length=== 0 ?false:true,
         }) 
         }),
         db.collection("tools").where({
          wxname:this.data.userInfo.nickName
          }).get().then(res=>{
            this.setData({
              userotherzj:res.data.length=== 0 ?false:true,
           }) 
           }),
    db.collection("Users").where({
    userwxname:this.data.userInfo.nickName
    }).get().then(res=>{
   if(this.data.userotherzc||this.data.userotherzr||this.data.userotherzj)
{   
  var num = getApp().globalData.num-1;
      this.setData({
      local:res.data[num].useradd,
      textname:res.data[num].username,
      textcont:res.data[num].userphone,
      status:res.data[num].userstatus,
      userzc:res.data[num].userstatus!=''?false:true,
      username:res.data[num].userstatus!=''?'':'username',
      userphone:res.data[num].userstatus!=''?'':'userphone',
      usersex:res.data[num].userstatus!=''?'':'usersex',
     }) 
    } 
     })
  }
})