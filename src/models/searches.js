'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Defines Favorites Schema
var SearchSchema = new Schema({
  title: String,
  date: Date,
  searchCount: Number
});

var Search = mongoose.model('Search', SearchSchema);

module.exports.Search = Search;
