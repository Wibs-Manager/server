const router = require('express').Router()
const Anime = require('../controllers/anime')

router.get('/', Anime.showTopTen)
// router.post('/', StarApi.addRepo)
// router.get('/user/:username', StarApi.showRepoUser)
// router.delete('/', StarApi.unStarRepo)

module.exports = router

