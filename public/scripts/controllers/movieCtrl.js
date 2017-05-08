(function() {

'use strict';

angular.module('app')

.controller('movieCtrl', function ($scope, dataService) {

  var vm = this;

  vm.search = function () {
    dataService.getMovies(vm.movieSearch,
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
  }

});


})();