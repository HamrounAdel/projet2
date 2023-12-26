const  express =require('express');
const app =express();
const port = process.env.PORT || 5003
const cors = require('cors')

const connectdb = require('./config/db')
const rdvRoutes = require('./routes/RDVRoute');
const userRoutes = require('./routes/userRoute');
const doctorRoute =require('./routes/doctorRoute')
require('dotenv').config()
app.use(cors())
app.use(express.json());
//connecter sur database
connectdb();

//les paths
app.use('/auth',userRoutes);
app.use('/RDV',rdvRoutes);
app.use('/doctor',doctorRoute);



app.listen(port,err=>(err)?
console.log(err):console.log(`this port is=>${port}`));