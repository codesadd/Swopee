const authController = require('./authController')
const walletController = require('./walletController')

const api = function (request, response) {
  console.log(request.path)
  if (request.path === "/auth") {
    return authController.authentication(request, response)
  } else if (request.path === "/wallet") {
    return walletController.wallet(request, response)
  }else{
    return response.send({ message : '404 URL'})
  }
}


module.exports = {
  _API : api
}