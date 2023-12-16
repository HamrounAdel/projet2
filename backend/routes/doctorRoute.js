const express = require('express');
const doctorRoute = express.Router();

const { authdoct} = require('../midelware/doctorAuthent');
const {register,login,getAllDoctor,updateDoctor,removeDoctor}  =require('../controller/doctorController');
const {registerValidation,loginValidation,validation}=require('../midelware/middelValidation')
//http://localhost:5003/doctor/register
doctorRoute.post('/register',registerValidation,validation,register)

//http://localhost:5003/doctor/login
doctorRoute.post('/login',loginValidation,validation,login)

//http://localhost:5003/doctor/moncompte
doctorRoute.get('/moncompte' ,authdoct,(req,res)=>{
    res.send(req.doctor);
   
});
//http://localhost:5003/doctor/getAll
doctorRoute.get('/getAll',getAllDoctor)

// partie update profil user 
//http://localhost:5003/doctor/updateprofil/:id
doctorRoute.put('/updateprofil/:id',updateDoctor)

//partie delete
//http://localhost:5003/doctor/deletprofil/:id
 doctorRoute.delete('/deletprofil/:id',authdoct,removeDoctor)





 module.exports=doctorRoute




