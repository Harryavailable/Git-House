window.onload = function(){
    var tel =/^0?(13|14|15|18|17)[0-9]{9}$/;
    var nam=/^[A-Za-z0-9_\-\u4e00-\u9fa5]{2,8}$/;
    var qq = /^[1-9]([0-9]{4,10})$/;
    var em = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
    var cip = /^[a-zA-Z0-9_-]{6,16}$/;
    var pwd='';
    document.querySelector("#tel").addEventListener("blur",function(){
        if(tel.test(this.value)){
            this.nextElementSibling.className =  'successs';
            this.nextElementSibling.innerHTML = '<i class="iconfont success">&#xe79a;手机号码输入正确</i>';
        }
        else{
            this.nextElementSibling.className =  'errow';
            this.nextElementSibling.innerHTML = '<i class="iconfont errow">&#xe613;手机号码格式不正确，请重新输入</i>';
        }
    })
    document.querySelector("#name").addEventListener("blur",function(){
        if(nam.test(this.value)){
            this.nextElementSibling.className =  'successs';
            this.nextElementSibling.innerHTML = '<i class="iconfont success">&#xe79a;用户名输入输入正确</i>';
        }
        else{
            this.nextElementSibling.className =  'errow';
            this.nextElementSibling.innerHTML = '<i class="iconfont errow">&#xe613;用户名输入不正确,请重新输入</i>';
        }
    })
    document.querySelector("#qq").addEventListener("blur",function(){
        if(qq.test(this.value)){
            this.nextElementSibling.className =  'successs';
            this.nextElementSibling.innerHTML = '<i class="iconfont success">&#xe79a;QQ号输入输入正确</i>';
        }
        else{
            this.nextElementSibling.className =  'errow';
            this.nextElementSibling.innerHTML = '<i class="iconfont errow">&#xe613;QQ号输入不正确,请重新输入</i>';
        }
    })
    document.querySelector("#username").addEventListener("blur",function(){
        if(nam.test(this.value)){
            this.nextElementSibling.className =  'successs';
            this.nextElementSibling.innerHTML = '<i class="iconfont success">&#xe79a;昵称输入输入正确</i>';
        }
        else{
            this.nextElementSibling.className =  'errow';
            this.nextElementSibling.innerHTML = '<i class="iconfont errow">&#xe613;昵称输入不正确,请重新输入</i>';
        }
    })
    document.querySelector("#e-mail").addEventListener("blur",function(){
        if(em.test(this.value)){
            this.nextElementSibling.className =  'successs';
            this.nextElementSibling.innerHTML = '<i class="iconfont success">&#xe79a;Email输入输入正确</i>';
        }
        else{
            this.nextElementSibling.className =  'errow';
            this.nextElementSibling.innerHTML = '<i class="iconfont errow">&#xe613;Email输入不正确,请重新输入</i>';
        }
    })
    document.querySelector("#cipher").addEventListener("blur",function(){
        pwd = this.value;
        if(cip.test(this.value)){
            this.nextElementSibling.className =  'successs';
            this.nextElementSibling.innerHTML = '<i class="iconfont success">&#xe79a;密码输入正确</i>';
        }
        else{
            this.nextElementSibling.className =  'errow';
            this.nextElementSibling.innerHTML = '<i class="iconfont errow">&#xe613;密码输入不正确,请重新输入</i>';
        }
    })
    document.querySelector("#surecipher").addEventListener("blur",function(){
       if(this.value!=pwd){
        this.nextElementSibling.className =  'errow';
        this.nextElementSibling.innerHTML = '<i class="iconfont errow">&#xe613;两次密码输入不一致</i>';
       }else{
        this.nextElementSibling.className =  'successs';
        this.nextElementSibling.innerHTML = '<i class="iconfont success">&#xe79a;密码输入正确</i>';
       }
    })
}