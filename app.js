
/**
 * Module dependencies
 */

var express = require('express'),
  // connect = require('connect'), //midleware change //maybe unused
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('express-error-handler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
<<<<<<< HEAD
  path = require('path'),
  open = require("open");
=======
  path = require('path');
>>>>>>> c7c7e25c8a5e52436686d4f454fc2dfd72e6ca36

var app = module.exports = express();
//var app = connect();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: true })); //untest
app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler({ dumpExceptions: true, showStack: true })); //new error handler
  // app.use(errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
<<<<<<< HEAD
// open("http://localhost:"+app.get('port'));
=======
>>>>>>> c7c7e25c8a5e52436686d4f454fc2dfd72e6ca36
