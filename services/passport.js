// Passport for authentication
const passport = require('passport');
// GoogleStrategy for authetication with google
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// 
const mongoose = require('mongoose');
// import keys 
const keys = require('../config/keys');




// Fetch Users from mongoose model
const User = mongoose.model('users');

// Define serializeUser (unique identification for user), user parameter would be serialized 
passport.serializeUser((user, done) => {
    // user.id(unique identifier from mongo _id), we use this over google profile.id since all users might not use google auth
    
  done(null, user.id);
})


// DeserializeUser (take the Id and turn back to a User model)
passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  })
});




// Use passport GoogleStrategy with Oauth keys 
passport.use(
  new GoogleStrategy(
{
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret, 
  // Redirect location from google
  callbackURL: '/auth/google/callback',
  // Allow google strategy trust Heroku's proxy (return https and not http)
  proxy: true
  
},
  async (accessToken, refreshToken, profile, done) =>{
   
    const  existingUser = await User.findOne({ googleId: profile.id })
    
      if(existingUser){
       
        return  done(null, existingUser);
      } 
        // No user found with ID, make a new ID 
        const user = await new User({ googleId: profile.id})
        .save();
           done(null, user);
  
    }
    ));
    



  //  Create a new user with the Model Class. ProfileId is gotten from access token. Create profile after Oauthentication
  //   console.log('profile:', profile);
   
 

















/*

LOGOUT  
Create a log out route in authRoutes.js


*/
