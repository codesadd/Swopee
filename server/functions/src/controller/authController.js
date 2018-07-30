const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')

const authentication = express()
authentication.use(bodyParser.json())
authentication.use(cors({ origin: true }))
authentication.get("*", (request, response) => {
  response.send({
    message: 'backend from Authentication!',
    request: request.path
  })
})

module.exports = {
  authentication
}