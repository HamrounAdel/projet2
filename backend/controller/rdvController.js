const express = require('express')
const rdvSchema = require('../model/rdvModel')
const doctorSchema = require('../model/doctorModel') 
const userSchema =require('../model/userModel')
// add new rdv
exports.addRDV = async (req, res) => {
  const { userId, doctorId, dateRdv ,user,doctor} = req.body;
//  const doctor =await doctorSchema.findById(userId)
//  const user = await userSchema.findById(doctorId)
  try {
      const newRdv = new rdvSchema({
          userId,
          doctorId,
          user,
          doctor,
          dateRdv,
          status:"Pending"
      });

      await newRdv.save();
      res.json(newRdv);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

//get all rdv
exports.getAllRdvs = async (req, res) => {
  try {
    const rdvs = await rdvSchema.find();
    res.json({msg:"les rdvs ",rdvs});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//get rdv  by user
exports.getUserRDV = async (req, res) => {
  try {
    
      const rdv = await rdvSchema.find({ userId: req.params.userId });
      res.json(rdv);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

//get rdv  by doctor
exports.getDoctorRDV = async (req, res) => {
  try {
      const rdv = await rdvSchema.find({ doctorId: req.params.doctorId });
      res.json(rdv);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

//get rdv byId
exports.getRdvById = async (req, res) => {
  try {
    const {  rdvId } = req.params;
    const reservation = await rdvSchema.findOne({ _id: rdvId});

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// delete rdv
exports.deletRDV = async (req, res) => {
  try {
      await rdvSchema.findOneAndDelete({ _id: req.params.rdvId});
      res.json({ message: 'Reservation deleted successfully' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

//update rdv
exports.updateRDV = async (req, res) => {
  try {
      const updatedRdv = await rdvSchema.findOneAndUpdate(
          { _id: req.params.id},
          req.body,
          { new: true, useFindAndModify: false }
      );

      if (!updatedRdv) {
          return res.status(404).send({ message: 'Reservation not found' });
      }

      res.send(updatedRdv);
  } catch (error) {
      res.status(500).send(error);
  }
};

