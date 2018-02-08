import React from 'react'

import Feature from './Feature';
import Triangle from '../triangle';

export default class FeatureComparison extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, features} = this.props;
        return (
            <div className="block">
                <div className="container">
                    <div className="center">
                        <h2>{title}</h2>
                    </div>
                </div>

                <div className="container"> 
                    <div className="pricing"> {/* namespace class */}
                        {features.map((feature, index) => {
                            return (
                                <div>
                                    <Feature key={feature.key} feature={feature} />
                                    <Triangle />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}