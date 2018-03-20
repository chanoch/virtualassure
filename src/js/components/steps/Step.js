import React from 'react';

/**
 * A step has a number, a title, some text, and a className which is set to bar 
 * and the height of the bar 10, 20, 30, etc in %
 * 
 * @argument step - an object containing the parts of a step including:
 * 
 * {
 *      "key": "unique numeric id for step",
 *      "title": "headline for the step",
 *      "text": "% height of bar",
 *      "classes": "bar height-20"
 * } 
 */
export default class Step extends React.PureComponent {
    constructor(props) {
        super(props); 
    }
    render() {
        const {step} = this.props;
        const text = step.text;

        return (
            <div className="step width-20">
                <figure>
                    <aside>{step.key}.</aside>
                    <div className={step.classes}>
                        <div className="arrow"></div>
                    </div>
                </figure>
                <h3>{step.title}</h3>
                <hr />
                <p>
                {!Array.isArray(step.text)&&step.text}
                {Array.isArray(step.text)&&step.text.map((line) => (<span>{line}<br/></span>))}
                </p>
            </div>                
        )
    }
}
