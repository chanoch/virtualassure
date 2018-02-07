import React from 'react';

export default class Testimonial extends React.PureComponent {
    constructor(props) {
        super(props);

        this.getQuote = this.getQuote.bind(this);
    }

    getQuote(quote) {
        return quote.map((line) => {
            return (<p key={line.id}>{line.text}</p>); 
        })
    }

    render() {
        const { testimonial } = this.props;
        return (
            <div className="col-md-6">
                <div className="story">
                    <div className="image">
                        <a target="_blank" href={testimonial.link} title={testimonial.linkTitle}>
                            <img src={testimonial.img} alt={testimonial.alt}></img>
                        </a>
                    </div>
                    <blockquote>
                        {this.getQuote(testimonial.quote)}
                        <footer><a target="_blank" href={testimonial.footer.link} title={testimonial.footer.linkTitle}>{testimonial.footer.linkText}</a></footer>
                    </blockquote>    
                </div> 
            </div>
        )
    }
}