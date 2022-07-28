
         const btn  = document.querySelector('button')
         const inp = document.querySelectorAll('input')
         const passw = document.getElementById('password')
         const supassw = document.getElementById('surepassword')
         const h5 = document.querySelectorAll('h5')
         const zhuce = document.getElementById('zhuce')
         const h4 = document.querySelector('h4')
         var flag = false;
         var flag1 = false;
        var nam = /^[A-Za-z0-9_\-\u4e00-\u9fa5]{2,8}$/; //用户名验证正则表达式
         var cip = /^[a-zA-Z0-9_-]{6,16}$/; //密码验证正则表达式
         var txt2 = ''
         var txt =''
        btn.addEventListener('click',function(){  
              txt = inp[0].value;
              if(nam.test(txt)){   
               var xi = axios({
                url:'http://127.0.0.1:8080/post',
                method:'post',
                data:{
                    username:txt
                }
            })
            xi.then((res)=>{
                h5[0].innerHTML = res.data
            })
             flag = true;
        }else{
             h5[0].innerHTML = '输入用户名不合法' 
        }
 })

passw.addEventListener('blur',function(){
   txt2 = this.value
if(cip.test(txt2)){
    h5[1].innerHTML = '密码可用'
}else{
    h5[1].innerHTML = '密码格式错误'
}
 })

  supassw.addEventListener('blur', function () {
        let txt3 = this.value
               if (txt3 ===  txt2) {
            h5[2].innerHTML = '密码可用'
            flag1 = true;
        } else {
            h5[2].innerHTML = '密码输入不一致'
        }
    })
    zhuce.addEventListener('click',function(){
if(flag&&flag1){
     var xi = axios({
        url: 'http://127.0.0.1:8080/zhuce',
        method: 'post',
        data: {
            username: txt,
            password:txt2
        }
    })
    xi.then((res) => {
        h4.innerHTML = res.data
    })
} else {
    h4.innerHTML = '请完善个人信息'
}
})
