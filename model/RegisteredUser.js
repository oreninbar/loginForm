const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    useremail:String,
    userpassword:String
})

const User=mongoose.model("user",userSchema)

module.exports=User