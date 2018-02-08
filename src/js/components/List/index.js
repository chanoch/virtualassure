import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div className="pricing">

                <div className="row">
                    <div className="offset-2 col-4 col-4">
                        <div className="description">
                            <ul>
                                <li>Electronic Invoicing</li>
                                <li>Paper Invoices</li>
                                <li>Duration</li>
                                <li>Renewal and Notice</li>
                                <li>Whatsapp</li>
                                <li>Status Reports</li>
                                <li>Weekly Review</li>
                            </ul>
                        </div>
                        
                    </div>
                                
                    <div className="col-4 col-4">
                        <div className="price-box promoted">
                            <ul>
                                <li><i className="icon_check"></i></li>
                                <li><i className="icon_check"></i></li>
                                <li>Ongoing</li>
                                <li>30 days</li>
                                <li><i className="icon_check"></i></li>
                                <li>End of Day</li>
                                <li><i className="icon_check"></i></li>
                            </ul>
                        </div>
                    </div>

                </div>
            
            </div>
        )
    }
}
