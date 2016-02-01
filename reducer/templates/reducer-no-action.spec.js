/* eslint no-undefined:0 */

import {
    <%= reducerName %>Reducer,
    INITIAL_STATE,
} from 'reducers/<%= reducerFile %>-reducer';

describe('<%= reducerName %>Reducer', () => {
    it.skip('should setup its initial state', () => {
        var expectedState = {
            ...INITIAL_STATE,
        };
        var nextState = <%= reducerName %>Reducer(undefined, {});
        expect(nextState).to.deep.equal(expectedState);
    });
});
