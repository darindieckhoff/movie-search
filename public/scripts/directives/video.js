angular.module('app')
.directive('video', function() {
  return {
    templateUrl: 'templates/video.html',
    controller: 'videoCtrl',
    replace: true
  }
}) //end event directive