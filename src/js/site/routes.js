import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ServicesPage from './ServicesPage';
import AboutMePage from './AboutMePage';
import PricingPage from './PricingPage';
import Http404Page from './Http404Page';

import React from 'react';

import config from '../../config/index.json';

// TODO calculate env and default to config

const routes = [
    { path: '/', action: () => <HomePage config={config} /> },
    { path: '/index.html', action: () => <HomePage config={config} /> },
    { path: '/contact.html', action: () => <ContactPage sitekey={config.sitekey} config={config}/> },
    { path: '/services.html', action: () => <ServicesPage config={config}/> },
    { path: '/about.html', action: () => <AboutMePage config={config}/> },
    { path: '/pricing.html', action: () => <PricingPage config={config} />},
    { path: '/error', action: () => <Http404Page config={config} />}
];

export default routes;
