// Send Grid Mailer, initial set up was done in the sendGridTest folder

const sendgrid = require('sendgrid'); 
const helper = sendgrid.mail; 
const keys = require('../config/keys');



class Mailer extends helper.Mail {

}


module.exports = Mailer; 