
import React from 'react';

export class <%= componentName %> extends React.Component {

    static propTypes = {
        val: React.PropTypes.string,
    }

    static defaultProps = {
        val: 'A New Component',
    }

    render() {
        var { val } = this.props;

        return (
            <div>
                {val}
            </div>
        );
    }
}
