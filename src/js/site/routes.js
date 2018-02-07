import HomePage from './HomePage';
import ContactPage from './ContactPage';
import React from 'react';

import config from '../../config/index.json';

// TODO calculate env and default to config

const routes = [
    { path: '/', action: () => <HomePage /> },
    { path: '/index.html', action: () => <HomePage /> },
    { path: '/contact.html', action: () => <ContactPage sitekey={config.sitekey}/> }
];

export default routes;
