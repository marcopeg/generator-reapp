/* eslint max-len:0 */

var _ = require('lodash');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('componentName', {
            type: 'string',
            default: '---',
        });

        if (this.componentName !== '---') {
            this.componentName = _.upperFirst(_.camelCase(this.componentName));
        }

    },

    prompting: {
        componentName: function () {
            var _this = this;
            var done = this.async();

            var question = {
                type: 'input',
                name: 'componentName',
                message: 'What is the name of the new component?',
                default: 'NewComponent',
                when: function () {
                    return this.componentName === '---';
                }.bind(this),
            };

            function onAnswer(answers) {
                if (answers.componentName) {
                    _this.componentName = _.upperFirst(_.camelCase(answers.componentName));
                }
                done();
            }

            this.prompt(question, onAnswer);
        },

        componentTest: function () {
            var _this = this;
            var done = this.async();

            var question = {
                type: 'confirm',
                name: 'componentTest',
                message: 'Do you want to scaffold a unit test for ' + this.componentName + '?',
                default: true,
                store: true,
            };

            function onAnswer(answers) {
                _this.componentTest = answers.componentTest;
                done();
            }

            this.prompt(question, onAnswer);
        },

        componentGuide: function () {
            var _this = this;
            var done = this.async();

            var question = {
                type: 'confirm',
                name: 'componentGuide',
                message: 'Do you want to scaffold a Styleguide page for ' + this.componentName + '?',
                default: true,
                store: true,
            };

            function onAnswer(answers) {
                _this.componentGuide = answers.componentGuide;
                done();
            }

            this.prompt(question, onAnswer);
        },
    },

    writing: {
        componentTemplate: function () {
            var componentName = this.componentName;
            var fileName = componentName + '.js';

            var templateData = {
                componentName: componentName,
            };

            this.fs.copyTpl(
                this.templatePath('Component.js'),
                this.destinationPath('app', 'client', 'components', fileName),
                templateData
            );
        },

        specTemplate: function () {
            if (!this.componentTest) {
                return;
            }

            var componentName = this.componentName;
            var fileName = componentName + '.spec.js';

            var templateData = {
                componentName: componentName,
            };

            this.fs.copyTpl(
                this.templatePath('Component.spec.js'),
                this.destinationPath('app', 'tests', 'components', fileName),
                templateData
            );
        },

        guideTemplate: function () {
            if (!this.componentGuide) {
                return;
            }

            var componentName = this.componentName;
            var fileName = componentName + '.guide.js';

            var templateData = {
                componentName: componentName,
            };

            this.fs.copyTpl(
                this.templatePath('Component.guide.js'),
                this.destinationPath('app', 'styleguide', fileName),
                templateData
            );
        },
    },

    end: {
        sayGoodbye: function () {
            this.log('');
            this.log('# --------------------------');
            this.log('#  Your component is ready!');
            this.log('# -------------------------- ');
            this.log('#');
            this.log('# Use your component in the App:');
            this.log('# import { ' + this.componentName + ' } from \'components/' + this.componentName + '\';');
            if (this.componentGuide) {
                this.log('#');
                this.log('# Work on your component:');
                this.log('# npm start ' + this.componentName);
            }
            this.log('#');
            this.log('');
        },
    },

});
