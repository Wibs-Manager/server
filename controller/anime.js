const axios = require('axios')
const jikanApi = axios.create({
    baseURL: 'https://api.jikan.moe/v3',
    // timeout: 10000,
    // headers: {'Authorization': 'token 56705191f857b83422eaea2516912bb1af2166da'}
  });
  const User = require('../models/user')
  const jwt = require('jsonwebtoken');

class Anime{
    static showTopTen(req, res, next){
        // const {keyword} = req.query
        // console.log('MASUK KE ANIME CONTROLELR');
        // console.log(loca /l);
        // console.log(localStorage.getItem('token'));
        
        // console.log(req.headers.token, ' <<<<<<<< ');
        
        jikanApi.get('/top/anime/1/tv')
            .then((animes) => {      
                const err = {}   
                // console.log(animes.data.top);
                   
                res.status(200).json(animes.data.top)
                
            })
            .catch((err)=>{
                console.log(err);
                next(err)                
            })
    }

    static searchAnime(req, res, next){
        jikanApi
            .get(`/search/anime?q=${req.params.name}`)
            .then( ({ data }) => {
                res.status(200).json(data)
            })
            .catch(err =>{
                next(err)
            })
    }

    static favAnime(req, res, next){
        const {id} = req.body
        console.log(req.headers.token);
        const token = jwt.verify(req.headers.token, process.env.SECRET)
        console.log(token,"ini token");
        
        User.findOneAndUpdate({_id: token.id}, {$push: {favorite:id}})
            .then((data)=>{
                console.log(data);
                res.status(200).json(data)
            })
            .catch(err=>{
                next(err)
            })
    }


}

module.exports = Anime
