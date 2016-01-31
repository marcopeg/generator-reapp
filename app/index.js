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
                default: 'Reapp Project',
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
            var done = this.async();
            this.prompt([{
                type: 'confirm',
                name: 'npm-default',
                message: 'Do you want me to install the "Basic Dependencies" for you?',
                default: true,
                store: true,
            }, {
                type: 'confirm',
                name: 'npm-lint',
                message: 'Do you want me to install "Linting" dependencies for you?',
                default: false,
                store: true,
                when: function (answers) {
                    return answers['npm-default'] === true;
                },
            }, {
                type: 'confirm',
                name: 'npm-tdd',
                message: 'Do you want me to install "Test Suite" dependencies for you?',
                default: false,
                store: true,
                when: function (answers) {
                    return answers['npm-default'] === true;
                },
            }, {
                type: 'confirm',
                name: 'npm-cov',
                message: 'Do you want me to install "Code Coverage" dependencies for you?',
                default: false,
                store: true,
                when: function (answers) {
                    return answers['npm-tdd'] === true;
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

        npmTimeExt: function () {
            var minutes = 0;
            if (this.npmConfig['npm-default']) {
                minutes += 4;
            }
            if (this.npmConfig['npm-lint']) {
                minutes += 1;
            }
            if (this.npmConfig['npm-tdd']) {
                minutes += 3;
            }
            if (this.npmConfig['npm-cov']) {
                minutes += 1;
            }

            if (minutes) {
                this.log('');
                this.log('#');
                this.log('# Now we are going to install NPM dependencies for your project,');
                this.log('# it\s going to take ' + minutes + '-' + (minutes + 1) + ' minutes:');
                this.log('#');
                this.log('# You\'d better take a good cup of coffee now!');
                this.log('#');
                this.log('');
            }

        },

        npmBase: function () {
            if (this.npmConfig['npm-default']) {
                this.npmInstall();
            }
        },

        npmLint: function () {
            if (this.npmConfig['npm-lint']) {
                this.spawnCommand('npm', ['run', 'install:tdd']);
            }
        },

        npmTdd: function () {
            if (this.npmConfig['npm-tdd']) {
                this.spawnCommand('npm', ['run', 'install:tdd']);
            }
            if (this.npmConfig['npm-cov']) {
                this.spawnCommand('npm', ['run', 'install:cov']);
            }
        },
    },

    end: {
        sayGoodbye: function () {
            this.log('');
            this.log('#');
            this.log('# ----------------------------------------------------------');
            this.log('#  Everything is fine and you can just work on your new App');
            this.log('# ----------------------------------------------------------');
            this.log('#');
            this.log('# cd ./' + _.kebabCase(this.appname));
            this.log('#');
            if (!this.npmConfig['npm-default']) {
                this.log('# npm run install:full   - install npm dependencies');
            }
            this.log('# npm start              - run the app');
            this.log('# npm start guide        - show the components styleguide');
            this.log('# yo reapp:component     - generate a new React component');
            this.log('#');
            this.log('# Have fun with Reapp!');
            this.log('#');
            this.log('');
        },
    },

});
