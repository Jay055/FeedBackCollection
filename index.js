
// Root file 
// import express  with common js modules 
const express = require('express');
// passport validation 


const keys = require('./config/keys');
const mongoose = require('mongoose');
// Import Model Class User
require('./models/User');

require('./services/passport');
// The order of the require statement matters in Mongodb, we have to get the data first before using. 

mongoose.connect(keys.mongoURI);





// Express application
const app = express(); 

// Import AuthRoutes and call it with the app function., returns a function
require('./routes/authRoutes')(app);





// Set port with Environment Variables 
const PORT = process.env.PORT || 5000; 

// Node listens to app 5000 
app.listen(5000);


