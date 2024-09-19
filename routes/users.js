const express = require("express");
const controller = require('../controllers/usercontroller')

const router = express.Router()



router.get('/',(req,res)=>{
    controller.home(req,res)
})
router.post('/add/user',(req,res)=>{

    controller.adduser(req,res)
   
})








module.exports= router

