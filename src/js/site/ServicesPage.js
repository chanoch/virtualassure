import React, { Component, PropTypes } from 'react'

import Layout from './Layout';

import Heading from '../components/heading';
import ServiceTypes from '../components/ServiceTypes';
import Features from '../components/Features';

import services from '../../data/services.json';

class ServicesPage extends Component {
    render () {
        const {config} = this.props;
        return (
            <Layout config={config} active="services">
    
                <div className="page-content">
                    <Heading title={services.title} />
                    <ServiceTypes />
                    <Features 
                        features={services.features} 
                        link={services.link}
                        linkText={services.linkText} />
                </div>    
            </Layout>
        )
    }
}

ServicesPage.propTypes = {

}

export default ServicesPage