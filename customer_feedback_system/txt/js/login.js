
const customer  = document.querySelector('#customer')
const customer_server = document.querySelector('#customer_server')
const emaile_login = document.querySelector('#emaile_login')
const phone_login = document.querySelector('#phone_login')
const h6 = document.getElementById('h6')
const password_kefu  = document.getElementById('password_kefu')
const password_kehu  = document.getElementById('password_kehu')
const user_login = document.getElementById('user_login')
const emaile_login_inp  = document.getElementById('emaile_login_inp')
const phone_login_inp = document.getElementById('phone_login_inp')
const login_h4 = document.getElementById('login_h4')
let kehu = true
let kehu_phon = false
let kehu_emai = true
let kefu = false
customer.addEventListener('click',function(){
    kehu = true
    kefu = false
    document.querySelector('.ul_customer').style.display = 'block'
    document.querySelector('.ul_server').style.display = 'none'
})
customer_server.addEventListener('click',function(){
    kefu = true
    kehu = false
    document.querySelector('.ul_server').style.display = 'block'
    document.querySelector('.ul_customer').style.display = 'none'
})
emaile_login.addEventListener('click',function(){
    kehu_emai = true
    kehu_phon = false
    document.querySelector('.login_email').style.display = 'block'
    document.querySelector('.login_phone').style.display = 'none'
})
phone_login.addEventListener('click',function(){
    kehu_emai = false
    kehu_phon = true
    document.querySelector('.login_email').style.display = 'none'
    document.querySelector('.login_phone').style.display = 'block'
})
h6.addEventListener('click',function(){
    window.location.href='passwordretrieval.html'
})
user_login.addEventListener('click',function(){
    if(kehu&kehu_emai){
        let user_message={
        login_user :'客户',
        login_type:'邮箱',
        login_message:emaile_login_inp.value
    }
    localStorage.setItem('user',JSON.stringify(user_message))
        var xi  = axios({
         url: 'http://127.0.0.1:8080/denluemail',
           method: 'post',
           data:{
        emaile:emaile_login_inp.value,
        password:password_kehu.value
           }
    })
    xi.then((res)=>{
        if(res.data){
            localStorage.setItem('kefu',false)
             window.location.href = "./main.html" 
        }
      
    })
    
    }
    if(kehu&kehu_phon){
        let user_message={
        login_user :'客户',
        login_type:'手机号码',
        login_message:phone_login_inp.value
    }
    localStorage.setItem('user',JSON.stringify(user_message))
        var xi  = axios({
            url: 'http://127.0.0.1:8080/denlu',
              method: 'post',
              data:{
phone :phone_login_inp.value,
password:password_kehu.value
              }
       })
    xi.then((res)=>{
        if(res.data){
            localStorage.setItem('kefu',false)
                window.location.href = "./main.html"
        }
    })
    
    }
    if(kefu){
        let kefu_message={
        login_user :'客服',
        login_type:'工号',
        login_message:kefu_login.value
    }
    localStorage.setItem('user',JSON.stringify(kefu_message))
        var xi  = axios({
            url: 'http://127.0.0.1:8080/kefudenlu',
              method: 'post',
              data:{
jobnumber:kefu_login.value,
password:password_kefu.value
              }
       })
       xi.then((res)=>{
        localStorage.setItem('kefu',true)
        if(res.data){
            window.location.href = "./main.html"
        }
    })
    
    }
})
