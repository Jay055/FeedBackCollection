// npm install --save stripe
//https://stripe.com/docs/api, https://www.npmjs.com/package/stripe



const keys = require('../config/keys')

const stripe = require('stripe')(keys.stripeSecretKey);;

module.exports = app => {
  // create stripe charge 
  app.post('/api/stripe', async (req, res) => {
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