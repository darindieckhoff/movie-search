(function() {

'use strict';

var angular = require('angular');

angular.module('app')

.controller('favoriteCtrl', function ($scope, dataService, $http) {

  var vm = this;

  //GET favorites from db
  $http.get('/api/favorites')
    .then(function (response) {
      vm.favorites = response.data;
    })
    .catch(function (error){
      console.log(error);
    });

});

})();