const res = require('express/lib/response');
const passport = require('passport');//here passport is passport library , not our passport.js
//export to index.js by wrapping routes to an arrow function
module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google',{ //google translates to use google strategy
                scope: ['profile', 'email'] //profile,emali is internal defined scope by google
        })
    );
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => { 
       //logout is attached by passport
        req.logout();
        res.send(req.user);
    } );
    app.get('/api/current_user', (req, res) => { 
        //cookie session put cookie in res, passport get cookie from res, and deserialize
        res.send(req.user);
    } );
};
