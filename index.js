// Root file 
// import express  with common js modules 
const express = require('express');

// Express application
const app = express(); 

// route handler associated with the get method 
app.get('/', (req, res) => {
  res.send({hi: 'there'});
})

// Set port with Environment Variables 
const PORT = process.env.PORT || 5000; 

// Node listens to app 5000 
app.listen(5000);
