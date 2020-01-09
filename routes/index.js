const router = require('express').Router()
const anime = require('./anime')
const {sign} = require('../controllers/sign')

router.get('/', (req, res)=>{
    res.status(200).json('Weebs Manager API by nafies-group. Feel free to contact us on nafies1')
})
router.post('/google-signin', sign)
router.use('/anime', anime)

module.exports = router