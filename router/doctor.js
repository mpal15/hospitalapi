const express= require('express');
//const auth = require('../config/auth');

const router = express.Router();

const doctors_controller = require('../controller/doctors_controller');

router.post('/register',doctors_controller.create);
router.post('/login',doctors_controller.login);
//router.get('/user/:token',auth.Auth,doctors_controller.details);

module.exports = router;