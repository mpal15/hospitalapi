const Report = require('../models/report');
//status of patients
module.exports.status = async function(req,res){

    try{
   var report = await Report.find({status:req.params.status})
   .populate({
    path:"patient",
    select:"name phone",
   }) 
   .populate({
    path:"doctor",
    select:"name _id",
   });
   if(report && report.length!==0){
    return res.status(200).json({
        message:"list all report of patient status",
        reports:report,
    });
   }else{
    return res.status(409).json({
        message:"there is no report with status",
    });
   }
   
    }
    catch(err){
        console.log("error is occured",err);
        return res.status(500).json({
            message:"server error",
        });
    }
};
