import React from 'react';
import axios from 'axios';

import Recaptcha from 'react-google-invisible-recaptcha';
const recaptcha = new Recaptcha('6LczmEIUAAAAALhJlGFrEw3DWGXVKESz-jCr45de');

export default class AjaxRecaptchaForm extends React.Component {
    constructor(props) {
        super(props);
        // phase is either form-open, submitting, or submitted
        this.state = {
            'g-recaptcha-response': "", 
            phase: 'form-open',
            validators: [],
            fieldSetters: [],
            validationMessage: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onResolved = this.onResolved.bind(this);
        this.addValidator = this.addValidator.bind(this);
        this.addFields = this.addFields.bind(this);
    }
    addValidator(fieldValidity) {
        this.setState({validators: [fieldValidity, ...this.state.validators]});
    }
    addFields(fieldSetter) {
        this.setState({fieldSetters: [fieldSetter, ...this.state.fieldSetters]});        
    }
    render() {
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {validator: this.addValidator, setFields: this.addFields});
        });

        return (
            <div>
                { 'form-open'===this.state.phase &&
                    <div>
                        <div className="form-group">
                            {this.props.message} {this.props.validationMessage}
                        </div>
                        {children} 
                        <div className="form-group">
                            <button type="submit" className="btn form-button btn-default btn-white" id="form-contact-submit" onClick={this.onSubmit}>Contact Me</button>
                        </div>
                    </div>
                }

                { this.state.phase==='submitting' &&
                    <div className="form-group">
                        <p>Submitting contact request...</p>
                    </div>
                }

                { this.state.phase==='submitted' && 
                    <div className="form-group">
                        <p>Submitted request. I will be in contact shortly.</p>
                    </div>
                }
                <div className="form-group">
                    <Recaptcha  ref={ref => this.recaptcha = ref} 
                                sitekey = {this.props.sitekey}
                                onResolved = { this.onResolved } 
                                badge="inline" />
                </div>
                <div id="form-status" className="pull-left"></div>
            </div>
        )
    }
    onSubmit() {
        const {validators} = this.state;
        const valid = validators.reduce((previous, current) => previous&&current(), true);
        if (!valid) {
          this.recaptcha.reset();
        } else {
          this.recaptcha.execute();
       }
    }
    onResolved() {
        this.setState({phase: 'submitting'});
        const {fieldSetters} = this.state;
        var fields = fieldSetters.reduce((previous, fieldSetter) => {
            return Object.assign(previous, fieldSetter());
        }, {});
        Object.assign(fields, {'g-recaptcha-response': this.recaptcha.getResponse()});
        axios.post(`${window.location.protocol}://${window.location.hostname}:${window.location.port}/contact`, fields)
            .then((response) => {
                this.setState({phase: 'submitted'});
            }).catch((error) => {
                this.setState({
                    validationMessage: 'Something went wrong. Please try again.',
                    phase: 'form-open'
                });
            });
    }
}