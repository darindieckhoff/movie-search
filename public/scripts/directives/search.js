angular.module('app')
.directive('search', function() {
  return {
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl',
    replace: true
  }
}) //end weather directive