const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')

const wallet = express()
wallet.use(bodyParser.json())
wallet.use(cors({
  origin: true
}))
wallet.get("*", (request, response) => {
  response.send({
    message: 'backend from wallet!',
    request: request.path
  })
})

module.exports = {
  wallet
}