require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/WeebsManager', {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', ()=>{
    console.log('Mongoose mongodb connected');    
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/', routes)
app.use((err, req, res, next)=>{
    let status = err.status
    console.log(err);
    res.status(status).json(err.message) 
})

app.listen(process.env.PORT, ()=>{
    console.log('This App is running on port', process.env.PORT);
})