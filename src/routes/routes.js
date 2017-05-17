'use strict';

var express = require('express');
var router = express.Router();
var Search = require('../models').Search;

//GET all recent seaches from db
router.get('/', function(req, res, next) {
    Search.find({}, function (err, data) {
    if (err) return next(err);
    if (!data) {
      err= new Error(' Search data not found');
      err.status = 404;
      return next(err);
    }
    res.json(data);
  });   
});

//POST search to db if document doesn't exist
//update document if search already exists in db
router.post('/:id', function (req, res, next) {
  Search.findOne({title: req.params.id}) 
    .exec(function(err, movie) {
      if (!movie) {
        var searchData = {
          title: req.params.id,
          date: new Date(),
          searchCount: 1
        };
        var search = new Search(searchData);
        search.save(function(err, data){
          if (err) return next(err);
          res.end();
        });
      } else if (movie) {
        movie.date = new Date();
        movie.searchCount ++;
        movie.save(function(err, data){
          if (err) return next(err);
          res.end();
        });
      };
    });
});

module.exports = router;
