const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const server = express() //create express app
//throws undefined err without importing file
require('dotenv').config();
//import routers
const student_info_router = require('../routes/student_info/student_info_router')

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true})

//logs once connection is open touch
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('The MongoDB db was connected successfully')
})


server.use(cors())
server.use(express.json())
//use routers
server.use('/student', student_info_router)


//get request 
server.get('/', (req, res) => {
    res.send(`UserOnboarding Back End Is Alive!`)
})


module.exports = server