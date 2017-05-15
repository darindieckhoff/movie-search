'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Defines Favorites Schema
var FavoriteSchema = new Schema({
  title: String,
  year: String,
  id: String,
  poster: String
});

var Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports.Favorite = Favorite;
