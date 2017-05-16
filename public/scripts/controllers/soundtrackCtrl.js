(function() {

'use strict';

angular.module('app')

.controller('soundtrackCtrl', function ($routeParams, $http, dataService) {

  var vm = this;

  //set search params ('soundtrack' added for better results)
  var params = {'q': $routeParams.id + ' soundtrack', 'type': 'album'}
  
  //serialized representation for API GET request
  var query = jQuery.param(params);

  //GET soundtrack info from Spotify API
  $http.get('https://api.spotify.com/v1/search?' + query)
    .then(function (response) {
      vm.albums = response.data.albums.items;
    })
    .catch(function (error) {
      console.log(error);
    });

  //return user to searched movie  
  vm.return = function() {
    dataService.return($routeParams.id);
  };  

});


})();