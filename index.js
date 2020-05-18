
// Root file 
// import express  with common js modules 
const express = require('express');
// passport validation 
require('./services/passport');


// Express application
const app = express(); 

// Import AuthRoutes and call it with the app function., returns a function
require('./routes/authRoutes')(app);
// We can also use router.get  for this . 




// Set port with Environment Variables 
const PORT = process.env.PORT || 5000; 

// Node listens to app 5000 
app.listen(5000);


