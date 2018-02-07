import React, { Component } from 'react'

export default class CallToAction extends Component {
    render() {
        const {link, linkText} = this.props;
        return (
            <div className="row">
                <div className="center">
                        <a href={link} className="btn btn-default btn-big">{linkText}</a>
                </div>
            </div>
        )
    }
}
