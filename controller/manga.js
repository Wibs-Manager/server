const axios = require('axios')
const kitsuApi = axios.create({
    baseURL: 'https://kitsu.io/api/edge',
    // timeout: 10000,
    // headers: {'Authorization': 'token 56705191f857b83422eaea2516912bb1af2166da'}
  });

class Manga{
    static showTopTen(req, res, next){
        kitsuApi.get('/trending/manga')
            .then((mangas) => {      
                const err = {}   
                console.log(mangas.data.attributes);
                   
                res.status(200).json(mangas.data.attributes)                
            })
            .catch((err)=>{
                console.log(err);
                next(err)                
            })
    }

    // static searchManga(req, res, next){
    //     kitsuApi
    //         .get(`/search/anime?q=${req.params.name}`)
    //         .then( ({ data }) => {
    //             res.status(200).json(data)
    //         })
    //         .catch(err =>{
    //             next(err)
    //         })
    // }
}

module.exports = Manga
