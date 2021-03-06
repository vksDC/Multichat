﻿var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jwt-simple');
var moment = require('moment');

// usuarios
var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

// contraseñas
userSchema.methods.setPassword = function (password) {
    this.salt = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function (password) {
    this.salt = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
};

// JWT
userSchema.methods.generateJwt = function () {
    var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');
    var payload = {
        sub: {
            _id: this._id,
            userName: this.userName,
            name: this.name
        },
        iat: moment().unix(),
        exp: moment().add(14, "days").unix()
    };
    return jwt.encode(payload, secret);
};

mongoose.model('User', userSchema);
