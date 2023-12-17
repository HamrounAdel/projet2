const  mongoose  = require("mongoose");

const doctorSchema =new mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
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
  address:{
    type:String,
    required:true,
  },
  phone:{
    type:Number,
    required:true
   }, 

  specialite:{
    type:String,
    required: true
   },  
   experience: {
    type: String,
    required: true,
  },
  timings : {
    type: Array,
    required: true,
  },
  
  status: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  
 

})
module.exports= mongoose.model('doctors',doctorSchema)