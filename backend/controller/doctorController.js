const doctorSchema = require('../model/doctorModel')
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')


exports.register=async(req,res)=>{
    try{
     const {name,lastName,email,password}= req.body
     const testuser = await doctorSchema.findOne({email})
     if(testuser){return res.status(404).json({msg:'cette doctor est deja inscrit'})}


     const newDoctor = await new doctorSchema(req.body) 
     const saltRounds = 10;
     const salt = bcrypt.genSaltSync(saltRounds);
     const hash = bcrypt.hashSync(password, salt);
 
     newDoctor.password = hash
     newDoctor.save()    
    res.status(200).json({msg:'added the dotor' ,newDoctor})
    
    } catch(err){
        console.log(err)
        res.status(400).jsonc({msg:'there is something wrong'})
      }
}

exports.login=async(req,res)=>{
    try{
        const {email,password}= req.body

        const testuser = await doctorSchema.findOne({email})
        if(!testuser){return res.status(404).json({msg:'email introuvable'})}

        const testpass = await bcrypt.compare(password,testuser.password)
        if(!testpass){return res.status(404).json({msg:'password est eronée'}) }

        const payload={ id: testuser._id}
        var token = jwt.sign(payload, process.env.privatKey)
        res.status(200).send({msg:'welcom ',token,testuser})

    } catch(err){
        console.log(err)
    }
}

exports.updateDoctor = async (req, res) => {
    const { id } = req.params;
    try {
       if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
       }
      const updatedDoctor = await doctorSchema.findByIdAndUpdate(id, {
        $set: { ...req.body },
      });
      if (!updatedDoctor) {
        return res.status(400).json({ msg: "User not exist" });
      }
      return res.status(200).send({ msg: "User updated" ,updatedDoctor});
    } catch (error) {
      console.log(err)
      return res.status(500).send({ err: err});
    }
  }
  exports.removeDoctor = async(req,res)=>{
   try{
    const doctor = await doctorSchema.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'User introuvable' });
    }
    res.json({ message: 'User supprimé avec succès' });
   }catch(err){
      console.log(err)
   }
  }

   exports.getAllDoctor = async (req, res) => {
     try {
       const doctors = await doctorSchema.find();
       res.json({msg:"les users ",doctors});
    } catch (error) {
       res.status(500).json({ error: error.message });
     }
   }

  exports.getDoctorById = async (req, res) => {
    try {
      const doctor = await doctorSchema.findById(req.params.id);
      if (!doctor) {
        return res.status(404).json({ error: 'User introuvable' });
      }
      res.json(doctor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



   