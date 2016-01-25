
var config = require('./webpack.config');
var serverConf = require('./server.conf');

config.entry = {
    guide: [
        'webpack-dev-server/client?http://' + serverConf.host + ':' + serverConf.port,
        'webpack/hot/only-dev-server',
        './app/styleguide/index',
    ],
};

module.exports = config;
