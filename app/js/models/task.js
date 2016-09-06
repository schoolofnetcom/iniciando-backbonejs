(function (define) {
    'use strict';
    define([
            'backbone'
        ],
        function(Backbone) {
            var Task = Backbone.Model.extend({
                defaults  : {
                    title : ''
                }
            });

            return Task;
        });
}(define));
