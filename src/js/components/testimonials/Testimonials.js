import React from 'react';

import Testimonial from './Testimonial';

export default class Testimonials extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renderTestimonial = this.renderTestimonial.bind(this);
    }

    renderTestimonial(testimonial) {
        return (<Testimonial key={testimonial.key} testimonial={testimonial} />);
    }

    render() {
        const {title, testimonials} = this.props;
        return (
            <div className="block" id="successful-stories">
                <div className="container">
                    <h2>{title}</h2>
                    <div className="row">
                        {testimonials.map((testimonial) => this.renderTestimonial(testimonial))}
                    </div>                    
                </div>
                
                <div className="bg"></div>
            </div>
        );
    }
  }