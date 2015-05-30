module.exports = function (config) {
    config.set({

        preprocessors: {
            'app/src/users/**/*.html': ['ng-html2js']
        },

        basePath: '../../',
        urlRoot: '/',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-aria/angular-aria.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-material/angular-material.js',
            'app/bower_components/angular-animate/angular-animate.js',
            'app/src/main.js',
            'app/src/**/*.js',
            'test/**/*.spec.js',
            'app/src/users/**/*.html'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-ng-html2js-preprocessor',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'app/',
            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            moduleName: 'user.templates'
        }

    });
};
