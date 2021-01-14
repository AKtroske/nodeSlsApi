const bcrypt = require('bcrypt')

//Lib
const makeUser = require('./MakeUser')

module.exports = function BuildUserService({ service }){
  return Object.freeze({
    create,
    get,
    search,
    update,
    remove
  })
  function create(data) {
    console.log('create in user service')
    let user = makeUser(data)

    const userData = {
      uid : user.getUid(),
      first_name : user.getFirstName(),
      last_name : user.getLastName(),
      email : user.getEmail(),
      password : user.getPassword(),
      gender : user.getGender()
    }

    try {
      bcrypt.hash(userData.password, 10, function(err, hash){
        if (err){
          console.log(err)
          throw err
        }
        userData.password = hash
      })
      return service.create(userData)
    } catch (err) {
      throw err
    }
  }

  function get(uid) {
    console.log('get in user service')
    return service.get(uid)
  }

  function search(criteria) {
    console.log('search in user service')
    return service.search(criteria)
  }

  function update(uid, data) {
    console.log('update in user service')
    return service.update(uid, data)
  }

  function remove(uid) {
    console.log('delete in user service')
    return service.remove(uid)
  }
}
