const express = require('express'); //import library
const mongoose = require('mongoose');
const keys = require('./config/keys')
const cookieSession = require('cookie-session');
const passport = require('passport');
//need to declare before passport, so in passport User model can be used
require('./models/User');
//const passportConfig= require('./services/passport');//since passport does not return anything, we can use following:
require('./services/passport');
//const authRoutes = require('./routes/authRoutes');  1


mongoose.connect(keys.mongoURI);
const app = express();
//telll express to use cookie
//following is a function
app.use(
    //call cookie session
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })   
);

//tell passport to use cookie, passport.serialize, passport.deserialize will be called
//aller: passoprt.serialize, cookie session put data in request, 
//retour: cookie session put data in res, passport get data, passport.deserialize
app.use(passport.initialize());
app.use(passport.session());

//authRoutes(app); 2
//below is equalvalent to 1+2
require('./routes/authRoutes')(app);

/*
app.get('/', (req,res) => { 
    res.send({bye: 'there'});
});
*/
//process.env is heroku environment variable
const PORT = process.env.PORT || 5000;
app.listen(PORT);