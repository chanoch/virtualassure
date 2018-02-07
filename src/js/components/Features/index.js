import React from 'react';

import CallToAction from '../CallToAction';
 
export default class Features extends React.Component {
    render () {
        return (
            <div className="block" id="features">
        <div className="container">
            <h2 className="center">All aspects of administration</h2>
            <div className="row">
                <Feature 
                    icon="icon_box-checked"
                    title="Project Governance"
                    details={{list:[{
                        key:1, text:"Implementing Governance Processes"},
                        {key:2, text:"Defining and documenting targets"},
                        {key:3, text:"Tracking Projects to Time and Budget"},
                        {key:4, text:"Risk and Issue matrix and scoring"}
                    ]}}
                    link="contact.html"
                    linkText="Arrange a call" />
                
                <Feature 
                    icon="con_calculator_alt" 
                    title="Budget Tracking"
                    details={{list:[
                        {key:1,text:"Project cost reconciliation"},
                        {key:2, text:"Spend forecasting"},
                        {key:3, text:"Tracking Capital Budgets"},
                        {key:4, text:"Revenue reporting"}
                    ]}}
                    link="contact.html"
                    linkText="Arrange a call" />
            </div>            
        </div>        
            <div className="container">
                <div className="row">
                    <Feature 
                        icon="con_currency_alt" 
                        title="Finance Administration"
                        details={{list:[
                            {key:1,text:"Invoicing and Receipting"},
                            {key:2, text:"Raising Purchase Orders"},
                            {key:3, text:"Supplier Set Up"},
                            {key:4, text:"Expenses"}
                        ]}}
                        link="contact.html"
                        linkText="Arrange a call" />

                    <Feature 
                        icon="con_profile" 
                        title="Personal Assistant"
                        details={{list:[
                            {key:1,text:"Dictation"},
                            {key:2, text:"Minutes"},
                            {key:3, text:"Preparing Board Reports"},
                            {key:4, text:"Diary Management"}
                        ]}}
                        link="contact.html"
                        linkText="Arrange a call" />
                </div>                
            </div>
            
            <div className="container">
                <div className="row">
                    <Feature 
                        icon="con_paperclip" 
                        title="General Administration"
                        details={{list:[
                            {key:1,text:"Filing"},
                            {key:2, text:"Order supplies"},
                            {key:3, text:"Contact Management - email and phone"},
                            {key:4, text:"Supplier Contact"}
                        ]}}
                        link="contact.html"
                        linkText="Arrange a call" />

                    <Feature 
                        icon="con_house_alt" 
                        title="Household Paperwork"
                        details={{list:[
                                {key:1,text:"Bills and household finance"},
                                {key:2, text:"Insurance renewal"},
                                {key:3, text:"Appointment booking"},
                                {key:4, text:"Nursery and School research"}
                            ]}}
                            link="contact.html"
                            linkText="Arrange a call" />
                    
                </div>
                <CallToAction link="contact.html" linkText="Get in touch" />
            </div>
        
        <div className="bg bg-color-neutral opacity-50"></div>
    </div>
        )
    }
}

export class Feature extends React.PureComponent {
    render() {
        const {title, icon, details, link, linkText} = this.props;
        return (
            <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="feature-box">
                    <i className={icon}></i>
                    <h3>Project Governance</h3>
                    <div className="feature-list">
                    <ul>
                        {details.list.map((item) => (<li key={item.key}>{item.text}</li>))}
                    </ul>
                    <a href={linkText}>{link} <i className="arrow_right"></i></a>
                    </div>
                </div>
                
            </div>
        )
    }
}