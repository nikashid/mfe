import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';


const mount = (el, {onNavigate, initialPath}) => {
    const history = onNavigate ? createMemoryHistory({
        initialEntries: [initialPath]
    }) : createBrowserHistory();
    if(onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history}/>,
        el
    );

    return {
        onParentNavigate({ pathname: path }) {
            const { pathname } = history.location;
            if(pathname !== path) {
                history.push(path);
            }
        }
    }
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');
    if(devRoot) {
        mount(devRoot, {}, );
    }
}

export { mount };