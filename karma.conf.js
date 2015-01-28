// Karma configuration
// Generated on Fri Jan 16 2015 21:47:18 GMT+0100 (Mitteleuropäische Zeit)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["qunit", "requirejs"],


    // list of files / patterns to load in the browser
    files: [
      "tests-main.js",
      {pattern: "src/*.js", included: false},
      {pattern: "test/*.js", included: false}
    ],


    // list of files to exclude
    exclude: [
        "src/main.js"
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        "src/**/*.js": ["coverage"]
    },


    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress", "dots", "junit", "coverage"],

    junitReporter: {
        outputFile: "./build/test-results.xml",
        suite: ""
    },

    coverageReporter: {
        type: "cobertura",
        dir: "build/coverage/",
        file: "coverage.xml"
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["PhantomJS"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
