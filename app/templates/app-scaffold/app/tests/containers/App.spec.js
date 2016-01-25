
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import { Provider } from 'react-redux';
import { makeStore } from 'utils/store';

import { App } from 'containers/App';
import { initialState } from 'fixtures/initial-state-prod.fixture';

describe('App Container', function () {
    it('should render home screen', function () {
        var cmp = ReactTestUtils.renderIntoDocument((
            <Provider store={makeStore(initialState)}>
                <App />
            </Provider>
        ));
        var testString = ReactDOM.findDOMNode(cmp).innerText;
        expect(testString).to.contain('React Client');
    });
});
