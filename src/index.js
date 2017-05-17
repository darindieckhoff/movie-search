'use strict';

/**----------------------------------------------------------------------
 * @author:  Darin Dieckhoff
 * Date:    May 14, 2017
 ---------------------------------------------------------------------**/

//load modules
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  path = require('path'),
  favicon = require('serve-favicon'),
  routes = require('./routes/routes');

// set our port
var port = process.env.PORT || 3000;

// morgan gives us http request logging
app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect to mongo database
mongoose.connect('mongodb://localhost/movie-search');

var db = mongoose.connection;

// database connection error handling
db.on('error', function(err){
  console.error('connection error', err);
});

//log successful database connection
  db.once('open', function(){
    console.log('db connection successful');
  });

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept');
  if(req.method === "OPTIONS") {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
    return res.status(200).json({code: 'success', message:'Valid'});
  }
  next();
});

// setup our static route to serve files from the "public" folder
app.use(favicon(path.join('./','public','images','favicon.ico')));
app.use('/', express.static('public'));

//setup the routes
app.use('/api/searches', routes);

app.use('/*', function(req, res){
  res.sendFile('./public/index.html');
});

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

// start listening on our port
app.listen(port);
console.log('Express server is listening on port ' + port);

module.exports = app;