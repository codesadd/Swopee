const functions = require("firebase-functions")
const firebase = require('firebase')
const apiController = require('./src/controller')
const config = require('./src/config')
/* Express with CORS & automatic trailing '/' solution */

firebase.initializeApp(config.firebaseConfig)
const db = firebase.database()

// not as clean, but a better endpoint to consume
const api = functions.https.onRequest((request, response) => {
  return request.path !== "/" ? apiController._API(request, response) : response.send({ message: '404 URL'})
})

module.exports = {
  api
}