// Lib imports
const BuildBasicFront = require('../lib/BasicFront')
const BuildAPIHelper = require('../lib/APIHelper')

// Service imports
const BuildUserService = require('./UserService')

// Create user front
module.exports = function BuildUserFront(){
  const apiHelper = BuildAPIHelper()
  const service = BuildUserService()
  return BuildBasicFront({ service, apiHelper });
}
