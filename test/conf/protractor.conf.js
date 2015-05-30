exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '../e2e/**/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:9001',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  chromeOnly: true,
  chromeDriver: '../../node_modules/protractor/selenium/chromedriver',
  seleniumServerJar: '../../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
