
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { reducers } from 'reducers';
const reducer = combineReducers(reducers);

var store;

export function makeStore(initialState = {}, middlewares = [reduxThunk]) {
    var finalCreateStore = applyMiddleware(...middlewares)(createStore);
    store = finalCreateStore(reducer, initialState);
    return store;
}

export function dispatch(action) {
    store.dispatch(action);
}
