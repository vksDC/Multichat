var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/controllers');

router.get('/', ctrlMain.index);
router.get('/about', ctrlMain.about);
router.get('/index', ctrlMain.index);
router.get('/login', ctrlMain.login);
router.get('/logout', ctrlMain.logout);
router.get('/profile', ctrlMain.profile);
router.get('/register', ctrlMain.register);
router.get('/multichat', ctrlMain.multichat);

module.exports = router;