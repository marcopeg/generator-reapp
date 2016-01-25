/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import { HelloWorld } from 'components/HelloWorld';

describe('HelloWorld Component', () => {

    describe('Accepted Content Types', () => {

        var types = {
            string: 'foo',
            number: 123,
        };

        Object.keys(types).forEach(type => {
            it('should render with ' + type + ' content', () => {
                var cmp = ReactTestUtils.renderIntoDocument(<HelloWorld>{types[type]}</HelloWorld>);
                var nod = ReactDOM.findDOMNode(cmp);
                expect(nod.innerText).to.equal(types[type].toString());
            });

        });

    });

    it('should render with a content attribute', () => {
        var cmp = ReactTestUtils.renderIntoDocument(<HelloWorld content="foo" />);
        var nod = ReactDOM.findDOMNode(cmp);
        expect(nod.innerText).to.equal('foo');
    });

    // test all the possible options for the attribute "tag"
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (tag) {
        it('should render as ' + tag, () => {
            var cmp = ReactTestUtils.renderIntoDocument(<HelloWorld content="foo" tag={tag} />);
            var nod = ReactDOM.findDOMNode(cmp).querySelector(tag);
            expect(nod.innerText).to.equal('foo');
        });
    });

    // test that che component triggers
    it('should complain if a wrong tag value is given', () => {
        var stub = sinon.stub(console, 'error');
        ReactTestUtils.renderIntoDocument(<HelloWorld content="foo" tag="h7" />);
        expect(stub.calledOnce).to.equal(true);
        console.error.restore();
    });

});
