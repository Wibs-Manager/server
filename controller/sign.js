const {OAuth2Client} = require('google-auth-library');
const User = require('../models/user')
const jwt = require('jsonwebtoken');

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
                    status.ids = 201
                    status.msg: "user not found. Create user"
                    return User.create({
                        name,
                        email,
                        password : process.env.PASSWORD
                    })
                } else{
                    status.msg = "user found"
                    status.ids = 200
                    return user
                }
            })
            .then(user=>{
                const idUser = user._id
                const token = jwt.sign({ id: idUser }, process.env.SECRET);
                res.status(status.ids).json({token, msg: status.msg})
            })
            .catch(err=>{
                next(err)
            })
    }
}