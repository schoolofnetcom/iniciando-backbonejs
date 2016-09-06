(function (define) {
    'use strict';
    define([
            'backbone'
        ],
        function(Backbone) {
            var Person = Backbone.Model.extend({
                defaults: {
                    name    : '',
                    lastname: '',
                    age     : 0
                },

                initialize: function() {
                    this.on('change:age', function(model) {
                        var age = model.get('age');
                        alert('Age changed -> ' + age);
                    });
                },

                newAge: function(new_age) {
                    this.set({
                        age: new_age
                    });
                }
            });

            return Person;
        });
}(define));
