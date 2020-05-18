// Root file 
// import express  with common js modules 
const express = require('express');
// Passport for authentication
const passport = require('passport');
// GoogleStrategy for authetication with google
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// import keys 
const keys = require('./config/keys');

// Express application
const app = express(); 


// Use passport GoogleStrategy with Oauth keys 
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret, 
  // Redirect location from google
  callbackURL: '/auth/google/callback'
},
  accessToken => {
    console.log(accessToken)
  }
));








// Set port with Environment Variables 
const PORT = process.env.PORT || 5000; 

// Node listens to app 5000 
app.listen(5000);
