var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var appEnv = require('../app/env');

appEnv['process.env.NODE_ENV'] = '"production"';

config.entry = ['./app/client/app.prod'];

config.output.filename = 'app.min.js';
config.output.path = path.join(process.cwd(), 'dist');

config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

config.plugins = [
    new webpack.DefinePlugin(appEnv),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
    }),
];

// remove development tools
config.devtool = null;
config.module.loaders[0].loaders = ['babel'];

module.exports = config;
