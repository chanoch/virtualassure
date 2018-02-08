import React from 'react';

import Article from './Article';
import Triangle from '../triangle';

export default class Feature extends React.PureComponent {
    render() {
      const {feature} = this.props;
      return (
          <div key={feature.key} className="row">
              <Article feature={feature}/>
              <div className="col-3">
                  <div className="price-box">
                      <h3 className="center"></h3>
                      <ul>
                          {feature.keyPoints.map((point) => <li key={point.key}>{point.text}</li>)}
                      </ul>
                      <div className="price">{feature.price}</div>
                  </div>
              </div>
          </div>
      )
    }
  }
  