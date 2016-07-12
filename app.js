var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var cors = require('cors');

var PORT = process.env.port || 7000;

/*
*Initialize models
*
*/
var models = require('./models/models.js');

/*
*Initialize routes
*
*/
var index = require('./routes/index');
var api = require('./routes/api');

/*
*Initialize database driver
* connect to mongodb
*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/article');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(cors({origin: 'http://localhost:7000'}));
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//set a temporary session
app.use(session({
    secret: 'secretkey'
}));


//declaring routes
app.use('/', index);
app.use('/api', api);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
});

module.exports = app;
