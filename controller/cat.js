const axios = require('axios')
const cat = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images',
    headers: {'x-api-key': '57faeb4a-ac36-4b47-a4fe-8ae281156ade'}
  });

module.exports = {
    randomCat(req, res, next){
        cat.get('/search')
            .then((cat) => {       
                console.log(cat.data[0].url);                
                res.status(200).json(cat.data[0].url)
            })
            .catch((err)=>{
                console.log(err);
                next(err)                
            })
}}