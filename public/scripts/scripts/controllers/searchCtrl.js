(function() {

'use strict';

var angular = require('angular');

angular.module('app')

.controller('searchCtrl', function ($location) {

  var vm = this;

  //Redirects to /movie/:id adding input as params:id
  vm.search = function() {
    $location.url('/movie/' + vm.movieSearch);
  };

});


})();