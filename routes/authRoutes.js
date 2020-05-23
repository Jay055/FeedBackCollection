const passport = require('passport');



// Exporting a function 
module.exports = (app) => {


    // Ask User if they grant permission
    // Redirection on Oauth Access with Route Handler 
    // Pass in path and google ('type of Oauth strategy ') as parameters
    // Scope: Access approved to get from google
    app.get(
      '/auth/google',
      passport.authenticate('google', {
        scope: ['profile', 'email']
      })
    );


    // On permisson resolve to the profile 
    app.get('/auth/google/callback', passport.authenticate('google'));

      // get request to return user 
      app.get('/api/current_user', (req, res) => {
        res.send(req.user);
      })

      // Logout User
      app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user)
      })



};

