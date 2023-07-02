const Patient =  require('../models/patient');
const Doctor = require('../models/doctor');
const Report = require('../models/report');


// create patient for authorized doctor//

module.exports.create = async (req,res)=>{
    try{
    
        let patient = await Patient.findOne({phone:req.body.phone});
        if(!patient){
            patient = await Patient.create({
                name:req.body.name,
                phone:req.body.phone
            });

        }
        return res.status(200).json({
            message:"Patient Registered now",
            patient:patient._id,
        })
    }
    catch(err){
        console.log("error is occured",err);
        return res.status(401).json({
            message:"error is occured",
        })
    }
}


// create report for the patient//
module.exports.createReport = async function(req,res){
    try{
     
        var patient = await Patient.findById(req.params.id);
        if(patient){
            var reportdata = {
                doctor:req.body.doctor,
                patient:req.params.id,
                status:req.body.status,
                date:req.body.date,
            };
            var report = await Report.create(reportdata);
            patient.reports.push(report);
            patient.save();
            return res.status(200).json({
                message:"Patient report successfully created",
            });
        }else{
            return res.status(409).json({
                message:"Patient registration unsuccessful",
            });
        }
    }
    catch(err){
        console.log("error is occured",err);
        return res.status(500).json({
            message:"error is occured"
        });
    }
};

//create all the report//
module.exports.allReports = async function(req,res){
    try{
     var patient = await Patient.findById(req.params.id).populate({
        path:"reports",
        populate:{
            path:"doctor",select:"name _id"
        },
     });
     if(patient){
        return res.status(200).json({
            message:"patient report",
            reports:patient.reports
        })
     }
     else{
        return res.status(409).json({
            meassage:"patient not registered",
        });
     }
    }
    catch(err){
        console.log("error is occured",err);
        return res.status(500).json({
            message:"Server error",
        });
    }
};

