const ul_feedback = document.getElementById('ul_feedback')
const productname = document.getElementById('productname')
const fankuitype = document.getElementById('fankuitype')
const search_feedback =document.getElementById('search_feedback')
const return_main =document.getElementById('return_main')
const feedback_search_h4 = document.getElementById('feedback_search_h4')
var arr
var xi = axios({
    url:'http://127.0.0.1:8080/allfeedback',
    method:'post'
})
xi.then((res)=>{
    arr = res.data
setTimeout(function(){
   for(let i =0 ;i<arr.length;i++){
    let li = document.createElement('li')
    ul_feedback.appendChild(li).innerHTML = '<div><span>产品名称:&nbsp;&nbsp;&nbsp;&nbsp;</span><strong>'
    +arr[i].productname+'<span style="opacity:0;" id="service_feedback_id" >'+res.data[i].id+'</span>'+'</strong><br><span>反馈类型:&nbsp;&nbsp;&nbsp;&nbsp;</span><strong>'
    +arr[i].feedback+'</strong><br><span>具体描述:&nbsp;&nbsp;&nbsp;&nbsp;</span><strong>'+arr[i].text+
    '</strong><p id = "service_feedback_p"><span>客服反馈:&nbsp;&nbsp;&nbsp;&nbsp;</span><input type="text" id="service_feedback_inp" style = "diaplay:block;"><span id="service_feedback_span" style = "diaplay:none; font-weight:600">'+arr[i].servicereturn
    +'</span></p></div><br><p class="feedback_p"><button class="feedback_p_btn" id="btn_examine_feedback">审核反馈</button><button class="feedback_p_btn" id="btn_submit_feedback">提交审核</button><button class="feedback_p_btn" id="btn_delete_feedback">删除反馈</button><button class="feedback_p_btn" id="btn_merge_feedback">合并反馈</button></p><hr>'
} 
})
btn()
})

let product_name = ''
let fankui_type = ''
productname.addEventListener('blur',function(){
    product_name =  productname.value
})
fankuitype.addEventListener('blur',function(){
    fankui_type =  fankuitype.value
})

search_feedback.addEventListener('click',function(){

    if(product_name.trim() ==='' && fankui_type.trim()=== ''){
        alert('请填选择查询信息')
    }else{
        var xi = axios({
            url:'http://127.0.0.1:8080/typefeedback',
            method:'post',
            data:{
productname:product_name,
feedback:fankui_type
            }
        })
        xi.then((res)=>{
            if(typeof(res.data)=== 'string'){
                ul_feedback.innerHTML = ''
                feedback_search_h4.innerHTML = res.data
             }else{
                let arr = res.data
                feedback_search_h4.innerHTML=''
                ul_feedback.innerHTML = ''
                for(let i =0 ;i<arr.length;i++){
                    let li = document.createElement('li')
                    ul_feedback.appendChild(li).innerHTML = '<div><span>产品名称:&nbsp;&nbsp;&nbsp;&nbsp;</span><strong>'
                    +arr[i].productname+'<span style="opacity:0;" id="service_feedback_id" >'+arr[i].id+'</span>'+'</strong><br><span>反馈类型:&nbsp;&nbsp;&nbsp;&nbsp;</span><strong>'
                    +arr[i].feedback+'</strong><br><span>具体描述:&nbsp;&nbsp;&nbsp;&nbsp;</span><strong>'+arr[i].text+
                    '</strong><p id = "service_feedback_p"><span>客服反馈:&nbsp;&nbsp;&nbsp;&nbsp;</span><input type="text" id="service_feedback_inp" style = "diaplay:block;"><span id="service_feedback_span" style = "diaplay:none; font-weight:600">'+arr[i].servicereturn
                    +'</span></p></div><br><p class="feedback_p"><button class="feedback_p_btn" id="btn_examine_feedback">审核反馈</button><button class="feedback_p_btn" id="btn_submit_feedback">提交审核</button><button class="feedback_p_btn" id="btn_delete_feedback">删除反馈</button><button class="feedback_p_btn" id="btn_merge_feedback">合并反馈</button></p><hr>'
                } 
            btn()
                }
            })
    }
})
return_main.addEventListener('click',function(){
    window.location.href = './main.html'
  })

  function btn(){
      setTimeout(function(){
    const btn_examine_feedback = document.querySelectorAll('#btn_examine_feedback')
    const btn_submit_feedback = document.querySelectorAll('#btn_submit_feedback')
    const btn_delete_feedback = document.querySelectorAll('#btn_delete_feedback')
    const btn_merge_feedback = document.querySelectorAll('#btn_merge_feedback')
    const service_feedback_p = document.querySelectorAll('#service_feedback_p')
    const service_feedback_span = document.querySelectorAll('#service_feedback_span')
    const service_feedback_inp = document.querySelectorAll('#service_feedback_inp')
    const service_feedback_id = document.querySelectorAll('#service_feedback_id')
    var feedback=''
    for(let i = 0;i<btn_examine_feedback.length;i++){
        if(service_feedback_span[i].innerHTML ==='null'){
    btn_examine_feedback[i].addEventListener('click',function(){
        service_feedback_span[i].style.display = 'none'
        service_feedback_p[i].style.opacity = 1;
    })
    service_feedback_inp[i].addEventListener('blur',function(){
        feedback = this.value
    })
    btn_submit_feedback[i].addEventListener('click',function(){
        service_feedback_inp[i].style.display = 'none' 
        service_feedback_span[i].innerHTML = feedback
        service_feedback_span[i].style.display = 'block'
        let num = service_feedback_id[i].innerHTML*1
            axios({
            url:'http://127.0.0.1:8080/serviceret',
            method:'post',
            data:{
              id:num,
              servicereturn:feedback
            }
        })
    })
}else{
    service_feedback_p[i].style.opacity = 1;
    service_feedback_inp[i].style.display = 'none' 
    service_feedback_span[i].style.display = 'block'
}
    btn_delete_feedback[i].addEventListener('click',function(){
        if(confirm('确定删除此反馈')){
        let num = service_feedback_id[i].innerHTML*1
      var xi =  axios({
        url:'http://127.0.0.1:8080/deletefeedback',
        method:'post',
        data:{
          id:num
        }
    })
    xi.then((res)=>{
  location.reload();
alert(res.data)
    })
}
    })
    btn_merge_feedback[i].addEventListener('click',function(){
        alert('请选择要合并的反馈！')
    })
    }

  
  },100)
  }
