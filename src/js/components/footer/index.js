import React from 'react';

export default class Footer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.backToTop = this.backToTop.bind(this);
    }

    backToTop(e) {
        e.preventDefault();
        document.querySelector('#top').scrollIntoView({
            behavior: 'smooth',
        });
        return false;
    }
    
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-8">
                            <div className="left">
                                <span>&#169; 2018 Jenita Wiggers. All Right Reserved</span>
                                <div className="bg-left"></div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="right">
                                <span><a href="#top" onClick={this.backToTop}>Back to Top<i className="arrow_carrot-up_alt2"></i></a></span>
                                <div className="bg-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
        )
    }
}