import React from 'react';

import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        const { active, config } =  this.props;
        return (
            <div className="outer-wrapper">
                <div className="page-wrapper">
                    <Navigation active={active} config={config}/>
                    {this.props.children}
                    <Footer />
                </div>
            </div>
        )
    }
}