const express =require('express')
const userRoutes=express.Router()
const {register,login,updateUser,removeUser,getAllUser}=require('../controller/userController')
const {auth}=require('../midelware/userAuthen')
const {registerValidation,loginValidation,validation}=require('../midelware/middelValidation')
//http://localhost:5003/auth/register
userRoutes.post('/register',registerValidation,validation,register)

//http://localhost:5003/auth/login
userRoutes.post('/login',loginValidation,validation,login)

//http://localhost:5003/auth/moncompte
userRoutes.get('/moncompte',auth,(req,res)=>{
    res.send(req.user)
})
//http://localhost:5003/auth/getAll
userRoutes.get('/getAll',getAllUser)

// partie update profil user 
//http://localhost:5003/auth/updateprofil/:id
userRoutes.put('/updateprofil/:id',updateUser)

//partie delete
//http://localhost:5003/auth/deletprofil/:id
userRoutes.delete('/deletprofil/:id',auth,removeUser)



module.exports=userRoutes