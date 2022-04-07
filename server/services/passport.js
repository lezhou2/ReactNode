const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys=require('../config/keys');

//with 1 argument , means to fetch from db
//2 ways to pass data between files: 1. export+require 2. the following 
//way because if we use way 1, in testing environment, it will confuse mongo db, mongo db will
//think we are loading data mutiple times
const User = mongoose.model('users');

//user.id is not googleId, it is mongo primary key, user.id will be passed to cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then( user => {
        done(null,user);
    })
});
/*
passport.use(new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => { 
       // console.log('accessToken',accessToken);
       // console.log('refreshToken',refreshToken);
       // console.log('profile,',profile);
        
       //findOne is asynchronous call returns a promise, returns existingUser(mongo instance)
       User.findOne({googleId: profile.id})
       .then((existingUser) =>  {
           if(existingUser){
                //2 arguments: error, userrecord
                done(null,existingUser);
           }
           else {
            new User({googleId: profile.id})
            .save()
            .then( user => done(null,user));
           }
       });     
    }
));
*/

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })
            if (existingUser) {
              // we already have a record with the given profile ID
              return done(null, existingUser);
            } 
              // we don't have a user record with this ID, make a new record!
            const user = await new User({ googleId: profile.id }).save()
             done(null, user);
                
      }
    )
  );
  