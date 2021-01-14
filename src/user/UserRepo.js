const BuildDaoBase = require('../dao/Daobase')
const pool = require('../dao/pool')

module.exports = function BuildUserRepo(){
  return BuildDaoBase({pool, tableName : 'users'})
}
