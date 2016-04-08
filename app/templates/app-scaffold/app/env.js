/**
 * Environment Variables
 * this files contains development settings that are shared across the team
 *
 * if you need to create local settings that will not be pushed in github
 * create an `env.local.js` and exports your custom settings as it follows:
 */

/**
 * Production Settings
 */

var APP_ENV = {
    BASE_PATH: '/',
};

/**
 * Development settings
 */

/* eslint no-process-env:0 */
if (process.env.NODE_ENV === 'development') {
    APP_ENV = Object.assign({}, APP_ENV, {
        BASE_PATH: '/dist/',
    });
}

/**
 * Personal settings override
 * (env.local.js is present)
 */

var fs = require('fs');
var path = require('path');

if (fs.existsSync(path.join(__dirname, 'env.local.js'))) {
    APP_ENV = require('./env.local');
}

/**
 * Export the computed environment variables
 */

module.exports = APP_ENV;
