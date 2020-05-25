const mongoose = require('mongoose');

const { Schema }  = mongoose;

// Every collection can have it's unique property. Mongoose needs to know ahead of time all unique properties we would have. 
// Schema would describe all different properties we would have


const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0}
})



// Create a new collection called users 
mongoose.model('users', userSchema)