import React, { Component } from 'react'

export default class ServiceTypes extends Component {

    render() {
        return (
            <div className="container" id="servicetypes">
                <div className="row">
                    <h2 className="center">Flexible Commitment</h2>
                </div>

                <div className="row">
                    <Service 
                        img="assets/img/parttime.jpg" 
                        alt="Part Time Support" 
                        text="Part-time Help" />
                    <Service
                        img="assets/img/holidaycover.jpg" 
                        alt="Holiday Cover Support" 
                        text="Holiday Cover" />
                    <Service
                        img="assets/img/financialyearend.jpg" 
                        alt="Financial Year End Support" 
                        text="Financial Year End" />                
                </div>
            </div>
        )
    }
}

export class Service extends Component {
    render () {
        const {text, img, alt} = this.props;
        return (
            <div className="col-md-4 col-sm-4">
                <div className="feature-circle">
                    <div className="image">
                        <img src={img} alt={alt} />
                    </div>
                    <h3>{text}</h3>
                </div>                
            </div>
        )
    }
}