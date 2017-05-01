(function() {
  'use strict';
  
  angular
    .module('app')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'infoCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/info.html'
      })
      .when('/weather', {
        controller: 'weatherCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/weather.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
