const productname = document.querySelectorAll('#productname')
const chanpingname = document.getElementById('chanpingname')
const feedback = document.querySelectorAll('#feedback')
const fankuitype = document.getElementById('fankuitype')
const feedback_text = document.getElementById('feedback_text')
const btn_feedback = document.getElementById('btn_feedback')
const feedback_h4 = document.getElementById('feedback_h4')
const back_feedback = document.getElementById('back_feedback')
const search_feedback =document.getElementById('search_feedback')
const box_textarea = document.getElementsByClassName('box_textarea')
const feedback_search = document.getElementsByClassName('feedback_search')
const feedback_search_h5 = document.getElementById('feedback_search_h5')
const return_feedback = document.getElementById('return_feedback')
const dateiled_feedback =document.getElementById('dateiled_feedback')
var message  =JSON.parse(localStorage.getItem('user'))
for(let i=0 ;i<productname.length;i++){
    productname[i].addEventListener('click',function(){
        chanpingname.value = this.innerHTML
    })
}

for(let i=0 ;i<feedback.length;i++){
    feedback[i].addEventListener('click',function(){
       fankuitype.value = this.innerHTML
    })
}
btn_feedback.addEventListener('click',function(){
if(fankuitype.value.trim() !==''&& chanpingname.value.trim()!==''&& feedback_text.value.trim()!==''){
var xi = axios({
    url:'http://127.0.0.1:8080/feedback',
    method:'post',
    data:{
productname:chanpingname.value,
feedback:fankuitype.value,
text:feedback_text.value,
message:message.login_message
    }
})
xi.then((res)=>{
    feedback_h4.innerHTML = res.data
})
xi.catch(()=>{
    feedback_h4.innerHTML = '反馈提交失败'
})
} else{
    feedback_h4.innerHTML = '请提交完整信息'
}
})

back_feedback.addEventListener('click',function(){
    window.location.href = './main.html'
})
search_feedback.addEventListener('click',function(){
    let chanping = chanpingname.value
    let fankui = fankuitype.value
    if(fankui.trim() ==='' && chanping.trim()=== ''){
        alert('请填写查询信息')
    }else{
        var xi = axios({
            url:'http://127.0.0.1:8080/typefeedback',
            method:'post',
            data:{
productname:chanping,
feedback:fankui
            }
        })
        xi.then((res)=>{
            if(typeof(res.data)=== 'string'){
               feedback_search_h5.innerHTML = res.data
            }else{
                localStorage.setItem('data',JSON.stringify(res.data))
                feedback_search_h5.innerHTML = '<strong>共查询到&nbsp;&nbsp;</strong>'+'<strong>'+res.data.length+'</strong>'+'<strong>&nbsp;&nbsp;条记录</strong>'
            }
            
        })
        box_textarea[0].style.display = 'none'
        feedback_search[0].style.display = 'block'
    }
})
return_feedback.addEventListener('click',function(){
    box_textarea[0].style.display = 'block'
    feedback_search[0].style.display = 'none'
})
dateiled_feedback.addEventListener('click',function(){
    window.location.href = './feedbackretrieval.html'
})