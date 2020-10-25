var express = require('express');
var router = express.Router()
var controllers = require('./controllers')

router.post('/signup' , controllers.signup)
router.post('/signin' , controllers.signin)
router.post('/add/:userName' , controllers.addTask)
router.post('/remove/:userName' , controllers.removeTask)
router.get('/:userName' , controllers.allTasks)

module.exports = router