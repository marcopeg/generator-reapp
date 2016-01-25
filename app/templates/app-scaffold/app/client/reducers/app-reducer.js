
export const INITIAL_STATE = {
    title: 'React Client',
};

export function appReducer(state = INITIAL_STATE, action) {
    var { type } = action;
    switch (type) {
        default: return state;
    }
}
