angular.module('app')
.directive('weather', function() {
  return {
    templateUrl: 'templates/weather.html',
    controller: 'weatherCtrl',
    replace: true
  }
}) //end info directive