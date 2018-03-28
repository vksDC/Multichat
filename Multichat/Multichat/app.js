"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
/*import routes from './routes/index';
import users from './routes/user';*/
var mongoose = require('mongoose'); //to connect to MongoDD
var bodyParser = require('body-parser');
var favicon = require('serve-favicon'); //to manage the favicon of the website 
var logger = require('morgan'); //to show a log with what is happening in the server 
var cookieParser = require('cookie-parser'); //to work with cookies 
var passport = require('passport'); //to work with the authentication system
var routesServer = require('./app_server/routes/routes');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');
//initial setups 
//app.use(favicon(path.join(__dirname, 'app_client', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//folders in which there will be static files in the project
app.use(express.static(path.join(__dirname, 'dist'))); // esto no se si es necesario
app.use(express.static(path.join(__dirname, 'app_client'))); // esto no se si es necesario
app.use(express.static(path.join(__dirname, 'presentations'))); // esto no se si es necesario
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use('/', routesServer); //routes for the different web pages of the site
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
//generic error handler
app.use(function (err, req, res, next) {
    res.render('error', {
        error: {
            imageSrc: err.imageSrc,
            imageAlt: err.imageAlt,
            status: err.status,
            stack: (process.env.NODE_ENV == 'development') ? err.stack : ''
        },
        lang: {
            message: err.message,
            title: 'MultiChat: Error'
        }
    });
});
var httpsServer = require('./app_server/servers/http.js')(app); //HTTP server
require('./app_server/servers/websockets.js')(httpsServer); //Websockets server
//# sourceMappingURL=app.js.map