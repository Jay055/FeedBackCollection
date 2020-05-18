// Passport for authentication
const passport = require('passport');
// GoogleStrategy for authetication with google
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// import keys 
const keys = require('../config/keys');



// Use passport GoogleStrategy with Oauth keys 
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret, 
  // Redirect location from google
  callbackURL: '/auth/google/callback'
},
  (accessToken, refreshToken, profile, done) =>{
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile:', profile);
    }
));
