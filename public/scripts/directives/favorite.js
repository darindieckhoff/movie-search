angular.module('app')
.directive('favorite', function() {
  return {
    templateUrl: 'templates/favorite.html',
    controller: 'favoriteCtrl',
    replace: true
  }
}) //end info directive