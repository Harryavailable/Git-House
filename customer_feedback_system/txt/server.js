const express = require('express')
const cors = require('cors')
const history  = require('connect-history-api-fallback')
const app = express()

app.use(cors());
app.use(history())
app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/get',(req,res)=>{
res.send({
name:"摆烂王",
title:'啊对对对！！！'
})
})
app.listen(8081,()=>{
    console.log('http://127.0.0.1:8081')
})