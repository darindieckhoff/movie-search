(function() {

'use strict';

angular.module('app')

.controller('movieCtrl', function ($http, dataService, $location, $routeParams) {

  var vm = this;

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

  vm.addFavorite = function(movie) {
    var data = {
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      poster: movie.Poster
    };

    var config = {
      headers : {
          "Content-Type": "application/json; charset = utf-8;"
      }
    };

    $http.post('/favorites', data, config)
      .then(function (response) {
       console.log('favorite added');
      })
      .catch(function (error) {
        console.log(error);
      }); 

  };

});


})();