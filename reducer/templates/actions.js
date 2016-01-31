/**
 * <%= reducerName %> Actions
 */

export const SET_VALUE = 'setValue@<%= reducerFile %>';

export const VALID_VALUE_TYPES = ['string', 'number'];

export function setValue(value) {

    if (VALID_VALUE_TYPES.indexOf(typeof value) === -1) {
        throw new TypeError('setValue@<%= reducerFile %>(' + value + ')');
    }

    return {
        type: SET_VALUE,
        payload: value,
    };
}
