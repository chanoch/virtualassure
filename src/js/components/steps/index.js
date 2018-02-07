import React from 'react';

import Step from './Step';

export default class StepsToSuccess extends React.PureComponent {
    constructor(props) {
        super(props); 
    }
    render() {
        const {title, steps} = this.props;
        return (
            <div className="block" id="five-steps-to-success">
                <div className="container">
                    <h2 className="center">{title}</h2>
                    <div className="steps">
                        {steps.map((step) => <Step key={step.key} step={step} />)}
                    </div>
                </div>    
            </div>
        )
    }
}
