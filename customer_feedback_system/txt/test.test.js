const ceshi = require('./test/testzhengze.js');
const {n,p} = ceshi
const  axioss = require('./test/testaxios');
const {axio1,axio2} = axioss
const dbtest  = require('./test/testdb.js');
const {nss,nsd,inss,insd} = dbtest

// 用户名位数测试2~8
test('用户名测试1位',()=>{
  expect(n('张')).toBeFalsy()
})
test('用户名测试2位',()=>{
  expect(n('张三')).toBeTruthy() 
})
test('用户名测试3位',()=>{
  expect(n('张三峰')).toBeTruthy()
})
test('用户名测试5位',()=>{
  expect(n('这是五位数')).toBeTruthy()
})
test('用户名测试7位',()=>{
  expect(n('张三12345')).toBeTruthy() 
})
test('用户名测试8位',()=>{
  expect(n('adc崔丝塔娜炮')).toBeTruthy() 
})
test('用户名测试9位',()=>{
  expect(n('adc崔丝塔娜炮手')).toBeFalsy()
})
//用户名特殊值测试
test('用户名特殊值测试',()=>{
  expect(n('张@!?/')).toBeFalsy()
})
test('用户名验证测试1位',()=>{
  expect(n('张{}+=')).toBeFalsy()
})


//密码测试6~16
test('密码测试5位',()=>{
  expect(p('12345')).toBeFalsy()
})
test('密码测试6位',()=>{
  expect(p('123456')).toBeTruthy()
})
test('密码测试7位',()=>{
  expect(p('1234567')).toBeTruthy()
})
test('密码测试10位',()=>{
  expect(p('1234567890')).toBeTruthy()
})
test('密码测试15位',()=>{
  expect(p('123456789011111')).toBeTruthy()
})
test('密码测试16位',()=>{
  expect(p('1234567890123456')).toBeTruthy()
})
test('密码测试17位',()=>{
  expect(p('12345678901234567')).toBeFalsy()
})
//密码特殊值测试
test('密码特殊值测试',()=>{
  expect(p('adq@!^sd')).toBeFalsy()
})
test('密码特殊值测试',()=>{
  expect(p('12s&*451+-=')).toBeFalsy()
})


//axios测试
test('用户名查询请求测试',(done)=>{
axio1((data)=>{
  expect(data).toEqual('用户名可用')
})
done()
})

test('用户名登录测试',(done)=>{
axio2((data)=>{
  expect(data).toEqual('用户登录成功')
})
done()
})


//数据库测试
test('数据库查询测试',(done)=>{
nss((data)=>{
  expect(data).toBe('用户名不可用')
})
done()
}) 

test('数据库查询测试',(done)=>{
nsd((data)=>{
  expect(data).toBe('用户名不可用')
})
done()
}) 

test('数据库添加',(done)=>{
inss((data)=>{
  expect(data).toBe('用户注册成功')
})
done()
}) 

test('数据库添加',(done)=>{
insd((data)=>{
  expect(data).toBe('用户注册失败')
})
done()
}) 




