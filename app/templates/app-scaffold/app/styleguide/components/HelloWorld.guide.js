import React from 'react';
import { HelloWorld } from 'components/HelloWorld';

export default class FooSpec extends React.Component {
    render() {

        var availableTitleSizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((tag, i) =>
            <HelloWorld key={i} tag={tag}>Title {tag}</HelloWorld>
        );

        return (
            <div className="container">
                <HelloWorld>with <b>children</b> content</HelloWorld>
                <HelloWorld content="with content from params" />
                {availableTitleSizes}
            </div>
        );
    }
}
