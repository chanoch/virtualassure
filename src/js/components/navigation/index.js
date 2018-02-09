import Navigation from './Navigation';

import './navigation.css';

/**
 * Site menu component
 * 
 * Pass a prop called "active" with a value equal to the item key to highlight the current
 * page as the active one in the menu. For example to highlight the Home link as active on
 * the home page, pass <Navigation active="home" config={config} />  
 * 
 * This component depends on a config object which contains the following property:
 * 
 * {
 *      "navigation": [{
            "key": "home",
            "link": "/",
            "alt": "Link to home page",
            "linkText": "Home"
        },{
            // etc, remaining menu items
        }]

 * }
 */
export default Navigation;