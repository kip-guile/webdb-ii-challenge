const express = require('express')
const helmet = require('helmet')

const carRouter = require('../cars/cars-router.js')

const server = express()

server.use(logger)
server.use(helmet())
server.use(express.json())

server.use('/api/cars', carRouter)

function logger(req, res, next) {
    console.log(`${req.method} to ${req.originalUrl}`)
    next();
  }
  

module.exports = server