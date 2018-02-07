var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var csp = require('helmet-csp');

var compression = require('compression');

var ErrorHandler = require('express-error-handler');

var index = require('./routes/index');

var app = express();
// app.use(compression);

app.use(favicon(path.join(__dirname, '../public/assets/img/va_favicon.png')));
app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  if(req.get('X-Forwarded-Proto') === 'http') {
      res.redirect('https://' + req.get('Host') + req.url);
  }
  else
      next();
});

app.use(index);

app.use('*.html', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.htm'));
});

app.use(express.static(path.join(__dirname, '../public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var errorHandler = ErrorHandler({
  static: {
    '500': './dist/public/error.htm',
    '404': './dist/public/error.htm',
  }
}) 

app.use(errorHandler);

module.exports = app;
