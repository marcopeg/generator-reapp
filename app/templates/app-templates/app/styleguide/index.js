/**
 * The purpose of this entry point is to work on a component in isolation.
 *
 * You should create a `styleguide/components/Component.guide` file which loads
 * the component from the `app` folder and render it in all the possible ways.
 *
 * ```
 * npm start ComponentName
 * npm start styleguide
 * ```
 *
 * The above command will start a web server that renders your componet guide.
 */


/* globals __STYLEGUIDE_COMPONENT__ */
/* globals __STYLEGUIDE_COMPONENTS__ */
/* globals __STYLEGUIDE_ROOT__ */
/* globals __STYLEGUIDE_SOURCES__ */

import React from 'react';
import ReactDOM from 'react-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Alert from 'react-bootstrap/lib/Alert';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

require('../client/index.scss');
require('./index.scss');

class StyleguideTitle extends React.Component {
    render() {
        return (
            <Grid>
                <PageHeader><%= appName %> <small>Styleguide</small></PageHeader>
            </Grid>
        );
    }
}

class StyleguidePage extends React.Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        children: React.PropTypes.element.isRequired,
    }
    render() {
        var componentFile = this.props.name + '.js';
        var componentPath = [
            __STYLEGUIDE_ROOT__,
            'app',
            'client',
            'components',
            componentFile,
        ].join('/');
        var header = this.props.name;
        var footer = (
            <div>
                <Button
                    href="#top"
                    bsStyle="link"
                    style={{ marginTop: -10 }}
                    className="pull-right">Back to top</Button>
                <small>
                    <code
                        style={{ background: 'transparent' }}
                        children={componentPath} />
                </small>
            </div>
        );

        return (
            <Grid id={this.props.name + '.guide'}>
                <Panel
                    header={header}
                    footer={footer}
                    bsStyle="primary"
                    style={{ marginTop: 10 }}
                    children={this.props.children} />
            </Grid>
        );
    }
}

class StyleguideIndex extends React.Component {
    static propTypes = {
        components: React.PropTypes.array.isRequired,
    }
    render() {
        return (
            <div>
                {this.props.components}
            </div>
        );
    }
}

class StyleguideToc extends React.Component {
    static propTypes = {
        components: React.PropTypes.array.isRequired,
    }
    render() {
        var components = this.props.components.map(name => {
            return (
                <ListGroupItem key={name} href={'#' + name}>
                    {name}
                </ListGroupItem>
            );
        });
        return (
            <Grid>
                <Panel bsStyle="success" header="Table of Contents">
                    <ListGroup fill>{components}</ListGroup>
                </Panel>
            </Grid>
        );
    }
}

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

export class GuidePage extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.array,
        ]),
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export class GuideSectionHeader extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string,
        ]),
    }
    render() {
        var style = {
            padding: '0 10px',
        };
        return (
            <div style={style}>
                <h5>{this.props.children}</h5>
            </div>
        );
    }
}

export class GuideSectionBody extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.array,
        ]),
    }
    render() {
        var style = {
            border: '1px dotted #ddd',
            borderRadius: 3,
            padding: 10,
            boxShadow: '1px 1px 3px #eee',
        };
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export class GuideSection extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.array,
        ]),
    }
    render() {
        var style = {
            marginBottom: 40,
        };

        var source = null;
        __STYLEGUIDE_SOURCES__.forEach(component => {
            component.sections.forEach(section => {
                // console.log(section.title, this.props.title, section.title === this.props.title);
                if (section.title === this.props.title) {
                    // console.log(section);
                    source = section.source;
                }
            });
        });

        if (source) {
            source = <GuideSectionSource lines={source} />;
        }

        return (
            <div style={style}>
                <GuideSectionHeader>{this.props.title}</GuideSectionHeader>
                <GuideSectionBody>
                    {this.props.children}
                </GuideSectionBody>
                {source}
            </div>
        );
    }
}

export class GuideSectionSource extends React.Component {
    static propTypes = {
        lines: React.PropTypes.array,
    }
    state = {
        isOpen: false,
    }
    render() {
        var content = null;
        if (this.state.isOpen) {
            var lines = this.props.lines.map((line, i) => {
                return <span key={i}>{line}<br /></span>;
            });
            content = (
                <Alert
                    bsStyle="info"
                    style={{
                        marginTop: 10,
                        background: '#eee',
                        borderColor: '#aaa',
                    }}
                    onDismiss={() => this.setState({ isOpen: false })}>
                    <pre style={{
                        border: '0px solid black',
                        padding: 0,
                        margin: 0,
                        background: 'transparent',
                    }}>{lines}</pre>
                </Alert>
            );
        } else {
            content = (
                <div style={{ textAlign: 'right', marginRight: 10 }}>
                    <Button bsStyle="link" onClick={() => this.setState({ isOpen: true })}>
                        Show Code
                    </Button>
                </div>
            );
        }

        return content;
    }
}

/**
 * Render the styleguide for real
 */

var GuideComponent;
var styleguideContent;
var tryToRenderComponentPage = true;
var tryToRenderStyleguide = false;
var renderInstructions = false;

// try to render single component styleguide
if (tryToRenderComponentPage) {
    try {
        GuideComponent = require('./components/' + __STYLEGUIDE_COMPONENT__ + '.guide');
        styleguideContent = (
            <div>
                <StyleguideTitle />
                <StyleguidePage name={__STYLEGUIDE_COMPONENT__}>
                    <GuideComponent />
                </StyleguidePage>
            </div>
        );
    } catch (e) {
        tryToRenderStyleguide = true;
    }
}

// try to render full styleguide
if (tryToRenderStyleguide) {
    try {
        var components = __STYLEGUIDE_COMPONENTS__.map(componentName => {
            GuideComponent = require('./components/' + componentName);
            return (
                <StyleguidePage name={componentName.replace('.guide', '')} key={componentName}>
                    <GuideComponent />
                </StyleguidePage>
            );
        });

        styleguideContent = (
            <div>
                <StyleguideTitle />
                <StyleguideToc components={__STYLEGUIDE_COMPONENTS__} />
                <StyleguideIndex components={components} />
            </div>
        );
    } catch (e) {
        renderInstructions = true;
    }
}

// render styleguide instructions
if (renderInstructions) {
    styleguideContent = <ErrorComponent message={'hoho'} />;
}

ReactDOM.render(styleguideContent, document.getElementById('app'));
