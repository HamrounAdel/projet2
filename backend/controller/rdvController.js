const express = require('express')
const rdvSchema = require('../model/rdvModel')
const doctorShema =require('../model/doctorModel')
const userShema =require('../model/userModel')


exports.getRDV = async(req,res)=>{
  try{
    const newRDV = await rdvSchema.find();
    res.json({msg:"consulter les RDV ",newRDV});
  } catch(error){
    console.log(error)
  }

}


exports.addRDV = async(req,res)=>{
  try {
    const newRDV = new rdvSchema(req.body);
    await newRDV.save();
    res.json({msg:"add new RDV",newRDV});
        
      } catch (error) {
        console.error(error);
        
      }
}

exports.deletRDV = async (req, res) => {
  try {
    const removeRDV = await rdvSchema.findByIdAndDelete(req.params.id);
    if (!removeRDV) {
      return res.status(404).json({ error: 'Rendez-vous introuvable' });
    }
    res.json({ message: 'Rendez-vous supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




///fghjklm

exports.AjoutRdv= async (req, res) => {
  try {
    const user = await userShema.findOne({_id: req.body.userId});
    const doctor = await doctorShema.findOne({_id: req.body.doctorId});
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    // Create a new appointment
    const appointment = new rdvSchema({
      doctorInfo: doctor,
      userInfo:user,
      date,
      time,
      status: 'pending',
    });

    // Save the appointment
    const savedAppointment = await appointment.save();

    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}





