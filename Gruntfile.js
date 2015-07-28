'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);


    // Define the configuration for all the tasks
    grunt.initConfig({
        karma: {
            ci: {
                configFile: 'testsUnit/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'ERROR'
            },
            tdd: {
                configFile: 'testsUnit/karma.conf.js',
                browsers: ['PhantomJS'],
                autoWatch: true
            }
        }
    });


    grunt.registerTask('unit', ['karma:tdd']);


};
