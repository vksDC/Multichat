var config = {};
//Heroku assigns the value through the PORT environment variable. You cannot choose
//config.port = process.env.HTTP_PORT || process.env.PORT || 3000;
config.port = 3000;

config.audioUrl = 'http://ruhit.imgradio.pro:80/RusHit48'; //shoutcast (in .pls file)

module.exports = config;