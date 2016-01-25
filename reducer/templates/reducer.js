
export const INITIAL_STATE = {
    val: 'A new reducer',
};

export function <%= reducerName %>Reducer(state = INITIAL_STATE, action) {
    var { type } = action;
    switch (type) {
        default: return state;
    }
}
