(function (define) {
    'use strict';
    define([
            'backbone',
            'underscore',
            'jquery',
            'text!templates/tasklist_item.tmpl'
        ],
        function(Backbone, _, $, tasklist_item) {
            var TaskItem = Backbone.View.extend({
                tagName: 'li',
                template: _.template(tasklist_item),

                initialize: function() {
                    console.log('A new task has been listed');
                    this.listenTo(this.model, 'destroy', this.remove);
                },

                render: function() {
                    this.$el.html(this.template(this.model.toJSON()));

                    return this;
                },

                events: {
                    'click #destroy': 'destroyTask'
                },

                destroyTask: function() {
                    this.model.destroy();
                }

            });

            return TaskItem;
        });
}(define));
