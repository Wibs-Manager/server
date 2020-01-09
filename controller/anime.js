const axios = require('axios')
const jikanApi = axios.create({
    baseURL: 'https://api.jikan.moe/v3',
    timeout: 10000,
    // headers: {'Authorization': 'token 56705191f857b83422eaea2516912bb1af2166da'}
  });

class Anime{
    static showTopTen(req, res, next){
        // const {keyword} = req.query
        jikanApi.get('/top/anime/1/tv')
            .then((animes)=>{      
                const err = {}                     
                if (animes.data.length > 0) {
                    res.status(200).json(animes)
                } else{
                    err.message = "No repos starred"
                    next(err)
                    throw err
                }
                
            })
            .catch((err)=>{
                console.log(err);
                next(err)                
            })
    }

    
}

module.exports = Anime
