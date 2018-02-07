import React from 'react';

import ContactForm from '../components/contact/ContactForm.jsx';
import AjaxRecaptchaForm from '../components/contact/AjaxRecaptchaForm.jsx';
import Heading from '../components/heading';
import Declaration from '../components/declaration';

import Layout from './Layout';

import EqualHeightRow from '../components/equalheight';

import content from '../data/contact.json';

export default class ContactPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {sitekey} = this.props;

        return (
            <Layout active={content.key}>
                <Heading title={content.title} />
                <Declaration    title={content.declaration.title}
                                text={content.declaration.text} />
                <EqualHeightRow>
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="box text-color-white equal-height">
                            <h3>Contact Form</h3>
                            <AjaxRecaptchaForm 
                                message="Please provide a phone number and/or email"
                                sitekey={sitekey}>
                                <ContactForm />
                            </AjaxRecaptchaForm>
                                        <div className="bg bg-color-default"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="box text-color-white equal-height">
                            <h3>Contact Details</h3>
                            <dl className="big">
                                <dt className="promoted"><i className="icon_phone"></i></dt>
                                <dd className="promoted"><a href="tel:07843 080 738">07843 080 738</a></dd>
                                <dt><i className="icon_mail"></i></dt>
                                <dd><a href="mailto:jenita@virtualassure.co.uk">jenita@virtualassure.co.uk</a></dd>
                            </dl>
                            <div className="bg bg-color-default-darker"></div>
                        </div>
                    </div>
                </EqualHeightRow>
                <div className="block">
                    <div className="bg"></div>
                </div>
            </Layout>
        )}
}