module.exports.about = function (req, res, next) {
    res.render('about', {});
};

module.exports.index = function (req, res, next) {
    res.render('index', {
        lang: {
            description: 'MultiChat with lots of features: texts, icons, pictures, '
                + 'voice, files, videoconference, radio and video broadcasting, collaborative '
                + 'drawing and presentations!',
            message: 'MultiChat',
            title: 'MultiChat: Home',
            feature1: {
                name: 'Messages',
                description1: 'Send and receive texts and icons',
                description2: 'Even pictures and attached files'
            },
            feature2: {
                name: 'Broadcasts',
                description1: 'Radio and video broadcasting',
                description2: 'Enjoy with your friends'
            },
            feature3: {
                name: 'Videoconferences',
                description1: 'Video and audio sharing',
                description2: 'Very scalable implementation'
            },
            feature4: {
                name: 'Drawings',
                description1: 'Collaborative drawing',
                description2: 'Different types of elements'
            },
            feature5: {
                name: 'Presentations',
                description1: 'Collaborative presentations',
                description2: 'See presentations online'
            },
            feature6: {
                name: 'Geolocalition',
                description1: 'Geolocation of users',
                description2: 'See where your friends are'
            },
            info: 'More info',
            login: 'Login',
            register: 'Register'
        }
    });
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