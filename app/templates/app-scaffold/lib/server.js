/**
 * Reapp Development Server
 *
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('../config/webpack.config');
var reappCfg = require('../config/reapp.conf');
var appEnv = require('../app/env');

/* reapp: start */
var reapp = require('reapp-dev-tools/lib/server/reapp');
reapp.init(process.cwd(), reappCfg);

// run styleguide
if (reapp.isStyleguideActive()) {
    appEnv.__STYLEGUIDE__ = JSON.stringify(reapp.getStyleguideInfo());
    webpackConfig = require('../config/webpack.config.guide');
    webpackConfig.plugins.map(function (plugin) {
        if (plugin instanceof webpack.DefinePlugin) {
            return new webpack.DefinePlugin(appEnv);
        }
        return plugin;
    });
}

// run dev-server
new WebpackDevServer(
    webpack(webpackConfig),
    reapp.config(webpackConfig.devServer)
).listen(reappCfg.port, reappCfg.host, reapp.callback);
