//Lib imports
const Id = require('../lib/Id')
const bcrypt = require('bcrypt')

const BuildMakeUser = require('./User')

const makeUser = BuildMakeUser({ Id })

module.exports = makeUser
