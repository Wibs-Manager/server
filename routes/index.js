const router = require('express').Router()
const anime = require('./anime')
const manga = require('./manga')
const {randomCat} = require('../controller/cat')

router.get('/', (req, res)=>{

    res.status(200).json('Weebs Manager API by nafies-group. Feel free to contact us on nafies1')
})
router.use('/anime', anime)
router.use('/manga', manga)
router.get('/cat', randomCat)

module.exports = router