var Doctors = require('../models/doctor');
var jwt = require('jsonwebtoken');

//registor a new doctor

module.exports.create = async function(req,res){
    try{
     var doctor = await Doctors.findOne({email:req.body.email});
     
     if(doctor){
      return res.status(200).json({
        message:'Already registered',
        data:{
            doctor:doctor
        }
      })

     }
     else{
        //create
        doctor = await Doctors.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        return res.status(200).json({
            message:'registered succeccfully',
            data:{
                doctor:doctor
            }
        });
     }

    }
    catch(err){
        console.log('error is occured',err);
        return res.status(401).json({
            message:'error is occured',
        })
    }

}


//sign in

module.exports.login = async function(req,res){
    try{
      var doctor = await Doctors.findOne({email:req.body.email});

      if(!doctor || doctor.password!= req.body.password){
        return res.status(422).json({
            message:"invalid username or password",
        });
      }
      
      return res.status(200).json({
        message:"login successfully",
        data:{
            token:jwt.sign(doctor.toJSON(),'secret',{expiresIn:'2000000'}),
        }
      })
    }
    catch(err){
      console.log(err);
      return res.status(401).json({
        message:'error is occured',
      })
    }
}


// module.exports.details = function(req,res) {

//   return res.send("hello");
// }