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
            var fileName = _.kebabCase(this.reducerName) + '-reducer.js';

            var templateData = {
                reducerName: reducerName,
            };

            this.fs.copyTpl(
                this.templatePath('reducer.js'),
                this.destinationPath('app', 'client', 'reducers', fileName),
                templateData
            );
        },
    },

});
