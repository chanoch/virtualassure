var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');

var Recaptcha = require('../components/RecaptchaMiddleware');
var recaptcha = new Recaptcha('6LczmEIUAAAAALhJlGFrEw3DWGXVKESz-jCr45de', process.env.recaptcha_secret);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

router.post('/contact', recaptcha.middleware.verify, function(req, res, next) {
    var recaptcha_success = true;
    if(req.recaptcha.error) {
        recaptcha_success = false;
    }

    var contact_email = req.body.email,
                 from = contact_email ? contact_email : 'jenita@virtualassure.co.uk';

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        from,
        to: 'jenita@virtualassure.co.uk',
        subject: `Contact request (recaptcha: ${recaptcha_success})`,
        text: `${req.body.message} phone: ${req.body.phone}`,
        html: `
            <h3>Contact request from virtualassure.co.uk</h3>
            <ul>
                <li>email address: ${from}</li>
                <li>phone number: ${req.body.phone}</li>
            </ul>
            <p>${req.body.message}</p>`,
    };
    sgMail.send(msg);
    res.send('{success: true}');
});

module.exports = router;
