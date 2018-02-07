import React from 'react';

import Slide from './Slide';

export default class Slideshow extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {slides} = this.props;
        return (
            <div id="slider" className="hero-slider" style={{minHeight: "100px"}}>
                <div className="slides">
                    {slides.map((slide) => <Slide key={slide.key} slide={slide}/>)}
                </div>        
            </div>
        )
    }
}


