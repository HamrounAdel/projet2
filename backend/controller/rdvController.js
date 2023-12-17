const express = require('express')
const rdvSchema = require('../model/rdvModel')
const doctorShema =require('../model/doctorModel')

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

exports.getByDoctor=async (req, res) => {
  try {
    const doctor = await doctorShema.findOne({ userId: req.body.userId });
    const appointments = await rdvSchema.find({ doctorId: doctor._id });
    res.status(200).send({
      message: "Appointments fetched successfully",
      success: true,
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error fetching appointments",
      success: false,
      error,
    });
  }
}



exports . getMyAppointment = async (req, res) => {
  try {
    // step-1: retrieve appointments from booking
    const bookings = await rdvSchema.find({ user: req.userId });
    // step-2: extract doctor ids from appointments
    const doctorIds = bookings.map((el) => el.doctor.id);
    // step-3: retrieve doctors using doctor ids
    const doctors = await doctorShema.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );
    res.status(200).json({
      success: true,
      message: "Appointments are getting",
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};