const express = require('express');
const cors = require('cors');
const db = require('./数据库连接')
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//用户注册
app.post('/zhuce',(req,res)=>{
  let usermes = req.body
  let dbstr = 'INSERT INTO users (username,nickname,sex,email,phone,address,password) value(?,?,?,?,?,?,?)'
  db.query(dbstr,[usermes.username,usermes.nickname,usermes.sex,usermes.email,usermes.phone,usermes.address,usermes.password],(err,results)=>{
    if(err){
      return console.log(err.message)
    }
    if(results.affectedRows === 1){
      return res.send('用户注册成功')
    }
  })
})
//反馈提交
app.post('/feedback',(req,res)=>{
  let usermes = req.body
  let dbstr = 'INSERT INTO feedback (productname,feedback,text,message) value(?,?,?,?)'
  db.query(dbstr,[usermes.productname,usermes.feedback,usermes.text,usermes.message],(err,results)=>{
    if(err){
      return console.log(err.message)
    }
    if(results.affectedRows === 1){
      return res.send('反馈提交成功')
    }
  })
})
//用户登录(手机登录)
app.post('/denlu',(req,res)=>{
let data = req.body
let dbstr = 'select * from users where phone =?'
db.query(dbstr,data.phone,(err,results)=>{
    if(err){
      return  res.send('出错了')
    }
    if(results[0].password === data.password){
       return  res.send(true)
    }else{
      return  res.send(false)
    }
  
    
})
})
//用户登录(电子邮箱登录)
app.post('/denluemail',(req,res)=>{
  let data = req.body
  let dbstr = 'select * from users where email =?'
  db.query(dbstr,data.email,(err,results)=>{
      if(err){
        return  res.send('出错了')
      }
      if(results[0].password === data.password){
         return  res.send(true)
      }else{
        return  res.send(false)
      }
    
      
  })
  })
//客服登录
app.post('/kefudenlu',(req,res)=>{
  let data = req.body
  let dbstr = 'select * from service where jobnumber = ?'
  db.query(dbstr,data.jobnumber,(err,results)=>{
      if(err){
        return  res.send('出错了')
      }
      if(results[0].password === data.password){
         return  res.send(true)
      }else{
        return  res.send(false)
      }
    
      
  })
  })
//个人用户反馈查询
app.post('/myfeedback',(req,res)=>{
  let data = req.body
  let dbstr = 'select * from feedback where message =?'
  db.query(dbstr,data.message,(err,results)=>{
      if(err){
        return  res.send('出错了')
      }
     if(results.length === 0){ 
      return res.send('未查询到反馈记录')

     }else{   
      return res.send(results)

     }
    
  })
  })
  //用户反馈按种类划分查询
  app.post('/typefeedback',(req,res)=>{
    let data = req.body
    let dbstr = 'select * from feedback where productname = ? and feedback = ?'
    db.query(dbstr,[data.productname,data.feedback],(err,results)=>{
        if(err){
          return  res.send('出错了')
        }
       if(results.length === 0){ 
        return res.send('未查询到反馈记录')
  
       }else{   
        return res.send(results)
  
       } 
    })
    })
    //用户信息查询
    app.post('/searchuser',(req,res)=>{
      let data = req.body
      let dbstr = 'select * from users where phone = ? or email = ?'
      db.query(dbstr,[data.usermessage,data.usermessage],(err,results)=>{
          if(err){
            return  res.send('出错了')
          }
         if(results.length === 0){ 
          return res.send('未查询到用户记录')
    
         }else{   
          return res.send(results)
    
         } 
      })
      })
      //客服信息查询
      app.post('/searchservice',(req,res)=>{
        let data = req.body
        let dbstr = 'select * from service where jobnumber = ? '
        db.query(dbstr,[data.usermessage],(err,results)=>{
            if(err){
              return  res.send('出错了')
            }
           if(results.length === 0){ 
            return res.send('未查询到反馈记录')
      
           }else{   
            return res.send(results)
      
           } 
        })
        })
      //所有反馈查询
      app.post('/allfeedback',(req,res)=>{
        let dbstr = 'select * from feedback'
        db.query(dbstr,(err,results)=>{
            if(err){
              return  res.send('出错了')
            }
            return res.send(results)
        })
        })
    //客户反馈插入
    app.post('/serviceret',(req,res)=>{
      let usermes = req.body
      let dbstr = 'update feedback set servicereturn= ? where id = ?'
      db.query(dbstr,[usermes.servicereturn,usermes.id],(err,results)=>{
          if(err){
            return  res.send('出错了')
          }
          return  res.send('成功')
      })
      })
      //客户反馈删除
      app.post('/deletefeedback',(req,res)=>{
        let usermes = req.body
        let dbstr = 'delete from feedback  where id = ?'
        db.query(dbstr,[usermes.id],(err,results)=>{
            if(err){
              return  res.send('出错了')
            }
            return  res.send('删除成功')
        })
        })
        //用户反馈添加提交
        app.post('/addfeedback',(req,res)=>{
          let usermes = req.body
          let dbstr = 'INSERT INTO addfeedback (id,addtofeedback,usernum) value(?,?,?)'
          db.query(dbstr,[usermes.id,usermes.addtofeedback,usermes.usernum],(err,results)=>{
            if(err){
              return console.log(err.message)
            }
            if(results.affectedRows === 1){
              return res.send('反馈提交成功')
            }
          })
        })
        //用户反馈查询
        app.post('/searchaddfeedback',(req,res)=>{
          let data = req.body
          let dbstr = 'select * from addfeedback where id=?'
          db.query(dbstr,data.id,(err,results)=>{
              if(err){
                return  res.send('出错了')
              }
             if(results.length === 0){ 
              return res.send('未查询到反馈记录')
        
             }else{   
              return res.send(results)
        
             }
            
          })
          })
        app.post('/server1',(req,res)=>{
     let num = Math.floor(Math.random()*10+1)
          return res.send([num])          
          })

app.listen(5000,()=>{
    console.log('http://127.0.0.1:5000')
})