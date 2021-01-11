// Lib imports
const MakeBasicFront = require('../lib/BasicFront')
const MakeAPIHelper = require('../lib/APIHelper')

// Service imports
const MakeUserService = require('./UserService')

// Create user front
module.exports = function MakeUserFront(){
  const apiHelper = MakeAPIHelper()
  const service = MakeUserService()
  return MakeBasicFront({ service, apiHelper });
}
