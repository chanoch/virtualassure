import React from 'react';

export default class Navigation extends React.PureComponent {
    constructor(props) {
        super(props);

        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    toggleNavigation(e) {
        e.preventDefault();
        var el = document.querySelector('#nav-toggle');
        var classNames = el.className;
        if(classNames.length===0) {
            el.className = 'show-nav';
        } else {
            el.className = '';
        }
    }
    
    render() {
        const {active, config} = this.props;
        return (
            <header className="navigation" id="top">
                <div className="container">
                    <div className="secondary-nav">
                        <span><a href="mailto:jenita@virtualassure.co.uk" target="_blank"><i className="icon_mail"></i>jenita@virtualassure.co.uk</a></span>
                        <span><a href="tel:+447843080738"><i className="icon_phone"></i>07843 080 738</a></span>
                    </div>

                    <div className="main-nav">
                        <div className="brand"><a href="index.html"><img src="assets/img/logo.png" alt="" /></a></div>
                        <nav id="nav-toggle">
                            <ul>
                                {config.navigation.map((menuitem) => {
                                    return (<li key={menuitem.key} className={active===menuitem.key?"active":""}>
                                        <a href={menuitem.link} alt={menuitem.alt}>{menuitem.linkText}</a>
                                    </li>)
                                })}
                                <li><a href="services.html">Services</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                {/* contact */}
                                <li><a href="about.html">About Me</a></li>
                            </ul>
                            <div className="nav-toggle" onClick={this.toggleNavigation}><i className="icon_menu"></i></div>
                        </nav>
                        <a href="contact.html" className="icon-shortcut"><i className="icon_calendar" title="Make an Appointment"></i></a>
                    </div>

                </div>

            </header>
           
        )
    }
}