const router = require('express').Router()
const Anime = require('../controller/anime')


router.get('/', Anime.showTopTen)
router.get('/search/:name', Anime.searchAnime)
router.post('/', Anime.favAnime)

module.exports = router

