var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/controllers');

router.get('/', ctrlMain.index);

module.exports = router;