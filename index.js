
// Root file 
// import express  with common js modules 
const express = require('express');
// passport validation 
require('./services/passport');

const keys = require('./config/keys');
const mongoose = require('mongoose');

mongoose.connect(keys.mongoURI);


// Express application
const app = express(); 

// Import AuthRoutes and call it with the app function., returns a function
require('./routes/authRoutes')(app);
// Import Model Class User
require('./models/User');




// Set port with Environment Variables 
const PORT = process.env.PORT || 5000; 

// Node listens to app 5000 
app.listen(5000);


