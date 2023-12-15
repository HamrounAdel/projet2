const express = require('express');
const rdvRoutes = express.Router();
const {addRDV,getRDV,deletRDV}=require('../controller/rdvController')


//http://localhost:5003/RDV/addRDV
rdvRoutes.post('/addRDV',addRDV)

//http://localhost:5003/RDV/getRDV
rdvRoutes.get('/getRDV',getRDV)

//http://localhost:5003/RDV/deletRDV
rdvRoutes.delete('/deletRDV',deletRDV)

module.exports = rdvRoutes