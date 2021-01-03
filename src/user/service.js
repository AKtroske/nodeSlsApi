const BasicCrud = require('../lib/BasicCrud')

let service = Object.create(BasicCrud)

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

// Implement basicc crud in user servvice
const UserService = {
  create : create,
  get : get,
  search : search,
  update : update,
  remove : remove
}

module.exports = UserService;
