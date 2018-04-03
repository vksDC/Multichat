var mongoose = require('mongoose');
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
    password: String
//    hash: String,
//    salt: String
});

// contraseñas
userSchema.methods.setPassword = function (password) {
    //this.salt = crypto.randomBytes(16).toString('hex');
    //this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    this.password = password;
};

userSchema.methods.validPassword = function (password) {
    //var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    //return this.hash === hash;
    return this.password === password;
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
    //return jwt.encode(payload, process.env.JWT_SECRET);
    return jwt.encode(payload, secret);
};

mongoose.model('User', userSchema);
