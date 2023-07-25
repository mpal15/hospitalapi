var express = require('express');
require('./config/mongoose');

var app = express();

var port = 8000 || process.env.port;
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');



app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());
//import or use express route
app.use('/',require('./router/index'));

app.get('/',(req,res)=>{
    res.send('hello world:');
})
app.listen(port,()=>{
    console.log('server is running');
});
