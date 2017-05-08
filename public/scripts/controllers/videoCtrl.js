(function() {

'use strict';

angular.module('app')
.controller('videoCtrl', function ($scope, $http, $routeParams) {

  var params = {'q': $routeParams.id, 'chart': 'mostPopular'}
  var query = jQuery.param(params);

  var data = {q: $routeParams.id, chart: 'mostPopular'};

  $http.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
        //key: "API_KEY",
        type: 'video',
        maxResults: '12',
        //pageToken: $scope.nextPage ? $scope.nextPage : '',
        //part: 'id,snippet',
        //fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken,prevPageToken',
        q: $routeParams.id
    }
    .then (function (response) {
      console.log(response);
    })
  });

});

})();