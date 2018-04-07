var config = {};

config.db = {};

config.db.local = 'mongodb://localhost:27017/Multichat';
config.db.test = 'mongodb://localhost:27017/Multichat';
config.db.remote = process.env.MONGO_URI;

module.exports = config;