
import React from 'react';

export class HelloWorld extends React.Component {

    static propTypes = {
        tag: React.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
        content: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.array,
            React.PropTypes.string,
            React.PropTypes.number,
        ]),
    }

    static defaultProps = {
        content: null,
        tag: 'h3',
    }

    render() {
        var { content, tag, children } = this.props;

        content = React.createElement(tag, null, (
            <span>HelloWorld - <small>{content || children}</small></span>
        ));

        return (
            <div className="hello-world">
                {content}
            </div>
        );
    }
}
