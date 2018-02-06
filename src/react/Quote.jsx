import React from 'react';

/**
 * @argument quote - the quote to show
 * @argument author - the person making the quote
 */
export default class Testimonials extends React.PureComponent {
    
    render() {
        const {quote, author} = this.props;
        return (
            <div className="block">
                <div className="container">
                    <blockquote className="center">
                        <p>{quote}</p>
                        <footer>{author}</footer>
                    </blockquote>
                </div>
                <div className="bg bg-color-neutral opacity-50"></div>
            </div>
        );
    }
  }