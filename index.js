
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
  (accessToken, refreshToken, profile, done) =>{
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile:', profile);
    }
));


// Ask User if they grant permission
// Redirection on Oauth Access with Route Handler 
// Pass in path and google ('type of Oauth strategy ') as parameters
// Scope: Access approved to get from google
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);


// On permisson resolve to the profile 
app.get('/auth/google/callback', passport.authenticate('google'));





// Set port with Environment Variables 
const PORT = process.env.PORT || 5000; 

// Node listens to app 5000 
app.listen(5000);
