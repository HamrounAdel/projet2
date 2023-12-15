const mongoose =require('mongoose');
const connectdb= async()=>{
    try{
   await mongoose.connect('mongodb+srv://projet:ADEL29656789@cluster0.rtchi1h.mongodb.net/?retryWrites=true&w=majority')    
      console.log('Database connecting  ')
    }catch(err){
        console.log(err)
    }
}
module.exports=connectdb