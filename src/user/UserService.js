const BuildBasicCrud = require('../lib/BasicCrud')
const BuildUserRepo = require('./UserRepo')

let repo = BuildUserRepo()
let service = BuildBasicCrud({ repo })

module.exports = function BuildUserService(){
  return Object.freeze({
    create,
    get,
    search,
    update,
    remove
  })
  function create(data) {
    console.log('create in user service');
    return service.create(data);
  }

  function get(uid) {
    console.log('get in user service');
    return service.get(uid);
  }

  function search(criteria) {
    console.log('search in user service');
    return service.search(criteria);
  }

  function update(uid, data) {
    console.log('update in user service');
    return service.update(uid, data);
  }

  function remove(uid) {
    console.log('delete in user service');
    return service.remove(uid);
  }
}
