angular.module('app')
.directive('soundtrack', function() {
  return {
    templateUrl: 'templates/soundtrack.html',
    controller: 'soundtrackCtrl',
    replace: true
  }
}) //end info directive