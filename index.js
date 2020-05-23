
// Root file 
// import express  with common js modules 
const express = require('express');
// passport validation 

const keys = require('./config/keys');
const mongoose = require('mongoose');

// Import cookieSession for serializing users 
const cookieSession = require('cookie-session');
// Request for passport to use cookie
const passport = require('passport');

// Import Model Class User
require('./models/User');

require('./services/passport');
// The order of the require statement matters in Mongodb, we have to get the data first before using. 

mongoose.connect(keys.mongoURI);





// Express application
const app = express(); 

//Initialize Cookie Authentication 
app.use(
  cookieSession({
      //Cookie expiration
    maxAge: 30 * 24 * 60 * 60 * 1000,
      // encrypty cookie
    keys: [keys.cookieKey]


  })
)

// Initialize Passport to use Cookies for authentication
app.use(passport.initialize());
app.use(passport.session());

// Import AuthRoutes and call it with the app function., returns a function
require('./routes/authRoutes')(app);





// Set port with Environment Variables 
const PORT = process.env.PORT || 5000; 

// Node listens to app 5000 
app.listen(5000);


