const express = require("express")
const connect = require("./connection")
const router = require('./routes/users')
const bodyparser= require('body-parser')
const bodyParser = require("body-parser")
const app = express()


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

connect()

app.use(router)






app.listen(3000,(err)=>{
    if(err){
        console.log("server fail")
    }else{
        console.log("server is running on 3000")
    }
})