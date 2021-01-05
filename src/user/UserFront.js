// Lib imports
const BuildBasicFront = require('../lib/BasicFront')
const BuildAPIHelper = require('../lib/APIHelper')

// Service imports
const UserService = require('./UserService')

const APIHelper = BuildAPIHelper();

const MakeUserFront = BuildBasicFront({ UserService, APIHelper });

module.exports = MakeUserFront;
