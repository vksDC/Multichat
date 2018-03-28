module.exports.about = function (req, res, next) {
    res.render('about', {});
};

module.exports.index = function (req, res, next) {
    res.render('index', {});
};

module.exports.login = function (req, res, next) {
    res.render('login', {});
};

module.exports.logout = function (req, res, next) {
    res.render('logout', {});
};

module.exports.profile = function (req, res, next) {
    res.render('profile', {});
};

module.exports.register = function (req, res, next) {
    res.render('register', {});
};

module.exports.multichat = function (req, res, next) {
    res.render('multichat', {});
};