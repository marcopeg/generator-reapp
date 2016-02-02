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

// customize the styleguide here
var appName = '<%= appName %>';
var styleguideTargetEl = document.getElementById('app');

// import app's stylesheet
require('../client/index.scss');

/* globals __STYLEGUIDE__ */
var styleguideInfo = __STYLEGUIDE__;

import {
    renderMultiComponents,
    renderStyleguideInfo,
} from 'reapp-dev-tools';

try {
    renderMultiComponents(
        styleguideTargetEl,
        styleguideInfo.cdw,
        styleguideInfo.components.map(function (component) {

            var StyleguidePage;
            if (component.plugin) {
                /* eslint-disable */
                StyleguidePage = require('../plugins/' + component.plugin + '/styleguide/' + component.guideFile);
                /* eslint-enable */
            } else {
                StyleguidePage = require('./' + component.guideFile);
            }

            return {
                name: component.guideFile,
                def: StyleguidePage,
            };
        }),
        styleguideInfo.sources,
        appName
    );
} catch (e) {
    renderStyleguideInfo(
        styleguideTargetEl,
        styleguideInfo.cdw,
        e,
        appName
    );
}
