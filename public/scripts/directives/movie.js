angular.module('app')
.directive('movie', function() {
  return {
    templateUrl: 'templates/movieInfo.html',
    controller: 'movieCtrl',
    replace: true
  }
}) //end weather directive