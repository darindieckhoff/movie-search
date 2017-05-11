(function() {

'use strict';

angular.module('app')

.controller('soundtrackCtrl', function ($routeParams, $http, dataService, $location) {

  var vm = this;

  var params = {'q': $routeParams.id + ' soundtrack', 'type': 'album'}
  var query = jQuery.param(params);

  $http.get('https://api.spotify.com/v1/search?' + query)
    .then(function (response) {
      vm.albums = response.data.albums.items;
    })
    .catch(function (error) {
      console.log(error);
    });

  vm.return = function() {
    console.log('click works');
    dataService.return($routeParams.id);
  };  

});


})();