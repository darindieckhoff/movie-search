(function() {
  'use strict';
  
  angular
    .module('app')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'movieCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/movie.html'
      })
      .when('/soundtrack/:id', {
        controller: 'soundtrackCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/soundtrack.html'
      })
      .when('/video/:id', {
        controller: 'videoCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/video.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
