const express = require('express');
const router = express.Router();
const Home = require('../controller/home');

router.get('/',Home.home);


router.use('/doctors',require('./doctor'));
router.use('/patient',require('./patient'));
router.use('/report',require('./report'));


module.exports = router;