/**
 * Development Server
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('./config/webpack.config');
var serverCfg = require('./config/server.conf');
var appEnv = require('./app/env');

// init reapp
var reapp = require('reapp-dev-tools/lib/server/reapp');
reapp.init(__dirname, serverCfg);

// run styleguide
if (reapp.isStyleguideActive()) {
    appEnv.__STYLEGUIDE__ = JSON.stringify(reapp.getStyleguideInfo());
    webpackConfig = require('./config/webpack.config.guide');
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
).listen(serverCfg.port, serverCfg.host, reapp.callback);
