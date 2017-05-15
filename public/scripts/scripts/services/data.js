(function() {

'use strict';

angular.module('app')
  .service('dataService', function($http, $location) {

    //gets movies from OMDb API
    this.getMovies = function(movie, callback, errorCallback) {
      $http.get('http://www.omdbapi.com/?s=' + movie)
      .then(callback, errorCallback);
      };

    //gets movie plots from OMDb API for each movie
    this.getMovie = function(id, callback, errorCallback) {
      $http.get('http://www.omdbapi.com/?i=' + id)
      .then(callback, errorCallback);
      };

    //returns user back to search movie  
    this.return = function(movie) {
      $location.url('/movie/' + movie);
    };

    //POST to favorites db
    this.addFavorite = function(data, config, callback, errorCallback) {
      $http.post('/api/favorites', data, config)
      .then(callback, errorCallback);
    };

  });

})();