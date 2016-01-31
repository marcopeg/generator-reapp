/* eslint no-undefined:0 */

import {
    <%= reducerName %>Reducer,
    INITIAL_STATE,
} from 'reducers/<%= reducerFile %>-reducer';

import {
    setValue,
} from 'actions/<%= reducerFile %>-actions';

describe('<%= reducerName %>Reducer', () => {
    it('should setup its initial state', () => {
        var expectedState = {
            ...INITIAL_STATE,
        };
        var nextState = <%= reducerName %>Reducer(undefined, {});
        expect(nextState).to.deep.equal(expectedState);
    });

    it('should set value', () => {
        var value = 'new-value' + Date.now();
        var action = setValue(value);
        var expectedState = {
            ...INITIAL_STATE,
            value: value,
        };
        var nextState = <%= reducerName %>Reducer(undefined, action);
        expect(nextState).to.deep.equal(expectedState);
    });
});
