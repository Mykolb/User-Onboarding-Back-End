const express = require('express')
const cors = require('cors')
const server = express() //create express app
//import routers


//
server.use(cors())
server.use(express.json())

//use routers 
//auth router
//admin router 
//student account router 


//get request 
server.get('/', (req, res) => {
    res.send(`UserOnboarding Back End Is Alive!`)
})


module.exports = server