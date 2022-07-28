
    const passw = document.getElementById('password')
    const username = document.getElementById('username')
    const h5 = document.querySelectorAll('h5')
    const denlu  = document.getElementById('denlu')
    const h4 = document.getElementById('h4')
    var flag = false;
    var flag1 = false;

     var nam  = /^[A-Za-z0-9_\-\u4e00-\u9fa5]{2,8}$/;//用户名验证正则表达式、
    var cip = /^[a-zA-Z0-9_-]{6,16}$/; //密码验证正则表达式
    
    var txt2 = '123456'
    var txt = 'Harry'
    username.addEventListener('blur', function () {
        flag = true;
     if(txt != this.value) {
      flag = false;
     }
    })

    passw.addEventListener('blur', function () { 
        flag1 = true;
      if(txt2 != this.value){
        flag = false
      }
      
      })
denlu.addEventListener('click',function(){
  if(flag&&flag1){
    window.location.href ="./txt/main.html"
  }else{
    h4.innerHTML = '请完善个人信息'
  }
  // if(flag&&flag1){
  //      var xi = axios({
  //     url: 'http://127.0.0.1:8080/denlu',
  //     method: 'post',
  //     data: {
  //       username: txt,
  //       password: txt2
  //     }
  //   })

  //   xi.then((res) => {
  //     if(res.data === '用户登录成功') {
  //     window.location.href ="./txt/main.html"
     
  //     }else{
  //     h4.innerHTML = res.data
  //     }
  //   },()=>{
  //   console.log('出错了')
  //   })

  // }else{
  //   h4.innerHTML = '请完善个人信息'
  // }
})