const Student = require("../models/User")


async  function  home(req,res){
    res.send("<div> <h1>contact form</h1>   <br> <form  action='/add/user'  method='post' >  <label  >Name : </label>  <input type='text' name='Name' required>  <br> <label>password</label> <input type='password' name='Password' required >   <br> <input type='submit'> </form>                </div>")




}

async function adduser(req,res) {
    try{
        console.log("req.body",req.body)
        console.log("req.body.id   : ",req.body.ID)
        

        let student = new Student(req.body)
        await student.save()
     
        res.end("data added succesfully ")

    }catch(err){
        console.log(err)
    }
}





module.exports={adduser,home}