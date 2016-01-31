/**
 * <%= reducerName %> Reducer
 */

import {
    SET_VALUE,
} from 'actions/<%= reducerFile %>-actions';

export const INITIAL_STATE = {
    value: '<%= reducerName %> reducer',
};

export function <%= reducerName %>Reducer(state = INITIAL_STATE, action) {
    var { type, payload } = action;
    switch (type) {
        case SET_VALUE: return setValue(state, payload);
        default: return state;
    }
}

function setValue(state, payload) {
    return {
        ...state,
        value: payload,
    };
}
