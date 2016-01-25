/**
 * The purpose of this entry point is to work on a component in isolation.
 *
 * You should create a `styleguide/components/Component.guide` file which loads
 * the component from the `app` folder and render it in all the possible ways.
 *
 * ```
 * npm run guide ComponentName
 * ```
 *
 * The above command will start a web server that renders your componet guide.
 */

/* globals __STYLEGUIDE_COMPONENT__ */

import React from 'react';
import ReactDOM from 'react-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Alert from 'react-bootstrap/lib/Alert';

require('../client/index.scss');
require('./index.scss');

class ErrorComponent extends React.Component {

    static propTypes = {
        message: React.PropTypes.string.isRequired,
    }

    render() {
        var { message } = this.props;
        var styles = {
            grid: {
                marginTop: 50,
            },
        };

        if (message.indexOf('.guide') !== -1) {
            message = message.replace('.guide', '.guide.js');
        }

        return (
            <Grid style={styles.grid}>
                <Alert bsStyle="danger">
                    <h4>Ooooops!</h4>
                    <p>{message}</p>
                </Alert>

                <p>In order to run the styleguide for <code>ComponentName</code> you should run:</p>
                <pre>npm run guide ComponentName</pre>
            </Grid>
        );
    }
}

var styleguideContent;
try {
    var GuideComponent = require('./components/' + __STYLEGUIDE_COMPONENT__ + '.guide');
    styleguideContent = <GuideComponent />;
} catch (e) {
    styleguideContent = <ErrorComponent message={e.message} />;
}

ReactDOM.render(styleguideContent, document.getElementById('app'));
