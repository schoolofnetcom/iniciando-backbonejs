(function (define) {
    'use strict';
    define([
            'backbone',
            'models/task'
        ],
        function(Backbone, Task) {
            var Todos = Backbone.Collection.extend({
                model: Task
            });

            return new Todos();
        });
}(define));
