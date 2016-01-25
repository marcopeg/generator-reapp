var _ = require('lodash');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('componentName', {
            type: 'string',
            default: '---',
        });

    },

    foo: function () {
        console.log('component');
    },

    prompting: {
        componentName: function () {
            var done = this.async();
            this.prompt([{
                type: 'input',
                name: 'componentName',
                message: 'What is the name of the new component?',
                default: 'NewComponent',
                when: function () {
                    return this.componentName === '---';
                }.bind(this),
            }], function (answers) {
                if (answers.componentName) {
                    this.componentName = answers.componentName;
                }
                done();
            }.bind(this));
        },
    },

    writing: {
        componentTemplate: function () {
            var componentName = _.upperFirst(_.camelCase(this.componentName));
            var fileName = componentName + '.js';

            var templateData = {
                componentName: componentName,
            };

            this.fs.copyTpl(
                this.templatePath('component.js'),
                this.destinationPath('app', 'client', 'components', fileName),
                templateData
            );
        },
    },

});
