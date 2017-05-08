(function() {

'use strict';

angular.module('app')

.controller('soundtrackCtrl', function ($routeParams, $http, dataService) {

  var vm = this;

  var params = {'q': $routeParams.id + ' soundtrack', 'type': 'track'}
  var query = jQuery.param(params);

  $http.get('https://api.spotify.com/v1/search?' + query)
    .then(function (response) {
      vm.tracks = response.data.tracks.items;
    })
    .catch(function (error) {
      console.log(error);
    }); 
});


})();