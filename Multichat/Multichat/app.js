"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV != 'production') {
    require('dotenv').load();
}
var express = require("express");
var path = require("path");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');
require('./app_api/models/db');
var routesApi = require('./app_api/routes/routes');
var routesServer = require('./app_server/routes/routes');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');
//initial setups 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//folders in which there will be static files in the project
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'app_client')));
app.use(express.static(path.join(__dirname, 'presentations')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use('/api', routesApi);
app.use('/', routesServer);
// error 404
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    err['imageSrc'] = 'error-404.png';
    err['imageAlt'] = 'Error 404';
    err['stack'] = (process.env.NODE_ENV == 'development') ? err.stack : '';
    next(err);
    res.end();
});
// otros errores
app.use(function (err, req, res, next) {
    console.log("*** ERROR GENERICO: " + err);
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
    res.end();
});
var httpsServer = require('./app_server/servers/http.js')(app);
require('./app_server/servers/websockets.js')(httpsServer);
//# sourceMappingURL=app.js.map