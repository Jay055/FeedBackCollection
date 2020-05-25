
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
const bodyParser = require('body-parser');
// Import Model Class User
require('./models/User');
require('./services/passport');
require('./models/Survey')
// The order of the require statement matters in Mongodb, we have to get the data first before using. 





mongoose.connect(keys.mongoURI, {
    // Pass parameters to avoid depreciation warning
  useNewUrlParser: true,
   useUnifiedTopology: true 

})





          // Express application
const app = express(); 

          //Initialize Cookie Authentication with 3 middlewares 
          // Middlewares do preprocessing of our requests before they are sent to our route handlles 

    // initialize bodyParser middle ware 
  app.use(bodyParser.json())
  
  
  app.use(
  cookieSession({
      //Cookie expiration
    maxAge: 30 * 24 * 60 * 60 * 1000,
      // encrypty cookie
    keys: [keys.cookieKey]  

        // passport get data from res.session and deserialzies data 
  })
)

// Initialize Passport to use Cookies for authentication
app.use(passport.initialize());
app.use(passport.session());

// Import AuthRoutes and call it with the app function., returns a function
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


// SetUp express Server for Production mode 
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets (main.js, main.css), routes we don't know we search first or all in client/build 
  app.use(express.static('client/build'));

  // Express will serve up the index.html file if it doesn't locate the route,
  const path = require('path'); 
  app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });


}




// Set port with Environment Variables 
const PORT = process.env.PORT || 5000; 

// Node listens to PORT (!5000 anymore) 
app.listen(PORT);


