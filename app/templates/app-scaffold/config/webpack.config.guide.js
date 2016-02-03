
var config = require('./webpack.config');
var reappConf = require('./reapp.conf');

config.entry = {
    guide: [
        'webpack-dev-server/client?http://' + reappConf.host + ':' + reappConf.port,
        'webpack/hot/only-dev-server',
        './lib/styleguide',
    ],
};

module.exports = config;
