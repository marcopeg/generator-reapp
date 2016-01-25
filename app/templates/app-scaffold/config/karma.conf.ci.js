
var karmaConf = require('./karma.conf.js');

module.exports = function (config) {
    karmaConf(config);
    config.set({
        singleRun: false,
    });
};
