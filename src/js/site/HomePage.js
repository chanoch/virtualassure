import React from 'react';

import Layout from './Layout';

import Slideshow from '../components/slideshow';
import Triangle from '../components/triangle';
import Testimonials from '../components/testimonials'
import StepsToSuccess from '../components/steps';

import {slides} from '../data/slides.json';
import refs from '../data/testimonials.json'; 
import steps2success from '../data/stepstosuccess.json';

export default class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout active="home">
                <Slideshow slides={slides} />
                <Triangle />
                <Testimonials title={refs.title} testimonials={refs.testimonials}/>
                <StepsToSuccess title={steps2success.title} steps={steps2success.steps} />
            </Layout>
        )
    }
}