'use strict';

var pkg = require('./package.json');

module.exports = function(grunt) {

    var buildFolder = "build/",
        buildAppFolder = "build/app/";
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({
        'http-server': {
            'dev': {
                root: "./",
                port: 8282,
                host: "0.0.0.0",
                showDir : true,
                autoIndex: true,
                ext: "html"
            },
            'prod': {
                root: "./build",
                port: 8282,
                host: "0.0.0.0",
                showDir : false,
                autoIndex: true,
                ext: "html"
            }
        },

        watch: {
            files: [
                'app/css/less/**/*.less'
            ],
            tasks: 'less:development'
        },

        less: {
            development: {
                files: {
                    'app/css/main.css': 'app/css/less/main.less'
                },
                options: {
                    sourceMap: true,
                    sourceMapFilename: 'app/css/main.css.map',
                    sourceMapRootpath: '/',
                    sourceMapURL: '/app/css/main.css.map'
                }
            },
            production: {
                files: {
                    'app/css/main.css': 'app/css/less/main.less'
                },
                options: {
                }
            }
        },

        jshint: {
            main: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: ['app/js/*']
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: 'app/js',
                    name: 'main',
                    mainConfigFile: 'app/js/main.js',
                    optimize: 'uglify2',
                    out: buildAppFolder + '/js/main.js'
                }
            }
        },

        clean:{
            build: ['build']
        },
        copy: {
            main: {
                files: [
                    {src: ['index.html'], dest: buildFolder},
                    {src: ['app/img/**'], dest: buildFolder, filter:'isFile',expand:true},
                    {src: ['app/css/main.css'], dest: buildFolder, filter:'isFile',expand:true},
                    {src: ['vendor/requirejs/require.js'], dest: buildFolder, filter:'isFile',expand:true},
                    {src: ['vendor/bootstrap/fonts/**'], dest: buildFolder, filter:'isFile',expand:true}
                ]
            }
        }
    });

    grunt.registerTask( 'serverStart:dev', ['http-server:dev']);

    grunt.registerTask( 'serverStart:prod', ['http-server:prod']);

    grunt.registerTask( 'build', ['less:production','jshint'] );

    grunt.registerTask( 'build:prod', ['build','clean:build','requirejs','copy:main'] );

    grunt.registerTask('heroku', ['build:prod']);
};

