var _ = require('lodash');
var fs = require('fs-extra');
var path = require('path');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('appname', {
            type: 'string',
            default: '---',
        });

    },

    prompting: {

        appName: function () {
            var done = this.async();
            this.prompt([{
                type: 'input',
                name: 'appname',
                message: 'What is the name of your app?',
                default: 'Rekit App',
                when: function () {
                    return this.appname === '---';
                }.bind(this),
            }], function (answers) {
                if (answers.appname) {
                    this.appname = answers.appname;
                }
                done();
            }.bind(this));
        },

        npmSetup: function () {

            this.log('##');
            this.log('## Now I am going to ask you how to setup the project\'s dependencies:');
            this.log('##');

            var done = this.async();
            this.prompt([{
                type: 'confirm',
                name: 'npm-default',
                message: 'Do you want me to install the "Basic Dependencies" for you?',
                default: true,
                store: true,
            }, {
                type: 'confirm',
                name: 'npm-tdd',
                message: 'Do you want me to install "Test Suite" dependencies for you?',
                default: false,
                store: true,
                when: function (answers) {
                    return answers['npm-default'];
                },
            }, {
                type: 'confirm',
                name: 'npm-cov',
                message: 'Do you want me to install "Code Coverage" dependencies for you?',
                default: false,
                store: true,
                when: function (answers) {
                    return answers['npm-tdd'];
                },
            }], function (answers) {
                this.npmConfig = answers;
                done();
            }.bind(this));
        },
    },

    writing: {

        makeProjectFolder: function () {
            this.destinationRoot(_.kebabCase(this.appname));
        },

        copyStaticFiles: function () {
            var done = this.async();
            fs.copy(this.templatePath('app-scaffold'), this.destinationPath(), done);
        },

        copyTemplateFiles: function () {

            var templates = [
                'package.json',
                'README.md',
                'config/client.html',
                'config/guide.html',
                'dist/index.html',
                'app/styleguide/index.js',
            ];

            var templateData = {
                appName: this.appname,
                moduleName: _.kebabCase(this.appname),
            };

            templates.forEach(function (template) {
                this.fs.copyTpl(
                    this.templatePath(path.join('app-templates', template)),
                    this.destinationPath(template),
                    templateData
                );
            }.bind(this));
        },
    },

    install: {

        npmBase: function () {
            if (!this.npmConfig['npm-default']) {
                return;
            }
            this.log('Now we are going to install all the "Development Dependencies"...');
            this.log('You\'d better take a coffee now!');
            this.npmInstall();
        },

        npmTdd: function () {
            if (!this.npmConfig['npm-tdd']) {
                return;
            }
            this.log('Now we are going to install all the "Test Suite" dependencies...');
            this.log('You\'d better take ANOTHER BIG CUP OF COFFEE!');
            this.spawnCommand('npm', ['run', 'install-tdd']);

            // test coverage is another optional install.
            if (this.npmConfig['npm-cov']) {
                this.spawnCommand('npm', ['run', 'install-cov']);
            }
        },
    },

});
