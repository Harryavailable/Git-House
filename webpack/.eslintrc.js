module.exports = {
  //继承Eslint规则
  extends:"eslint:recommended",
  env:{
    node:true,  //启用node.js全局变量
    browser:true, //启用浏览器环境中的全局变量
  },
  parserOptions:{
    ecmaVersion:6,  //指定想要使用的ECMAScript版本
    sourceType:"module", //es6模块化
    // ecmaFeatures:{     //设置想要使用的额外语言特性
    //   globalReturn:true,   //是否允许在全局作用域下使用retuen语句
    //   impliedStrict:false,   //是否启用全局严格模式
    //   jsx:false,   //是否启用JSX
    //   experimentalObjectRestSpread:false   //是否启用实验性的支持
    // }
  },
  rules:{
    "no-var":2, //不能使用var定义变量
  },
}