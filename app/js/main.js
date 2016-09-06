(function (requirejs) {
    'use strict';
    requirejs.config({
        baseUrl : '/app/js',
        paths: {
            /* Core Libraries */
            jquery: '../../vendor/jquery/dist/jquery',
            underscore: '../../vendor/underscore/underscore',
            backbone: '../../vendor/backbone/backbone',
            text:     '../../vendor/requirejs-text/text',
            localstorage: '../../vendor/backbone.localStorage/backbone.localStorage',

            /* Client-side Templates (Handlebars) */
            templates: '../templates'
        },
        shim: {
            underscore: {
                exports: '_'
            },
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            localstorage: {
                deps: ['backbone'],
                exports: 'localstorage'
            }
        }
    });

    requirejs(['app'], function (app) {
        app.init();
    });
}(requirejs));