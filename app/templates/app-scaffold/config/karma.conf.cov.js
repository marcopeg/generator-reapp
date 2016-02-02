
var path = require('path');
var karmaConf = require('./karma.conf.js');

module.exports = function (config) {
    karmaConf(config);

    var webpackConfig = config.webpack;

    // -- doesn't really work yet
    // webpackConfig.module.postLoaders = [
    //     {
    //         test: /\.js$/,
    //         loader: 'isparta',
    //         exclude: /(node_modules|bower_components)/,
    //         include: path.join(process.cwd(), 'app', 'client'),
    //     },
    // ];

    // webpackConfig.isparta = {
    //     embedSource: true,
    //     noAutoWrap: true,
    //     babel: webpackConfig.babel,
    // };

    // https://github.com/deepsweet/isparta-loader
    // check this page for covering the real source code

    webpackConfig.module.postLoaders = [
        {
            test: /\.js$/,
            loader: 'istanbul-instrumenter',
            exclude: /(tests|node_modules|bower_components)/,
            include: [
                path.join(process.cwd(), 'app', 'client'),
                path.join(process.cwd(), 'app', 'plugins'),
            ],
        },
    ];

    config.set({
        webpack: webpackConfig,
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            dir: path.join(process.cwd(), 'test-coverage-report'),
            reporters: [
                { type: 'text' },
                { type: 'html' },
            ],
        },
    });
};
