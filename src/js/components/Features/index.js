import React from 'react';

import CallToAction from '../CallToAction';
import Heading from '../heading';

export default class Features extends React.Component {
    render () {
        const { link, linkText, features } = this.props;
        return (
            <div>
                <div className="block" id="features">

                    <div className="container">
                        <div className="row">
                            <h2>All aspects of administration</h2>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            {features.map((feature) => {
                                return (<Feature 
                                    key={feature.key}
                                    icon={feature.icon}
                                    title={feature.title}
                                    details={feature.details}
                                    link={feature.link}
                                    linkText={feature.linkText} />)
                            })}
                            
                        </div>
                        <CallToAction link={link} linkText={linkText} />
                        <div className="bg bg-color-neutral opacity-50"></div>
                    </div>
                </div>
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
                    <h3>{title}</h3>
                    <div className="feature-list">
                    <ul>
                        {details&&details.map((item) => (<li key={item.key}>{item.text}</li>))}
                    </ul>
                    <a href={linkText}>{link} <i className="arrow_right"></i></a>
                    </div>
                </div>
                
            </div>
        )
    }
}