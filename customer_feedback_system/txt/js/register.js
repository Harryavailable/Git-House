
const username_user = document.getElementById('username')
const nickname = document.getElementById('nickname')
const usersex_man = document.getElementById('man')
const usersex_women = document.getElementById('woman')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const password = document.getElementById('password')
const passwordsure = document.getElementById('passwordsure')
const zhuce = document.getElementById('zhuce')
const mesg_h5 = document.getElementById('mesg_h5')

let sex = ''
    usersex_man.addEventListener('click',function(){
       if(this.checked = true)
        sex = '男'
    })
    usersex_women.addEventListener('click',function(){
        if(this.checked = true)
       sex = '女'
     })
zhuce.addEventListener('click',function(){

    if(password.value.trim() !== ''){
       if(password.value !== passwordsure.value ){
    mesg_h5.style.display = 'block';
}else{
    mesg_h5.style.display = 'none';
    var xi = axios({
        url:'http://127.0.0.1:8080/zhuce',
        method:'post',
        data:{
            username:username_user.value,
            nickname:nickname.value,
            sex:sex,
            email:email.value,
            phone:phone.value,
            address:address.value,
            password:password.value
        }
    })
    xi.then((res)=>{
        mesg_h5.style.display = 'block'
        mesg_h5.innerHTML = res.data
    })
    xi.catch(()=>{
        mesg_h5.style.display = 'block'
        mesg_h5.innerHTML = '用户注册失败'
    })
} 
    }else{
mesg_h5.style.display = 'block';
    } 

})