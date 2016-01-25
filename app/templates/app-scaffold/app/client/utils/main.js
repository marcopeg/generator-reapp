import React from 'react';

import { Provider } from 'react-redux';

export class Main extends React.Component {

    static propTypes = {
        app: React.PropTypes.func,
        store: React.PropTypes.object,
    }

    static defaultProps = {
        app: null,
        store: null,
    }

    render() {
        return (
            <Provider store={this.props.store}>
                {React.createElement(this.props.app)}
            </Provider>
        );
    }
}
