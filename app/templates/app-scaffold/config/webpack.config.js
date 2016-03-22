var path = require('path');
var webpack = require('webpack');
var appEnv = require('../app/env');
var reappConf = require('./reapp.conf');

module.exports = {
    devtool: 'sourcemaps',
    entry: {
        app: [
            'webpack-dev-server/client?http://' + reappConf.host + ':' + reappConf.port,
            'webpack/hot/only-dev-server',
            path.join(process.cwd(), 'app/client/app.dev'),
        ],
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].js',
        publicPath: '/',
        library: 'app',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin(appEnv),
    ],
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: [
            'node_modules',
            path.join(process.cwd(), 'app', 'client'),
            path.join(process.cwd(), 'app', 'tests'),
            path.join(process.cwd(), 'app', 'plugins'),
        ],
        alias: {
            'utils/main': 'utils/main-dev',
            'utils/store': 'utils/store-dev',
        },
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /(node_modules|bower_components)/,
                include: process.cwd(),
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url!img?optimizationLevel=7',
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/font-woff',
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/font-woff',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/octet-stream',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/vnd.ms-fontobject',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=image/svg+xml',
            },
        ],
    },
    babel: {
        optional: [
            'es7.classProperties',
            'es7.decorators',
        ],
    },
    devServer: {
        hot: true,
        historyApiFallback: {
            index: '/config/client.html',
        },
        stats: {
            colors: true,
        },
    },
};
