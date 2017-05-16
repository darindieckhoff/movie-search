(function() {

'use strict';

angular.module('app')

.controller('recentSearchesCtrl', function ($scope, dataService, $http) {

  var vm = this;

  //GET favorites from db
  $http.get('/api/searches')
    .then(function (response) {
      vm.searches = response;
    })
    .catch(function (error){
      console.log(error);
    });

});

})();