
angular.module('app')
.directive('recentSearches', function() {
  return {
    templateUrl: 'templates/recentSearches.html',
    controller: 'recentSearchesCtrl',
    replace: true
  }
}) //end info directive