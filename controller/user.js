const {OAuth2Client} = require('google-auth-library');
const clientId = process.env.CLIENT_ID
const client = new OAuth2Client(clientId);
const User = require('../models/user')
const jwt = require('jsonwebtoken');

class UserController {
  static googleLogin(req, res, next){
      let token = req.body.google_token
      let dataUser = null
      client
        .verifyIdToken({
          idToken: token,
          audience: clientId
        })
        .then(ticket => {
          dataUser = ticket.getPayload()
          return User
            .findOne({
              email : dataUser.email
            })
        })
        .then( user => {
          if(!user){
            let data = {
              name : dataUser.name,
              email : dataUser.email
              // password
            }
            return User.create(data)
          } else {
            return user
          }
        })
        .then( user => {
          const idUser = user._id
          const token = jwt.sign({ id: idUser }, process.env.SECRET);
          // console.log(token, 'User Controller');
          
          res.status(200).json(token)
        })
        .catch( err => {
          console.log(clientId);
          console.log(err);
          next(err)
        })
    }
}

module.exports = UserController