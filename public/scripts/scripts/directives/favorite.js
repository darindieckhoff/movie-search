var angular = require('angular');

angular.module('app')
.directive('favorite', function() {
  return {
    templateUrl: 'templates/favorites.html',
    controller: 'favoriteCtrl',
    replace: true
  }
}) //end info directive