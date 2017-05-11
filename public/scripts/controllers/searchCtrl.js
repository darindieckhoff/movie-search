(function() {

'use strict';

angular.module('app')

.controller('searchCtrl', function ($location) {

  var vm = this;

  vm.search = function() {
    $location.url('/movie/' + vm.movieSearch);
  };

});


})();