const mongoose = require('mongoose');

const rdvSchema = new mongoose.Schema({
   
  userId: {
    type: String,
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  doctorInfo: {
    type: Object,
    required: true,
  },
  userInfo: {
    type: Object,
    required: true,
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