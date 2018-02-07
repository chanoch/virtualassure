import ReactDOM from 'react-dom';
import history from './components/History';
import router from './components/Router';
import routes from './site/routes';

function renderComponent(component) {
    ReactDOM.render(component, document.getElementById('root'));
}

function render(location) {
    router.resolve(routes, location)
    .then(renderComponent)
    .catch(error =>
        router.resolve(routes, {location, error})
              .then(renderComponent));
}

render(history.location);
history.listen(render);