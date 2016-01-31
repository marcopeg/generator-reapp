/* eslint max-len:0 */

var _ = require('lodash');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('reducerName', {
            type: 'string',
            default: '---',
        });

    },

    prompting: {
        reducerName: function () {
            var _this = this;
            var done = this.async();

            var question = {
                type: 'input',
                name: 'reducerName',
                message: 'What is the name of the new reducer?',
                default: 'new reducer',
                when: function () {
                    return _this.reducerName === '---';
                },
            };

            function onAnswer(answers) {
                if (answers.reducerName) {
                    _this.reducerName = answers.reducerName;
                }
                done();
            }

            this.prompt(question, onAnswer);
        },

        reducerActions: function () {
            var _this = this;
            var done = this.async();

            var question = {
                type: 'confirm',
                name: 'reducerActions',
                message: 'Would you like to scaffold an "Actions File" for the reducer?',
                default: true,
                store: true,
            };

            function onAnswer(answers) {
                _this.reducerActions = answers.reducerActions;
                done();
            }

            this.prompt(question, onAnswer);
        },

        unitTests: function () {
            var _this = this;
            var done = this.async();

            var question = {
                type: 'confirm',
                name: 'unitTests',
                message: 'Would you like to scaffold "Unit Tests" for the reducer?',
                default: true,
                store: true,
            };

            function onAnswer(answers) {
                _this.unitTests = answers.unitTests;
                done();
            }

            this.prompt(question, onAnswer);
        },
    },


    writing: {
        componentTemplate: function () {
            var reducerName = _.camelCase(this.reducerName);
            var reducerFile = _.kebabCase(this.reducerName);

            var templateData = {
                reducerName: reducerName,
                reducerFile: reducerFile,
            };

            // scaffold reducer and actions
            if (this.reducerActions) {

                this.fs.copyTpl(
                    this.templatePath('reducer.js'),
                    this.destinationPath('app', 'client', 'reducers', reducerFile + '-reducer.js'),
                    templateData
                );

                this.fs.copyTpl(
                    this.templatePath('actions.js'),
                    this.destinationPath('app', 'client', 'actions', reducerFile + '-actions.js'),
                    templateData
                );

                if (this.unitTests) {
                    this.fs.copyTpl(
                        this.templatePath('reducer.spec.js'),
                        this.destinationPath('app', 'tests', 'reducers', reducerFile + '-reducer.spec.js'),
                        templateData
                    );

                    this.fs.copyTpl(
                        this.templatePath('actions.spec.js'),
                        this.destinationPath('app', 'tests', 'actions', reducerFile + '-actions.spec.js'),
                        templateData
                    );
                }

            // scaffold only the reducer
            } else {

                this.fs.copyTpl(
                    this.templatePath('reducer-no-action.js'),
                    this.destinationPath('app', 'client', 'reducers', reducerFile + '-reducer.js'),
                    templateData
                );

                if (this.unitTests) {
                    this.fs.copyTpl(
                        this.templatePath('reducer-no-action.spec.js'),
                        this.destinationPath('app', 'tests', 'reducers', reducerFile + '-reducer.spec.js'),
                        templateData
                    );
                }
            }
        },
    },

});
