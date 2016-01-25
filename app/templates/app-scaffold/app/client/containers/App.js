
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import { HelloWorld } from 'components/HelloWorld';

@connect(s => s.app)
export class App extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
    }

    render() {
        return (
            <Grid>
                <HelloWorld content={this.props.title} />
                <p>here you can write your app...</p>
            </Grid>
        );
    }
}
