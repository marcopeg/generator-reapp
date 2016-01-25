
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { reducers } from 'reducers';
const reducer = combineReducers(reducers);
const middlewares = [reduxThunk];

var store;

export function makeStore(initialState) {
    var finalCreateStore = applyMiddleware(...middlewares)(createStore);
    store = finalCreateStore(reducer, initialState);
    return store;
}

export function dispatch(action) {
    store.dispatch(action);
}
