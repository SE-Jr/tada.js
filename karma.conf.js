const path = require('path');
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    files: [
      'test/index.js'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.test.js',
    ],


    // list of files to exclude
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.test.js': ['webpack'],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            use: { loader: 'istanbul-instrumenter-loader' },
            include: path.resolve('src'),
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
              plugins: ['transform-class-properties'],
            },
          },
          {
            test: /\.scss$/,
            use: [
              { loader: 'css-loader' },
              { loader: 'sass-loader'},
            ],
          },
        ],
      },
    },
    webpackMiddleware: {
      noInfo: true,
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'progress', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: './reports/coverage',
      'report-config': {
        html: { // any options here are valid: https://github.com/istanbuljs/istanbul-reports/blob/master/lib/html/index.js#L134-L139
        },
        lcovonly: {
          // options from here are valid: https://github.com/istanbuljs/istanbul-reports/blob/master/lib/lcovonly/index.js#L7-L10
          file: 'coverage.lcov',
        }
      },
      fixWebpackSourcePaths: true
    },

    thresholds: {
      emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
      global: { // thresholds for all files
        statements: 100,
        lines: 100,
        branches: 100,
        functions: 100
      },
      each: { // thresholds per file
        statements: 100,
        lines: 100,
        branches: 100,
        functions: 100,
      },
    },

    mochaReporter: {
      colors: {
        success: 'green',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome', 'ChromeHeadless', 'MyHeadlessChrome'],
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
