const mongoose = require('mongoose');

const rdvSchema = new mongoose.Schema({
   
      doctorInfo: {
        type: String,
        required: false,
      },
      userInfo: {
        type: String,
        required: false,
      },
      date: {
        type: Date,
        required: false,
      },
      time: {
        type: String,
        required: false,
      },
      status: {
        type: String,
        required: false,
        default: "pending",
      },
})

module.exports = mongoose.model('RDVs',rdvSchema)