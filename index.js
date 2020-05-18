// Root file 
// import express  with common js modules 
const express = require('express');
// Passport for authentication
const passport = require('passport');
// GoogleStrategy for authetication with google
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Express application
const app = express(); 


// Use passport GoogleStrategy 
passport.use(new GoogleStrategy());





// Set port with Environment Variables 
const PORT = process.env.PORT || 5000; 

// Node listens to app 5000 
app.listen(5000);
