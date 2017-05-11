(function() {

'use strict';

angular.module('app')
  .service('dataService', function($http, $location) {

    this.getMovies = function(movie, callback, errorCallback) {
      $http.get('http://www.omdbapi.com/?s=' + movie)
      .then(callback);
      };

    this.getMovie = function(id, callback, errorCallback) {
      $http.get('http://www.omdbapi.com/?i=' + id)
      .then(callback);
      };

    this.return = function(movie) {
      $location.path('/#!/movie/' + movie);
    };

  });

})();