/*
  Basic framework for CRUD operations - create, get, search, update, remove
*/
const { v4:uuidv4 } = require('uuid');

/*
  Normally will validate data here and then create a new entry in DB
  BUT no DB interaction, generate a uid and return
*/
function create(data) {
  console.log('create crud');
  console.log(data);
  uid = uuidv4();
  return uid;
};

function get(uid) {
  console.log('get crud');
  console.log(uid);
  data = { mssg : 'You got the data!', uid : uid}
  return data
};

function search(criteria) {
  console.log('search crud');
  console.log(criteria)
  data = { mssg : 'You found the data!'}
  return data
};

function update(uid, data) {
  console.log('update crud');
  console.log(data);
  resp = { mssg : 'You updated the data!', data : data, uid : uid}
  return resp
};

function remove(uid) {
  console.log('remove crud')
  resp = { mssg : 'You removed data!', uid : uid}
  return resp
};

// Basic Crud prototype
const BasicCrud = {
  create : create,
  get : get,
  search : search,
  update : update,
  remove : remove
};

module.exports = BasicCrud;
