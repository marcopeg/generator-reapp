/**
 * <%= reducerName %> Reducer
 */

export const INITIAL_STATE = {
    value: '<%= reducerName %> reducer',
};

export function <%= reducerName %>Reducer(state = INITIAL_STATE, action) {
    var { type } = action;
    switch (type) {
        default: return state;
    }
}
