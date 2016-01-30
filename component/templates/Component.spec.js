/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import { <%= componentName %> } from 'components/<%= componentName %>';

describe('<%= componentName %> Component', () => {
    it('should render without exceptions', () => {
        var cmp = ReactTestUtils.renderIntoDocument(<<%= componentName %> value="<%= componentName %>" />);
        var nod = ReactDOM.findDOMNode(cmp);
        expect(nod.innerText).to.equal('<%= componentName %>');
    });
});
