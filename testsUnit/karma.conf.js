module.exports = function (config) {
    config.set({
        basePath: '../www',
        frameworks: ['jasmine'],

        files: [
            'lib/ionic/js/angular/angular.js',
            '../testsUnit/angular-mocks.js',
            'js/MyersData.js',
            '../testsUnit/app.js',
            'js/services/*.js',
            '../testsUnit/tests/*.js'
        ],
        reporters: ['dots', 'coverage'],
        browsers: ['PhantomJS'],

        preprocessors: {
            'js/services/*.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: '../testsUnit/reports/coverage/',
            subdir: '.'
        }

    });
};
