/**
 * ReactClient
 * app startup script for development purpose
 */

// console.log('ENV_PROP:', ENV_PROP);

require('./index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

// those files are aliased in `config/webpack.config.js`
// they actually import `{fileName}-dev.js`
import { Main } from 'utils/main';
import { makeStore } from 'utils/store';

import initialState from 'fixtures/initial-state-dev.fixture';
import App from 'containers/App';

var appStore;

export function start(targetEl, payload) {

    // apply the host's page payload
    if (payload.title) {
        initialState.app.title = payload.title;
    }

    // build the app' store and reference it to the module
    appStore = makeStore(initialState);

    ReactDOM.render((
        <Main
            app={App}
            store={appStore} />
    ), targetEl);
}

export function dispatch(action) {
    appStore.dispatch(action);
}
