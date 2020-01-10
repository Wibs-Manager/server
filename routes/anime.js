const router = require('express').Router()
const Anime = require('../controller/anime')


router.get('/', Anime.showTopTen)
router.get('/:idMal', Anime.getDetailsAnime)
router.get('/search/:name', Anime.searchAnime)
router.post('/', Anime.favAnime)
// router.get('/', Anime.getFavAnime)


module.exports = router

