const mongoose = require('mongoose');

const rdvSchema = new mongoose.Schema({
   
  userId: {  
   type: mongoose.Types.ObjectId,
      ref: 'users', 
      required: false},
  doctorId: {  
     type: mongoose.Types.ObjectId, 
     ref: 'doctors',
      required: false },
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
        type: Boolean,
        default: false,
      },
})

module.exports = mongoose.model('RDVs',rdvSchema)