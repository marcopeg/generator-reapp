/**
 * Reapp Development Server
 *
 */

/* eslint no-process-env:0, quote-props:0 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var reappDevTools = require('reapp-dev-tools');

var webpackConfig = require('../config/webpack.config');
var reappCfg = require('../config/reapp.conf');
var appEnv = require('../app/env');

/* reapp: start */
var reapp = require('reapp-dev-tools/lib/server/reapp');
reapp.init(process.cwd(), reappCfg);

// run styleguide
if (reapp.isStyleguideActive()) {
    webpackConfig = require('../config/webpack.config.guide');
    webpackConfig.plugins = webpackConfig.plugins.map(function (plugin) {
        if (plugin instanceof webpack.DefinePlugin) {
            return new webpack.DefinePlugin(Object.assign({}, reappDevTools.json2env(appEnv), {
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                '__STYLEGUIDE__' : JSON.stringify(reapp.getStyleguideInfo()),
            }));
        }
        return plugin;
    });
}

// run dev-server
reapp.start(webpackConfig);
