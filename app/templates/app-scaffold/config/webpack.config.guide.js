
var config = require('./webpack.config');

config.entry = {
    guide: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/styleguide/index',
    ],
};

module.exports = config;
