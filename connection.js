const mongoose = require("mongoose")

async function connection() {
    try{
      let connect = mongoose.connect("mongodb://localhost:27017/projectdata");   
      console.log("connection created")

    }catch(err){
        console.log("connection failed",err)
    }
}

module.exports = connection