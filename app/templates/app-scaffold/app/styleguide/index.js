/**
 * The purpose of this entry point is to work on a component in isolation.
 *
 * You should create a `specs/components/ComponentSpec` file which loads
 * the component from the `app` folder and provides the initialization.
 *
 * > Providing `ComponentSpec` files within your project is also a very
 * > good way to document it efficiently!
 */

import React from 'react';
import ReactDOM from 'react-dom';

// Import here the component you are working on:
import GuideComponent from './components/HelloWorld.guide';
require('../client/index.scss');
require('./index.scss');

ReactDOM.render((<GuideComponent />), document.getElementById('app'));
