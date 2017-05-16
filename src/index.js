'use strict';

/**----------------------------------------------------------------------
 * @author:  Darin Dieckhoff
 * Date:    May 14, 2017
 ---------------------------------------------------------------------**/

//load modules
var express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  seeder = require('mongoose-seeder'),
  data = require('./data/data.json'),
  path = require('path'),
  favicon = require('serve-favicon'),
  searches = require('./routes/searches');

var app = express();
var router = express.Router();

// morgan gives us http request logging
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 3000;

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
    seeder.seed(data, {dropDatabase: true})
      .then(function() {
      console.log('Database Seeded');
      }).catch(function(err) {
      console.log(err);
      });
  });

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept');
  if(req.method === "OPTIONS") {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
    return res.status(200).json({});
  }
  next();
});

// setup our static route to serve files from the "public" folder
app.use(favicon(path.join('./','public','images','favicon.ico')));
app.use('/', express.static('public'));

//setup the routes
app.use('/api/searches', searches);

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

// start listening on our port
app.listen(port);
console.log('Express server is listening on port ' + port);

module.exports = app;