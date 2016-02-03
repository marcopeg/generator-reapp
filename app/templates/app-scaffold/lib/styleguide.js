/**
 * Reapp Styleguide
 *
 */

// customize the styleguide here
var styleguideTargetEl = document.getElementById('app');
var reappConf = require('../config/reapp.conf');

// import app's stylesheet
require('../app/client/index.scss');

/* globals __STYLEGUIDE__ */
var styleguideInfo = __STYLEGUIDE__;

import {
    renderMultiComponents,
    renderStyleguideInfo,
} from 'reapp-dev-tools';

try {
    renderMultiComponents(
        styleguideTargetEl,
        styleguideInfo.cwd,
        styleguideInfo.components.map(function (component) {

            var StyleguidePage;
            if (component.plugin) {
                /* eslint-disable */
                StyleguidePage = require('../app/plugins/' + component.plugin + '/styleguide/' + component.guideFile);
                /* eslint-enable */
            } else {
                StyleguidePage = require('../app/styleguide/' + component.guideFile);
            }

            return {
                name: component.guideFile,
                def: StyleguidePage,
                info: component,
            };
        }),
        styleguideInfo.sources,
        reappConf.appName
    );
} catch (e) {
    renderStyleguideInfo(
        styleguideTargetEl,
        styleguideInfo.cdw,
        e,
        reappConf.appName
    );
}

