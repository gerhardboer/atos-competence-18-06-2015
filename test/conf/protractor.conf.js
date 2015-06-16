var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');


exports.config = {
    rootElement: 'body',

    allScriptsTimeout: 110000,

    specs: [
        '../e2e/**/*.spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:9001',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    chromeOnly: true,
    chromeDriver: '../../node_modules/protractor/selenium/chromedriver',
    seleniumServerJar: '../../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new HtmlScreenshotReporter({
                dest: 'target/screenshots',
                filename: 'report.html'
            })
        );
    }
};
