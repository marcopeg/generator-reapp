/* eslint max-len:0 */

var _ = require('lodash');
var fs = require('fs-extra');
var path = require('path');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);

        this.containerName = 'App';
        this.historyType = 'browserHistory';
    },

    prompting: {
        history: function () {
            var done = this.async();
            this.prompt([{
                type: 'list',
                name: 'historyType',
                message: 'Which history support would you like to implement?',
                choices: [
                    'HTML5 PushState',
                    'Url Hash',
                ],
                default: 'HTML5 PushState',
                save: true,
            }], function (answers) {
                if (answers.historyType === 'HTML5 PushState') {
                    this.historyType = 'browserHistory';
                } else {
                    this.historyType = 'hashHistory';
                }
                done();
            }.bind(this));
        },
    },

    writing: {
        addRoutes: function () {
            this.fs.copyTpl(
                this.templatePath('routes.js'),
                this.destinationPath('app', 'client', 'routes.js'),
                {
                    containerName: this.containerName,
                    historyType: this.historyType,
                }
            );
        },

        updateEntryPoints: function () {
            [
                'app.dev.js',
                'app.prod.js',
            ].forEach(function (entryPoint) {

                var filePath = this.destinationPath('app', 'client', entryPoint);
                var src = this.fs.read(filePath);

                src = src.replace(
                    'import { ' + this.containerName + ' } from \'containers/' + this.containerName + '\';',
                    'import routes from \'./routes\';'
                );

                src = src.replace(
                    'app={' + this.containerName + '}',
                    'routes={routes}'
                );

                this.fs.write(filePath, src);
            }.bind(this));
        },
    },

    install: {
        installingReactRouter: function () {
            this.npmInstall(['react-router'], { save: true });
        },
    },

    end: {
        sayGoodbye: function () {
            this.log('');
            this.log('#');
            this.log('# ----------------------------------');
            this.log('#  Now you can use react-router :-)');
            this.log('# ----------------------------------');
            this.log('#');
            this.log('# go and populate your route in:');
            this.log('#');
            this.log('#     app/client/routes.js');
            this.log('#');
            this.log('');
        },
    },

});
