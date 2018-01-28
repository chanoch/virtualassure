import React from 'react';

export default class ContactForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "", nameValid: false,
            phone: "", phoneValid: true,
            email: "", emailValid: true,
            message: "", messageValid: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.isValid = this.isValid.bind(this);
        this.returnFields = this.returnFields.bind(this);
        if(this.props.validator) {
            this.props.validator(this.isValid);
        }
        this.props.setFields(this.returnFields);
    }
    returnFields() {
        return {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            message: this.state.message
        }
    }
    /**
     * After each update of a form input's value, check if the form is valid and
     * update both the field's value in state and the validity in the state.
     */
    handleChange(event) {
        const target = event.target;
        var fieldName = event.target.name;
        var fieldValidName = event.target.name + 'Valid';
        this.setState({
            [fieldName]: target.value,
            [fieldValidName]: target.validity.valid
        });
    }
    /**
     * Check all fields ending in 'Valid' and &amp;&amp; them together
     */
    isValid() {
        return Object.keys(this.state)
            .filter((key) => key.endsWith('Valid'))
            .map(key => this.state[key])
            .reduce((previous, current) => previous&&current, true);
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" id="contact-form-name" name="name" placeholder="Your Name" required onChange={this.handleChange} value={this.state.name}></input>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" id="contact-form-phone" name="phone" placeholder="Phone number" onChange={this.handleChange} value={this.state.phone}></input>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="contact-form-email" name="email" placeholder="Your E-mail" onChange={this.handleChange} value={this.state.email}></input>
                </div>
                <div className="form-group">
                    <textarea className="form-control" id="contact-form-message" rows="3" name="message" placeholder="Your Message" required onChange={this.handleChange} value={this.state.message}></textarea>
                </div>
            </div>
        );
    }
}