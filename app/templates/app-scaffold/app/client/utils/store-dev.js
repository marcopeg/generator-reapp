
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { reducers } from 'reducers';
const reducer = combineReducers(reducers);

import { DevTools } from './main-dev';

var store;

export function makeStore(initialState = {}, middlewares = [reduxThunk]) {

    var persistParam = window.location.href.match(/[?&]debug_session=([^&]+)\b/);

    var finalCreateStore = compose(
        applyMiddleware(...middlewares),
        DevTools.instrument(),
        require('redux-devtools').persistState(persistParam)
    )(createStore);

    store = finalCreateStore(reducer, initialState);

    return store;
}

export function dispatch(action) {
    store.dispatch(action);
}
