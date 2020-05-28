// Send Grid Mailer, initial set up was done in the sendGridTest folder

// Gotten from sendGrid documentation. 

const sendgrid = require('sendgrid'); 
const helper = sendgrid.mail; 
const keys = require('../config/keys');




class Mailer extends helper.Mail {
  // surveyRoutes.js mailer class
  constructor({subject, recipients}, content) {
    // call the parent class
    super();

    this.sgApi = sendgrid(keys.sendGridApiKey);
    // helper.Email/body (from sendGrid library correctly format)
    this.from_email = new helper.Email(keys.email);
    this.subject == subject; 
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    // Adding content with sendGrid 
    this.addContent(this.body);
    // enable unique tracking of emial  with click tracking
    this.addClickTracking();
    // helper function
    this.addRecipients(); 

  }
  // Extract Emails from the object 
  formatAddresses(recipients) {
    return recipients.map(({email })=> {
      return new helper.Email(email)
    })
    
  }
  // Click tracking helper function for tracking of unique mails , gotton from SendGrid Documentation 
  addClickTracking(){
    const trackingSettings = new helper.TrackingSettings();
    const addClickTracking = new helper.ClickTracking(true, true); 


    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  // AddRecipients 
  addRecipients() { 
    const personalize = new helper.Personalization(); 
    this.recipients.forEach(recipient => { 
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize)
  }

  async send() { 
    const request = this.sgApi.emptyRequest({
      method: 'POST', 
      path: './v3/mail/send',
      body: this.toJSON()
    });

    this.sgApi.API(request);
    return  response;
  }

}


module.exports = Mailer; 