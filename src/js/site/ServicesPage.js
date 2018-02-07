import React, { Component, PropTypes } from 'react'

import Layout from './Layout';

import Heading from '../components/heading';
import ServiceTypes from '../components/ServiceTypes';
import Features from '../components/Features';

class ServicesPage extends Component {
    render () {
        const {config} = this.props;
        return (
            <Layout config={config} active="services">
                <Heading title="Services" />
    
                <div className="page-content">
                    <ServiceTypes />
                    <Features />
                </div>    
            </Layout>
        )
    }
}

ServicesPage.propTypes = {

}

export default ServicesPage