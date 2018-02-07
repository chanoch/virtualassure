import React, { Component, PropTypes } from 'react'

export default class EqualHeightRow extends Component {
    render () {
        return (
            <div className="container">
                <div className="row equal-height-row">
                    {this.props.children}
                </div>
            </div>
        )
    }
}