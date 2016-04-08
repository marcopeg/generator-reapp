/* eslint no-process-env:0 */

var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var appEnv = require('../app/env');
var reappDevTools = require('reapp-dev-tools');

appEnv['process.env.NODE_ENV'] = '"production"';

config.entry = ['./app/client/app.prod'];

config.output.filename = 'app.min.js';
config.output.path = path.join(process.cwd(), 'dist');

config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

config.plugins = [
    new webpack.DefinePlugin(Object.assign({}, reappDevTools.json2env(appEnv), {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
    }),
];

// remove the alias to development utilities
config.resolve.alias = {
    'utils/main': 'utils/main-dist',
    'utils/store': 'utils/store-dist',
};



// remove development tools
config.devtool = null;
config.module.loaders[0].loaders = ['babel'];

module.exports = config;
