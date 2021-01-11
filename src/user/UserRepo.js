const MakeDaoBase = require('../dao/Daobase')
const pool = require('../dao/pool')

module.exports = function MakeUserRepo(){
  return MakeDaoBase({pool})
}
