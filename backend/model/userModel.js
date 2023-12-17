const  mongoose  = require("mongoose");

const userSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:Number,
    required:true
   }, 
  
  role: {
    type: String,
    default: 'Patient'
  },
  seenNotifications: {
    type: Array,
    default: [],
  },
  unseenNotifications: {
    type: Array,
    default: [],
  },
  birthday:{
    type:String,
    required:true,
  },
 
 

})
module.exports= mongoose.model('users',userSchema)