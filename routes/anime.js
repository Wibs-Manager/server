const router = require('express').Router()
const Anime = require('../controller/anime')


router.get('/', Anime.showTopTen)
router.get('/search/:name', Anime.searchAnime)
router.post('/', Anime.favAnime)
// router.get('/user/:username', StarApi.showRepoUser)
// router.delete('/', StarApi.unStarRepo)

module.exports = router

