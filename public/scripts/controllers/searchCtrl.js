(function() {

'use strict';

angular.module('app')

.controller('searchCtrl', function ($location, dataService) {

  var vm = this;

  //Redirects to /movie/:id adding input as params:id
  vm.search = function() {
    var config = {
      headers : {
          "Content-Type": "application/json;"
      }
    };
    dataService.saveSearch(vm.movieSearch, config,
      function (response) {
        console.log(response);
      }, 
      function (error) {
        console.log(error);
      });
    $location.url('/movie/' + vm.movieSearch);
  };

});


})();