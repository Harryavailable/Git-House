const user_type = document.getElementById('user_type')
const login_type = document.getElementById('login_type')
const login_num =document.getElementById('login_num')
const goto_passback = document.getElementById('goto_passback')
const myfeedback_h5 =document.getElementById('my_feedback_h5')
const ul_feedback = document.getElementById('ul_feedback')
const firstpage = document.getElementById('firstpage')
const mymessage = document.getElementById('mymessage')
const about_us = document.getElementById('about_us')
const statistics =document.getElementById('statistics')
const check_all_feedback = document.getElementById('check_all_feedback')
user_message = JSON.parse(localStorage.getItem('user'))

user_type.innerHTML = user_message.login_user
login_type.innerHTML = user_message.login_type
login_num.innerHTML = user_message.login_message
goto_passback.addEventListener('click',function(){
    window.location.href = './comment.html'
})
var message_arr =[]
    var xi = axios({

   url:'http://127.0.0.1:8080/myfeedback',
    method:'post',
    data:{
        message:user_message.login_message
    }
})
xi.then((res)=>{
    if(typeof(res.data) === 'string'){
       let li =  document.createElement('li')
        ul_feedback.appendChild(li).innerHTML ='<h5 id ="my_feedback_h5" style="font-size:15px;color:#666">'+res.data+'</h5>'
    }else{
        message_arr = res.data
for(let i=0;i<message_arr.length;i++){
    let li =  document.createElement('li')
ul_feedback.appendChild(li).innerHTML = '<div><span>产品名称:&nbsp;&nbsp;&nbsp;&nbsp;</span><strong>'+
message_arr[i].productname+'<span style="display:none;" id ="message_arr_span_id">'+message_arr[i].id+'</span>'+'</strong><br><span>反馈类型:&nbsp;&nbsp;&nbsp;&nbsp;</span><strong>'+
message_arr[i].feedback+'</strong><br><span>具体描述:&nbsp;&nbsp;&nbsp;&nbsp;</span><strong>'+
message_arr[i].text+'</strong><p id="message_arr_p" style ="opacity:0;"><span  style = "font-weight:400;">客服反馈:&nbsp;&nbsp;&nbsp;&nbsp;</span><span id="message_arr_span" style = "font-weight:600;">'+
message_arr[i].servicereturn+'</span></p><p id="userzhuijia_feedback_p" style="opacity:0;"></p></div><br><hr>'
}
settime()
}
})
var kefu = localStorage.getItem('kefu')
check_all_feedback.addEventListener('click',function(){
if(kefu === 'true'){
window.location.href = './feedbackdetails.html'
}else{
    alert('您不是客服，此功能只供客服使用！')
}

})
statistics.addEventListener('click',function(){
    if(kefu === 'true'){
    window.location.href = './echarts.html'
    }else{
        alert('您不是客服，此功能只供客服使用！')
    }
    
    })
firstpage.addEventListener('click',function(){
    window.location.href = './index.html'
})
mymessage.addEventListener('click',function(){
    window.location.href = './mymessage.html'
})
about_us.addEventListener('click',function(){
    window.location.href = './aboutus.html'
})
function settime(){
    setTimeout(function(){
      const   message_arr_p  = document.querySelectorAll('#message_arr_p')
      const   message_arr_span  = document.querySelectorAll('#message_arr_span')
     const  message_arr_span_id = document.querySelectorAll('#message_arr_span_id')
     const userzhuijia_feedback_p = document.querySelectorAll('#userzhuijia_feedback_p')
      for(let i=0;i<message_arr_span.length;i++){
        let id = message_arr_span_id[i].innerHTML
        if(message_arr_span[i].innerHTML !== 'null'){
            message_arr_p[i].style.opacity = 1 ;
        } 


   
       var add =  axios({
        url:'http://127.0.0.1:8080/searchaddfeedback',
         method:'post',
         data:{
            id:id
         }
     })
    add.then((res)=>{
        console.log(res.data)
        if(typeof(res.data) !== 'string'){
            for(let i=0;i<res.data.length;i++){
                userzhuijia_feedback_p[i].style.opacity = 1
                let strong =  document.createElement('strong')
                userzhuijia_feedback_p[i].appendChild(strong).innerHTML = '<span style="font-weight: 400;">用户评价:&nbsp;&nbsp;&nbsp;&nbsp;</span><span>'
                +res.data[i].addtofeedback+'</span><span style=" font-weight: 400;">用户信息:&nbsp;&nbsp;&nbsp;&nbsp;</span><span>'
                +res.data[i].usernum+'</span>'
                
        }
            }
            
    }) 
      }
      

    },100)
}