var jwt = require('jsonwebtoken');
const userSchema = require('../model/userModel')
const doctorSchema = require('../model/doctorModel')


 exports.auth=async(req,res,next)=>{
     try{
      
     const token = req.header('Authorization')
     var decoder = jwt.verify(token,process.env.privatKey)
      if(!decoder){return res.status(404).json({msg:'token invalide'})}
     const user = await userSchema.findById(decoder.id)
     req.user = user
         next()
     }catch(err){
       console.log(err)
     }
 }
 