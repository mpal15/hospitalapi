const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctor');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}


//----------JWT authentication Sradegy----------------//
passport.use(new JWTStrategy(opts, async function (jwtPayLoad, done) {
  try{
    var user = await Doctor.findById(jwtPayLoad._id);
    return done(null,user);
  }catch(err){

  
   console.log('Error in finding user from JWT'); 
   return; 
}

     
  

}));

module.exports = passport;