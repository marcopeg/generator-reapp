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

    foo: function () {
        console.log('component');
    },

    prompting: {
        reducerName: function () {
            var done = this.async();
            this.prompt([{
                type: 'input',
                name: 'reducerName',
                message: 'What is the name of the new reducer?',
                default: 'new reducer',
                when: function () {
                    return this.reducerName === '---';
                }.bind(this),
            }], function (answers) {
                if (answers.reducerName) {
                    this.reducerName = answers.reducerName;
                }
                done();
            }.bind(this));
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
        },
    },

});
