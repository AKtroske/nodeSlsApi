// Lib imports
const BuildBasicFront = require('../lib/BasicFront')
const BuildAPIHelper = require('../lib/APIHelper')

const BuildBasicCrud = require('../lib/BasicCrud')
const BuildUserRepo = require('./UserRepo')

// Service imports
const BuildUserService = require('./UserService')

// Create user front
module.exports = function BuildUserFront(){
  const repo = BuildUserRepo()
  const service = BuildBasicCrud({ repo })
  const userService = BuildUserService({ service })
  const apiHelper = BuildAPIHelper()
  return BuildBasicFront({ service: userService, apiHelper });
}
