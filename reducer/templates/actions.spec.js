/* eslint max-nested-callbacks:0 no-undefined:0 */

import {
    SET_VALUE,
    setValue,
} from 'actions/<%= reducerFile %>-actions';

const ACCEPTED_TYPES = [
    'string',
    123,
];

const WRONG_VALUES = [
    {},
    [],
    () => {},
    true,
    false,
    null,
    undefined,
];

describe('<%= reducerName %> actions', () => {
    it('should setValue()', () => {
        var action = setValue('foo');
        expect(action.type).to.equal(SET_VALUE);
    });

    ACCEPTED_TYPES.forEach(type => {
        it('should accept n ' + typeof type, () => {
            var action = setValue(type);
            expect(action.type).to.equal(SET_VALUE);
        });
    });

    WRONG_VALUES.forEach(type => {
        it('should complain with an ' + typeof type, () => {
            expect(() => {
                setValue(type);
            }).to.throw(TypeError);
        });
    });
});
