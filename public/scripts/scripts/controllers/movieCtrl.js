(function() {

'use strict';

var angular = require('angular');

angular.module('app')

.controller('movieCtrl', function ($http, dataService, $routeParams) {

  var vm = this;

  //get movie info from OMDb API based on user search input
  dataService.getMovies($routeParams.id,
    function (response) {
      vm.movies = response.data;
      var data = response.data.Search;
      data.forEach(function(movie) {
        var id = movie.imdbID;
        dataService.getMovie(id,
          function (response) {
            movie.info = response.data;
          },
          function (error) {
            console.log(error);
          });
      });
    },
    function (error) {
      console.log(error);
    });

  //POST movie data to favorite db
  vm.addFavorite = function(movie) {
    var movieData = {
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      poster: movie.Poster
    };

    //convert movieData object to JSON
    var data = angular.toJson(movieData);

    var config = {
      headers : {
          "Content-Type": "application/json;"
      }
    };
    
    dataService.addFavorite(data, config, 
      function (response) {
        console.log(response);
      }, function(error){
        console.log(error);
      }); 

  };

});


})();