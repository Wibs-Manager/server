const router = require('express').Router()
const anime = require('./anime')
// const sign = require('../controller/sign')
// const User = require('./user')

router.get('/', (req, res)=>{

    res.status(200).json('Weebs Manager API by nafies-group. Feel free to contact us on nafies1')
})
// router.post('/google-login', User)
router.use('/anime', anime)

module.exports = router