'use strict';
//load modules
var express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;

app.use('/', express.static('public'));

app.listen(port);
console.log('Magic happens on port ' + port);
