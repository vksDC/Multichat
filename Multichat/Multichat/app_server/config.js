﻿var config = {};
//Heroku assigns the value through the PORT environment variable. You cannot choose
//config.port = process.env.HTTP_PORT || process.env.PORT || 3000;
config.port = 3000;

config.audioUrl = 'http://156.35.98.53:8001/Multichat'; //shoutcast (in .pls file)

module.exports = config;