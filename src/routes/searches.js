'use strict';

var express = require('express');
var router = express.Router();
var Search = require('../models/searches').Search;

//GET favorites from db
router.get('/api/searches', function (req, res, next){
  Search.find({}, function (err, data) {
    if (err) return next(err);
    if (!data) {
      err= new Error('Not Found');
      err.status = 404;
      return next(err);
    }
    res.json(data);
  });
});

//adds  to db
router.post('/api/searches', function (req, res, next) {
  Search.findOne({ title: req.body })
    .exec(function(err, data) {
      if (!data) {
        var searchData = {
          title: req.body,
          date: new Date(),
          searchCount: 1
        };
        var search = new Search(searchData);
        search.save(function(err, user){
          if (err) return next(err);
          res.send("Search added!");
        });
      } else {
        data.searchCount ++;
        data.date = new Date();
        data.save(function(err, data) {
          if (err) return next(err);
          res.send("Searc Updated");
        });
      }
    })
})

  // .post('/api/searches', function (req, res, next){
  //   var search = new Search(req.body);
  //   search.save(function(err, user){
  //     if (err) return next(err);
  //     res.json({message: "Search added!"});
  //   });
  // });

module.exports = router;