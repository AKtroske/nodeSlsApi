const { v4:uuidv4, isUuid } = require('uuid')

const Id = Object.Freeze({
  makeId : uuidv4,
  validId : isUuid
})

module.exports = Id
