const router = require('express').Router()
const Manga = require('../controller/manga')


router.get('/', Manga.showTopTen)
// router.get('/search/:name', Manga.searchManga)

module.exports = router

