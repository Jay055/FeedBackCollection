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
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret, 
  // Redirect location from google
  callbackURL: '/auth/google/callback'
},
  (accessToken, refreshToken, profile, done) =>{
    // Avoid duplicate registration
    // Whenever we use our data base we are intiating an Async function. 
    User.findOne({ googleId: profile.id })
    .then((existingUser)=>{
      if(existingUser){
        // we already have a record with the given profile ID
        // done(error object, userObject)
         done(null, existingUser);
      } else{
        // No user found with ID, make a new ID 
        new User({ googleId: profile.id})
        .save()
          .then(user => done(null, user));
      }
    })
  //  Create a new user with the Model Class. ProfileId is gotten from access token. Create profile after Oauthentication
  //   console.log('profile:', profile);
   
    }
));


/*
Passport Identification Token: 
- We would use the serielise user function to generate the identifiying piece of info
- Set-Cookie '    '
- On client reques passport deserializes the user and accepts the user
*/