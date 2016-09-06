(function (define) {
    'use strict';
    define([
            'backbone',
            'underscore',
            'jquery',
            'text!templates/hello.tmpl'
        ],
        function(Backbone, _, $, tmpl) {
            var Hello = Backbone.View.extend({
                el: $('body'),
                template: _.template(tmpl),

                initialize: function() {
                    _.bindAll(this, 'render');

                    this.render();
                },

                render: function() {
                    var html = this.template();
                    this.$el.html(html);

                    return this;
                },

                events: {
                    'click .submit_me_btn': 'submit',
                    'click .reset_me_btn': 'reset'
                },

                submit: function(event) {
                    event.preventDefault();

                    console.log($('.txt_name').val(), $('.txt_lastname').val());
                },

                reset: function(event) {
                    $('.txt_name').val('');
                    $('.txt_lastname').val('');
                }
                // el: $('#form'),
                //
                // initialize: function() {
                //     _.bindAll(this, 'render');
                //
                //     this.render();
                // },
                //
                // render: function() {
                //     $(this.el).append('Hello world SON!!!');
                // },
                //
                // events: {
                //     'click #click_me': 'click_me'
                // },
                //
                // click_me: function() {
                //     var inputTxt = $('#textinpt').val();
                //
                //     console.log('Value -> ', inputTxt);
                // }
            });

            return Hello;
        });
}(define));
