const {OAuth2Client} = require('google-auth-library');
const User = require('../models/user')

module.exports = {
    googleSign(req, res, next){
        let payload
        let status
        const client = new OAuth2Client(process.env.CLIENT_ID);
        client.verifyIdToken({
            idToken: req.body.access_token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket=>{
                payload = ticket.getPayload();
                const {email} = payload
                return User.findOne({email: email})
            })
            .then(user=>{
                const {name} = payload
                const {email} = payload
                if (!user) {
                    return User.create({
                        name,
                        email,
                        password : process.env.PASSWORD
                    })
                } else{
                    res.status(200).json({user, msg:"user found"})
                }
            })
            .then(result=>{
                res.status(201).json({result, msg: "user not found. Create user"})
            })
            .catch(err=>{
                next(err)
            })
    }
}