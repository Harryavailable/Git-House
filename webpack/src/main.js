import 'core-js'//完整引入core-js
// import 'core-js/es/..模块' //按需引入
import './css/index.css'
// import './css/index.less'
const  p =  document.querySelector('p')
const btn = document.getElementById('btn')
btn.onclick = function(){ 
   //eslint 不支持import动态导入
   ///*webpackChunkName:"other"*/ webpack魔法命名
  import(/*webpackChunkName:"other"*/ "./js/other.js").then( other =>{
     console.log(other)
  })
}

if(module.hot){   //判断当前浏览器是否支持热替换
  module.hot.accept("./js/other.js"); //对那个js文件进行热替换
}
//注册serviceWorker
 if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker.register('/service-worker.js').then(registration => {
       console.log('SW registered: ', registration);
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
     });
   });
 }