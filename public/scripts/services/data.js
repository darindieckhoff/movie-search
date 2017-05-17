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

    this.saveSearch = function(data, callback, errorCallback) {
      $http.get('/api/searches', data)
      .then(callback, errorCallback);
    };

    //returns user back to search movie  
    this.return = function(movie) {
      $location.url('/movie/' + movie);
    };

  });

})();