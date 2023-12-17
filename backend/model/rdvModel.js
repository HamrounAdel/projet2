const mongoose = require('mongoose');
const userSchema = require('./userModel')
const rdvSchema = new mongoose.Schema({
    // namePatient: {
    //     type: String,
    //     required: true,
    //   },
    //   nameDoctor: {
    //     type: String,
    //     required: true,
    //   },
      doctorInfo: {
        type: Object,
        required: false
      },
      userInfo: {
        type: Object,
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