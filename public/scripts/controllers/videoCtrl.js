(function() {

'use strict';

angular.module('app')
.controller('videoCtrl', function ($scope, $http, $routeParams) {

  var vm = this;

  var params = {'part': 'snippet', 'q': $routeParams.id + ' trailer', 'order': 'viewCount', 'maxResults': '12', 'type': 'video', 'key': 'AIzaSyAijyLR_0tU9NqhBgzkRZF5KdDyAVvZNcg'}
  var query = jQuery.param(params);

  $http.get('https://www.googleapis.com/youtube/v3/search?' + query)
    .then(function (response) {
      vm.videos = response.data.items;
    })
    .catch(function (error) {
      console.log(error);
    }); 
  });

})();