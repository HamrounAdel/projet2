var jwt = require('jsonwebtoken');
const userSchema = require('../model/userModel')


exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};
// exports.auth=async(req,res,next)=>{
//     try{
      
//      const token = req.header('Authorization')
//      var decoder = jwt.verify(token,process.env.privatKey)
//      if(!decoder){return res.status(404).json({msg:'token invalide'})}
//      const user = await userSchema.findById(decoder.id)
//      req.user = user
//         next()
//     }catch(err){
//       console.log(err)
//     }
// }