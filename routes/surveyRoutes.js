// Create and send mail 
// import lodash helper 
const _ = require('lodash');

const {Path} = require('path-parser');
  // integrated with node 
const { URL } = require('url');

const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

// Mailer for mailing 
const Mailer = require('../services/Mailer');
// Get Survey Template 
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => { 

    // After voting thanks 
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('We appreciate your feedback. Thank you.');
  });



    // Webhooks, extract data from URL 
  app.post('/api/surveys/webhooks', (req, res)=>{
    const events = req.body.map(event => {
  //  const events = _.map(req.body, event => {
    const pathname =  new URL(event.url).pathname; 
    const p = new Path('/api/surveys/:surveyId/:choice');
    const match = p.test(pathname);
    if(match) {
      return { email: event.email, surveyId: match.surveyId, choice: match.choice}; 
    }
    });
    // Remove undefined elements with Lodash 
    const compactEvents = _.compact(events);
      //Save unique records with lodash 
    const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId');

    console.log(uniqueEvents)
    res.send({})

  })



  // 

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => { 
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey ({
      title, 
      subject, 
      body, 
      recipients: recipients.split(',').map(email => ({email })),
            //  automatically avaliable through mongo
      _user: req.user.id,
      dateSent: Date.now()
    })

      //  Send Email 
      //Create new Mailer Class wit the survey and email template(body of the email, surveyTemplate.js)
      
      const mailer = new Mailer(survey, surveyTemplate(survey)); 
        // Deduct credit after sending
    try{
     await mailer.send(); 
     await survey.save(); 
     req.user.credits -= .5;
     const user = await req.user.save();

     res.send(user);
      } catch(err) {
        res.status(422).send(err)
      }


   });
};

