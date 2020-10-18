var express = require('express');
var router = express.Router()
var controllers = require('./controllers')

router.post('/' , controllers.signup)

module.exports = router