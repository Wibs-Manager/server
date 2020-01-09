const router = require('express').Router()
const User = require('../controller/user')

router.post('/google-login', User.googleLogin)

module.exports = router