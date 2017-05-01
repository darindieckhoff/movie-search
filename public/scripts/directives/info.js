angular.module('app')
.directive('info', function() {
  return {
    templateUrl: 'templates/info.html',
    controller: 'infoCtrl',
    replace: true
  }
}) //end info directive