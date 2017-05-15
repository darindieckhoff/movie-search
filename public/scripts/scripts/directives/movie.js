var angular = require('angular');

angular.module('app')
.directive('movie', function() {
  return {
    templateUrl: 'templates/movie.html',
    controller: 'movieCtrl',
    replace: true
  }
}) //end weather directive