const express = require('express')
const rdvSchema = require('../model/rdvModel')


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