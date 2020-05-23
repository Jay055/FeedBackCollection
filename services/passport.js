// Passport for authentication
const passport = require('passport');
// GoogleStrategy for authetication with google
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// 
const mongoose = require('mongoose');
// import keys 
const keys = require('../config/keys');




// Fetch Users from mongoose model
const User = mongoose.model('users');

// Use passport GoogleStrategy with Oauth keys 
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret, 
  // Redirect location from google
  callbackURL: '/auth/google/callback'
},
  (accessToken, refreshToken, profile, done) =>{
  //  Create a new user with the Model Class. ProfileId is gotten from access token. Create profile after Oauthentication
  //   console.log('profile:', profile);
    new User({ googleId: profile.id}).save();

    }
));
