'use strict';
//load modules
var express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  Favorite = require('./models/favorites.js').Favorite,
  path = require('path'),
  favicon = require('serve-favicon');

var app = express();
var router = express.Router();
// morgan gives us http request logging
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;

// //connect to mongo database
// mongoose.connect('mongodb://localhost/movie-search');

// var db = mongoose.connection;

// // database connection error handling
// db.on('error', function(err){
//   console.error('connection error', err);
// });

// //log successful database connection
// db.once('open', function(){
//   console.log('db connection successful');
// });

// app.use(function(req, res, next) {
//     if ('OPTIONS' == req.method) {
//       res.header('Access-Control-Allow-Origin', '*');
//       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//       res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//       res.send(200);
//     }
//     else {
//       next();
//     }
// });

app.use(favicon(path.join('./','public','images','favicon.ico')));
app.use('/', express.static('public'));

router.post('/favorites', function(req, res, next) {
  console.log('here');
  Favorite.create(req.body)
   .then(function(data){
      res.json(data);
    })
   .catch(function(error){
    return res.send(500, error);
   });
});


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json('error', {
    message: err.message,
    error: {}
  });
});

app.listen(port);
console.log('Express server is listening on port ' + port);
