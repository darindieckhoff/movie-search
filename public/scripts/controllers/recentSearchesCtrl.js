(function() {

'use strict';

angular.module('app')

.controller('recentSearchesCtrl', function ($http) {

  var vm = this;

  //GET favorites from db
  $http.get('/api/searches')
    .then(function (response) {
      vm.searches = response.data;
    })
    .catch(function (error){
      vm.searches = error.message;
    });

});

})();