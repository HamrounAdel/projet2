var jwt = require('jsonwebtoken');

const doctorSchema = require('../model/doctorModel')


exports.authdoct=async(req,res,next)=>{
    try{
     
    const token = req.header('Authorization')
    var decoder = jwt.verify(token,process.env.privatKey)
     if(!decoder){return res.status(404).json({msg:'token invalide'})}
    const doctor = await doctorSchema.findById(decoder.id)
    req.doctor = doctor
        next()
    }catch(err){
      console.log(err)
    }
  }