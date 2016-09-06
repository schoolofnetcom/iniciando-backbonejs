(function (define) {
    'use strict';
    define([
            'backbone',
            'models/person'
        ],
        function(Backbone, Person) {
            var People = Backbone.Collection.extend({
                model: Person
            });

            return People;
        });
}(define));
