(function() {

'use strict';

var angular = require('angular');

angular.module('app')

.controller('videoCtrl', function ($http, $routeParams, dataService) {

  var vm = this;

  //set search params ('trailer' added for better results)
  var params = {'part': 'snippet', 'q': $routeParams.id + ' trailer', 'order': 'viewCount', 'maxResults': '12', 'type': 'video', 'key': 'AIzaSyAijyLR_0tU9NqhBgzkRZF5KdDyAVvZNcg'}
  
  //serialized representation for API GET request
  var query = jQuery.param(params);

  //GET video info from Youtube API
  $http.get('https://www.googleapis.com/youtube/v3/search?' + query)
    .then(function (response) {
      vm.videos = response.data.items;
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