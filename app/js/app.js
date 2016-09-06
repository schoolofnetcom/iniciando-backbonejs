(function (define) {
  'use strict';
  define([
        'views/tasklist'
        // 'views/hello',
        // 'models/person',
        // 'collections/people'
      ],
      function(tasklist){
        var App = {
          init: function() {
              new tasklist();
              // var person1 = new person();
              //
              // person1.set({
              //     name: 'Leonan',
              //     lastname: 'Luppi',
              //     age: 20
              // });
              //
              // var person2 = new person();
              //
              // person2.set({
              //     name: 'Leonan',
              //     lastname: 'Luppi',
              //     age: 20
              // });
              //
              // var list = new people([person1, person2]);
              //
              // console.log(list.models);
          }
        };
        return App;
      });
}(define));
