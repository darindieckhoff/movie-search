(function() {
  'use strict';
  
  var angular = require('angular');
  
  // Configure routes for application.
  
  // Routes are configured below:
  // 1) The root of the application "/" which serves up the "search" view.
  // 2) The recipe edit route "movie/:id" which serves up the "movie" view.
  // 3) The recipe edit route "/soundtrack/:id" which serves up the "soundtrack" view.
  // 3) The recipe edit route "m/video/:id" which serves up the "video" view.
  // 3) The recipe edit route "/favorites" which serves up the "favorites" view.

  angular
    .module('app')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'searchCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/search.html'
      })
      .when('/movie/:id', {
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
      .when('/favorites', {
        controller: 'favoriteCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/favorites.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
