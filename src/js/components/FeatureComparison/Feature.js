import React from 'react';

import Article from './Article';
import Triangle from '../triangle';
import BenefitsAndPrice from './BenefitsAndPrice';

export default class Feature extends React.PureComponent {
    render() {
        const {feature, promoted} = this.props;
        return (
            <div key={feature.key} className={"row " + (promoted?"feature":"")}>
                <Article feature={feature}/>
                <BenefitsAndPrice price={feature.price} keyPoints={feature.keyPoints} promoted={promoted}/>
            </div>
        )
    }
}