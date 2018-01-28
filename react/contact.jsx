import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './contact/ContactForm.jsx';
import AjaxRecaptchaForm from './contact/AjaxRecaptchaForm.jsx';

ReactDOM.render(
    <AjaxRecaptchaForm 
        message="Please provide a phone number and/or email"
        sitekey="6LczmEIUAAAAALhJlGFrEw3DWGXVKESz-jCr45de">
        <ContactForm />
    </AjaxRecaptchaForm>, 
    document.getElementById('ContactForm'));