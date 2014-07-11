'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('author', 'Yogesh Joshi')
  .factory('DATA', function($http){
      return {
          getData: $http.get('/app/data.json')
      }
});

