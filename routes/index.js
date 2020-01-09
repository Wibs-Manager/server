const router = require('express').Router()
const star = require('./star')
const {sign} = require('../controllers/sign')

router.get('/', (req, res)=>{
    res.status(200).json('Weebs Manager API by nafies-group. Feel free to contact me on nafies1')
})
router.post('/google-signin', sign)

router.use('/', )

module.exports = router