/**
 * ReactClient
 * app startup script for production purpose
 */

// console.log('ENV_PROP:', ENV_PROP);

require('./index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { Main } from 'utils/main';
import { makeStore } from 'utils/store';

import initialState from 'fixtures/initial-state-prod.fixture';
import App from 'containers/App';

export function start(targetEl, payload) {

    // apply the host's page payload
    if (payload.title) {
        initialState.app = {
            title: payload.title,
        };
    }

    // create the application Redux store
    let appStore = makeStore(initialState);

    ReactDOM.render((
        <Main
            app={App}
            store={appStore} />
    ), targetEl);
}
