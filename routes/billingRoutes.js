const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
  // middleware for authetication 
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  // create stripe charge, authenticate  
  app.post('/api/stripe',requireLogin, async (req, res) => {

    if(!req.user) {
      return res.status(401).send({error: 'You must log in'})
    }
      // req.body is coming from the body-parser, 
    // console.log(req.body)
      // from stripe documentation
   const charge = await  stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    })
    
    // credit current user with 5 credits after charge 
    req.user.credits +=5 ; 
    const user =  await req.user.save();

      // respond with the user 
    res.send(user)


  })
}


// Request does not parse our data itself 

// npm install --save stripe
//https://stripe.com/docs/api, https://www.npmjs.com/package/stripe

