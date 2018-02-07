import React from 'react';

/**
 * @argument slide - where slide is an object which has the following properties:
 * 
 * {
 *      title: "Title of the slide as h3"
 *      text: "Text of the slide"
 *      link: "Call To Action (CTA) link URL"
 *      linkText: "CTA text"
 *      imgMobile: "url to slide background image in mobiles"
 *      imgTablet: "slide image for tablets"
 *      imgDesktop: "slide image for desktops and older browsers" 
 * }
 */
export default class Slide extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, text, link, linkText, imgMobile, imgTablet, imgDesktop} = this.props.slide;

        return (
            <div className="slider">
                <div className="content">
                    <div className="content-txt">
                            <h4 className="opacity-70">{title}</h4>
                            <h1>{text}</h1>
                            <a href={link} className="link underline scroll">{linkText}</a>
                    </div>
                </div>
                <div className="images">
                    <picture>
                        <source srcSet={imgMobile} media="(max-width:40em)" />
                        <source srcSet={imgTablet} media="(max-width:66em)" />
                        <source srcSet={imgDesktop} />
                        <img src={imgDesktop} />
                    </picture>
                </div>
            </div>  
        )
    }
}


