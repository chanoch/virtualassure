var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

router.get('/contact', function(req, res, next) {
    console.log(process.env.SENDGRID_API_KEY);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'chanoch@clearbrook.it',
        from: 'jenita@virtualassure.co.uk',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
   sgMail.send(msg);
});

module.exports = router;
