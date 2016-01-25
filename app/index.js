var _ = require('lodash');
var fs = require('fs-extra');
var path = require('path');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('appname', {
            type: 'string',
            default: 'Rekit App',
        });

    },

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

    install: function () {
        this.log('Now we are going to install all the dev dependencies...');
        this.log('You\'d better take a coffee now!');
        this.npmInstall();
    },

});
