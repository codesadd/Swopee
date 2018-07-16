const functions = require("firebase-functions")
const cors = require("cors")
const bodyParser = require('body-parser')
const express = require("express")
const axios = require('axios')
const firebase = require('firebase')
const config = require('./config')
/* Express with CORS & automatic trailing '/' solution */

firebase.initializeApp(config.firebaseConfig)
const db = firebase.database()

const app3 = express()
app3.use(bodyParser.json())

app3.use(cors({ origin: true }))
app3.get("*", (request, response) => {
  console.log(request.body.key);
  db.ref('users?auth='+request.body.key).once('value', (s) => {
    console.log(s.val())
    response.send(s.val())
  })
})

// not as clean, but a better endpoint to consume
const api3 = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}` // prepend '/' to keep query params if any
  }
  return app3(request, response)
})

module.exports = {
  api3
}