const express = require('express');
const doctorRoute = express.Router();
const doctor =require('../model/doctorModel');
const rdv = require('../model/rdvModel');
const user =require('../model/userModel');
const {auth} = require('../midelware/middelAuthen');
const {register,login,getAllDoctor,updateDoctor,removeDoctor}  =require('../controller/doctorController');
const {registerValidation,loginValidation,validation}=require('../midelware/middelValidation')
//http://localhost:5003/doctor/register
doctorRoute.post('/register',registerValidation,validation,register)

//http://localhost:5003/doctor/login
doctorRoute.post('/login',loginValidation,validation,login)

//http://localhost:5003/doctor/moncompte
doctorRoute.get('/moncompte',auth,(req,res)=>{
    res.send(req.user)
})
//http://localhost:5003/doctor/getAll
doctorRoute.get('/getAll',getAllDoctor)

// partie update profil user 
//http://localhost:5003/doctor/updateprofil/:id
doctorRoute.put('/updateprofil/:id',updateDoctor)

//partie delete
//http://localhost:5003/auth/deletprofil/:id
doctorRoute.delete('/deletprofil/:id',auth,removeDoctor)

doctorRoute.post("/get-doctor-info-by-user-id", auth, async (req, res) => {
    try {
      const newdoctor = await doctor.findOne({ userId: req.body.userId });
      res.status(200).send({
        success: true,
        message: "Doctor info fetched successfully",
        data: newdoctor,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error getting doctor info", success: false, error });
    }
  });
  
  doctorRoute.post("/get-doctor-info-by-id", auth, async (req, res) => {
    try {
      const newdoctor = await doctor.findOne({ _id: req.body.doctorId });
      res.status(200).send({
        success: true,
        message: "Doctor info fetched successfully",
        data: newdoctor,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error getting doctor info", success: false, error });
    }
  });
  
  doctorRoute.post("/update-doctor-profile", auth, async (req, res) => {
    try {
      const newdoctor = await doctor.findOneAndUpdate(
        { userId: req.body.userId },
        req.body
      );
      res.status(200).send({
        success: true,
        message: "Doctor profile updated successfully",
        data: newdoctor,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error getting doctor info", success: false, error });
    }
  });
  
  doctorRoute.get("/get-appointments-by-doctor-id",auth, async (req, res) => {
      try {
        const newdoctor = await doctor.findOne({ userId: req.body.userId });
        const appointments = await rdv.find({ doctorId: doctor._id });
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
  );
  
  doctorRoute.post("/change-appointment-status", auth, async (req, res) => {
    try {
      const { appointmentId, status } = req.body;
      const appointment = await rdv.findByIdAndUpdate(appointmentId, {
        status,
      });
  
      const users = await user.findOne({ _id: appointment.userId });
      const unseenNotifications = users.unseenNotifications;
      unseenNotifications.push({
        type: "appointment-status-changed",
        message: `Your appointment status has been ${status}`,
        onClickPath: "/appointments",
      });
  
      await users.save();
  
      res.status(200).send({
        message: "Appointment status updated successfully",
        success: true
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error changing appointment status",
        success: false,
        error,
      });
    }
  });
  
  module.exports = doctorRoute;


