
import React from 'react';
import { connect } from 'react-redux';

// ReactBoostrap components:
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

@connect(s => s.app)
export class App extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
    }

    render() {

        var styles = {
            grid: {
                marginTop: 50,
            },
            jumbo: {
                borderRadius: 0,
                boxShadow: '2px 2px 5px #aaa',
            },
            icon: {
                marginRight: 10,
            },
        };

        var reappUrl = 'https://github.com/marcopeg/generator-reapp';

        return (
            <Grid style={styles.grid}>
                <Jumbotron style={styles.jumbo}>
                    <h3>{this.props.title}</h3>
                    <p>This <i>React/Redux</i> app is ready to rock the world!</p>
                    <Button href={reappUrl} bsStyle="success" target="_blank">
                        <Glyphicon glyph="hand-right" style={styles.icon} />
                        Learn more about Reapp
                    </Button>
                </Jumbotron>
            </Grid>
        );
    }
}
