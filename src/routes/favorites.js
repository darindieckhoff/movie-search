'use strict';

var express = require('express');
var router = express.Router();
var Favorite = require('../models/favorites').Favorite;

//POST favorite to db
router.post('/api/favorites', function (req, res, next){
  var favorite = new Favorite(req.body);
  course.save(function(err, user){
    if (err) return next(err);
    res.status(201);
    res.end();
  });
});

//GET favorites from db
router.get('/api/favorites', function (req, res, next){
  Favorite.find({}, function (err, data) {
    if (err) return next(err);
    if (!data) {
      err= new Error('Not Found');
      err.status = 404;
      return next(err);
    }
    res.json(data);
  });
});

module.exports = router;