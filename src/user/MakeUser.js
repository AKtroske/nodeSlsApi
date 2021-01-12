//Lib imports
const Id = require('../lib/Id')
const bcrypt = require('bcrypt')

const BuildMakeUser = require('./User')

const saltRounds = 10

const makeUser = BuildMakeUser({ Id, encrypt })

function encrypt({ password }){
  return bcrypt.hash(password, saltRounds, function(err, hash){
    if (err){
      console.log(err)
      throw new Error(`Error in encryption: ${err}`)
    }
    return hash
  })
}
