const express = require('express');
const rdvRoutes = express.Router();
const {addRDV,getDoctorRDV , updateRDV,getUserRDV,deletRDV,getRdvById, getAllRdvs}=require('../controller/rdvController')


//http://localhost:5003/RDV/addRDV
rdvRoutes.post('/addRDV',addRDV)

//http://localhost:5003/RDV/getAll
rdvRoutes.get('/getAll',getAllRdvs )

//http://localhost:5003/RDV/getbyUser/:userId
rdvRoutes.get('/getbyUser/:userId', getUserRDV);

//http://localhost:5003/RDV/getbyDoctor/:doctorId
rdvRoutes.get('/getbyDoctor/:doctorId', getDoctorRDV);

//http://localhost:5003/RDV/deletrdv/:idRdv
rdvRoutes.delete('/deletrdv/:idRdv/', deletRDV);

//http://localhost:5003/RDV/updatrdv/:idRdv
rdvRoutes.patch('/updatrdv/:idRdv', updateRDV);

//http://localhost:5003/RDV/getunique/:idRdv
rdvRoutes.get('/getunique/:idRdv',getRdvById)



module.exports = rdvRoutes