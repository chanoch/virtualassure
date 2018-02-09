import React from 'react';

import Layout from './Layout';
import {SectionHeading} from '../components/heading';
import Declaration from '../components/declaration';
import List from '../components/List';
import FeatureComparison from '../components/FeatureComparison';
import Triangle from '../components/triangle';

import {title, features} from '../../data/features.json';

export default class PricingPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {config} = this.props;
        return (
            <Layout active="pricing" config={config}>
                <div className="page-content">
                    <SectionHeading title="Pricing" />

                    <div className="container">
                        <div className="short_block">
                            <div className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1">
                                <div className="center">
                                    <h3 className="text-color-white"><strong>See below for suggested options or <a className="white" href="contact.html">contact me</a> for a custom quote.</strong></h3>
                                </div>
                            </div>
                            <div className="bg bg-color-default"></div>
                        </div>
                    </div>

                <FeatureComparison title={title} features={features} />

                <Declaration 
                    title="Included as Standard"
                    text="All of the following elements are included in my services." />

                <div className="block" id="packages">                
                    <div className="container">
                        <List />
                    </div>
                        <div className="bg"></div>
                    </div>
                        
                    <div className="block"> 
                        <div className="container">
                            <div className="center">
                                    <a href="contact.html" className="btn btn-primary btn-big">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}