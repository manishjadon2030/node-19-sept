const mongoose = require("mongoose")
const Schema = mongoose.Schema;



const UserSchema = new Schema({
    Name : {type : String},
    Password : {type : Number}
})


module.exports = mongoose.model('User',UserSchema)