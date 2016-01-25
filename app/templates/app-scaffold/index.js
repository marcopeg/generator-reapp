/**
 * Development Server
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('./config/webpack.config');
var serverCfg = require('./config/server.conf');

// detect the request to run the styleguide
var isStyleguide = process.argv.join(' ').indexOf('--guide') !== -1;

// load styleguide speciific configuration
if (isStyleguide) {
    webpackConfig = require('./config/webpack.config.guide');
    var appEnv = require('./app/env');

    var args = process.argv.slice(3);
    if (args.length) {
        appEnv.__STYLEGUIDE_COMPONENT__ = JSON.stringify(args[0]);
    } else {
        appEnv.__STYLEGUIDE_COMPONENT__ = JSON.stringify('--no-component--');
    }

    webpackConfig.plugins.map(function (plugin) {
        if (plugin instanceof webpack.DefinePlugin) {
            return new webpack.DefinePlugin(appEnv);
        }
        return plugin;
    });
}


new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
    },
    proxy: proxyTable(serverCfg.proxyHost, serverCfg.proxyPort),
}).listen(serverCfg.port, serverCfg.host, function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:' + serverCfg.port);

    if (serverCfg.proxyIsEnabled && !isStyleguide) {
        runLocalAPI();
    }
});

function proxyTable(host, port) {
    var table = {
        '/' : proxyGuideEntryPoint(),
        '/index.html' : proxyGuideEntryPoint(),
    };

    serverCfg.proxyUrls.forEach(function (url) {
        table[url] = 'http://' + host + ':' + port + '/';
    });

    Object.keys(serverCfg.proxyRules).forEach(function (key) {
        table[key] = serverCfg.proxyRules[key];
    });

    return table;
}

function proxyGuideEntryPoint() {
    return {
        bypass: function () {
            return isStyleguide ? '/config/guide.html' : '/config/client.html';
        },
    };
}


/**
 * Local Express API
 * this piece of code will start an Express project that fetches
 * router rules fom `/app/server`.
 */

function runLocalAPI() {

    var express = require('express');
    var bodyParser = require('body-parser');
    var path = require('path');
    var fs = require('fs');

    var app = express();
    app.use(bodyParser.json());

    // list here the apis you plan to use
    fs.readdirSync(path.join(__dirname, 'app', 'server'))
        .filter(i => i.substr(0, 1) !== '.')
        .filter(i => i.substr(0, 1) !== '_')
        .forEach(function (api) {
            app.use('/' + api.replace('.js', ''), require('./app/server/' + api));
        }
    );

    app.listen((serverCfg.proxyPort), function () {
        console.log(
            'Fake API /dist available at http://%s:%s',
            serverCfg.proxyHost,
            serverCfg.proxyPort
        );
    });
}
