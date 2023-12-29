const mongoose = require('mongoose');

const rdvSchema = new mongoose.Schema({
   
  userId: {  
   type: mongoose.Types.ObjectId,
      ref: 'users', 
      required: true},
  doctorId: {  
     type: mongoose.Types.ObjectId, 
     ref: 'doctors',
      required: true },
 doctor:{
  type:Object,
  required:false
 },
 user:{
  type:String,
  required:false
},
      dateRdv: {
        type: String,
        required: true,
      },
    
      status: {
        type: String,
        default: "Pending",
      },
})

module.exports = mongoose.model('RDVs',rdvSchema)