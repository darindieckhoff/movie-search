(function() {

'use strict';

angular.module('app')

.controller('searchCtrl', function ($location, dataService, $http) {

  var vm = this;

  //Redirects to /movie/:id adding input as params:id
  vm.search = function() {

    $http.post('/api/searches/' + vm.movieSearch)
    .then(function (response) {
      vm.videos = response.data.items;
    })
    .catch(function (error) {
      console.log(error);
    });

    $location.url('/movie/' + vm.movieSearch);
  };

});


})();