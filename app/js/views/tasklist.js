(function (define) {
    'use strict';
    define([
            'backbone',
            'underscore',
            'jquery',
            'collections/todo',
            'views/task_item'
        ],
        function(Backbone, _, $, Todos, tasklist_item) {
            var Tasklist = Backbone.View.extend({
                el: $('body'),

                initialize: function() {
                    this.listenTo(Todos, 'add', this.addTask);
                },
                
                render: function() {

                },

                events: {
                    'click #add': 'add'
                },

                add: function() {
                    Todos.set({
                        title: $('#task').val()
                    });

                },

                addTask: function(todo) {
                    var item = new tasklist_item({
                        model: todo
                    });
                    
                    this.$el.append(item.render().el);
                }
            });

            return Tasklist;
        });
}(define));
