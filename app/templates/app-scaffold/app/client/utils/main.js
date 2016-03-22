import React from 'react';

import { Provider } from 'react-redux';

export class Main extends React.Component {

    static propTypes = {
        app: React.PropTypes.func,
        routes: React.PropTypes.object,
        store: React.PropTypes.object,
    }

    static defaultProps = {
        app: null,
        routes: null,
        store: null,
    }

    render() {
        var { app, routes } = this.props;

        return (
            <Provider store={this.props.store}>
                {routes ? routes : React.createElement(app)}
            </Provider>
        );
    }
}
