import React, { Component } from 'react'

export default class BenefitsAndPrice extends Component {
    render () {
        const {price, keyPoints, promoted} = this.props;
        return (
              <div className="col-12 col-sm-12 col-md-3 benefits">
                  <div className={"price-box "  + (promoted?"promoted":"")}>
                      <h3 className="center"></h3>
                      <ul>
                          {keyPoints.map((point) => <li key={point.key}>{point.text}</li>)}
                      </ul>
                      <div className="price">{price}</div>
                  </div>
              </div>                
        )
    }
}