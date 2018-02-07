import React, { Component } from 'react'

import Layout from './Layout';
import Heading from '../components/heading';

export default class AboutMePage extends Component {
  render() {
      const {active, config} = this.props;

    return (
        <Layout active="about" config={config}>
            <Heading title="About Me" />

    <div class="block">
        <div class="container">
            <h2 class="center">A little bit about me</h2>
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <img src="assets/img/jenitawiggers.jpg" alt="Jenita Wiggers"/>
                </div>
                <div class="col-md-8 col-sm-8">
                    <h3 class="no-bottom-margin"><strong>Jenita Wiggers</strong></h3>
                    <h5>Virtual Assistant</h5>
                    <br/>
                    <p>
                        I have spent the last 17 years working in the Kingfisher Group, the bulk of which I spent
                        in the IT department focussing on business change programmes. 
                    </p>
                    <p>
                        Starting in the role of administration assistant, the last 3 years I have managed the Project
                        Management Office (PMO) providing administration and PA support to the Senior Management Team. 
                    </p>
                    <p>
                        My responsibilities have included: 
                        <ul>
                            <li>Preparing board reports</li>
                            <li>Maintaining project budgets</li>
                            <li>Resource management</li>
                            <li>Arrange travel</li>
                            <li>Project Assurance</li>
                            <li>Arranging meetings</li>
                            <li>Raising Purchase Orders and processing invoices</li>
                        </ul>

                    </p>
                    <p>I am 39, married, with a son. I have recently moved to South Wales to be closer to family. </p>
                    <p>
                        I loved my job but sadly left due to the move to South Wales. My son starts school in 2018 and I wanted
                        to be able to support him at school while still working.
                    </p><p>
                        Being a Virtual Assistant allows me to do that, sharing the responsibility for caring after my son with
                        my husband, as required.</p>

                        <a href="Jenita_Wiggers_Virtual_Assure.pdf" target="_blank" class="link underline">Download CV</a>
                
            </div>
            
            </div>
            
                <div class="bg"></div>
        </div>
        
    </div>
    </Layout>
    )
  }
}
