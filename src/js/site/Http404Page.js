import React from 'react';

import Layout from './Layout';
import Heading from '../components/heading';
import Declaration from '../components/declaration';

import Triangle from '../components/triangle';

export default class Http404Page extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {config} = this.props;
        return (
            <Layout active="home" config={config}>
                <Heading title="Page Not Found" />
                <Triangle />
                <Declaration title="We couldn't find that page."
                    text={`That link didn't work. Please try again and contact me on ${config.email} if you continue having problems.`} />
            </Layout>
        )
    }
}