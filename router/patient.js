const express = require('express');
const router =express.Router();
const patientController = require('../controller/patient_controller');
const patient = require('../models/patient');
const passport = require('passport');


router.post('/register',passport.authenticate('jwt',{session:false}),patientController.create);

router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),patientController.allReports);

router.post('/:id/create-report',passport.authenticate('jwt',{session:false}),patientController.createReport);

module.exports = router;