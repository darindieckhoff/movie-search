(function() {

'use strict';

var angular = require('angular');

angular
    .module('app', [
        'ngRoute'
    ]);

require('./scripts/controllers/searchCtrl.js');
require('./scripts/controllers/movieCtrl.js');
require('./scripts/controllers/soundtrackCtrl.js');
require('./scripts/controllers/videoCtrl.js');
require('./scripts/controllers/favoriteCtrl.js');
require('./scripts/directives/searchCtrl.js');
require('./scripts/directives/movieCtrl.js');
require('./scripts/directives/soundtrackCtrl.js');
require('./scripts/directives/videoCtrl.js');
require('./scripts/directives/favoriteCtrl.js');
require('./scripts/route-config.js');

})();