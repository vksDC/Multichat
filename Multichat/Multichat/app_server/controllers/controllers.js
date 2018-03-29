﻿var layoutCommon = {
    foot: 'Web created for demonstration purposes',
    goAbout: 'About us',
    goHome: 'MultiChat',
    goLogin: 'Login',
    goLoout: 'Logout',
    goProfile: 'See user profile',
    goVideochat: 'Go to videochat',
    year: new Date().getFullYear()
};

module.exports.about = function (req, res, next) {
    res.render('about', {
        layoutCommon: layoutCommon,
        lang: {
            imageAlt: 'Technologies used',
            info: 'This Web has been created for demonstration purposes',
            infoLabel: 'Info',
            message: 'Some technologies that have been used are:'
                + '<br><ul>'
                + '<li><strong>WebSockets</strong> to deal with: messages (text, icons and '
                + 'pictures), drawings and presentations</li>'
                + '<li><strong>WebRTC</strong> to deal with: messages (voice and files) and '
                + 'videoconference (audio and video)</li>'
                + '<li><strong>etc...</strong> to </li>'
                + '</ul>In addition, we...',
            section: 'About',
            title: 'MultiChat: About'
        }
    });
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