// Karma configuration
// Generated on Tue Sep 15 2015 15:29:03 GMT+0200 (CEST)

var webpackConfig = require('./webpack.config.js');
delete (webpackConfig.entry);
delete (webpackConfig.output);
delete (webpackConfig.plugins);

webpackConfig.devtool = 'inline-source-map';
webpackConfig.module.loaders[0].loaders = ['babel'];

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['es5-shim', 'mocha', 'chai', 'sinon'],


        // list of files / patterns to load in the browser
        files: [
            '../node_modules/react/dist/react.js',
            '../app/tests/**/*.spec.js',
            '../app/plugins/*/tests/**/*.spec.js',
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '../app/tests/**/*.spec.js': ['webpack', 'sourcemap'],
            '../app/plugins/*/tests/**/*.spec.js': ['webpack', 'sourcemap'],
        },

        webpack: webpackConfig,
        webpackServer: {
            noInfo: true,
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN ||
        // config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
    });
};
