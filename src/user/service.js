const BasicCrud = require('../lib/BasicCrud')

let service = Object.create(BasicCrud)

const create = (req, res) => {
  console.log('create in user service');
  return service.create(req.body);
}

const get = (req, res) => {
  console.log('get in user service');
  return service.create(req.body);
}
const search = (req, res) => {
  console.log('search in user service');
  return service.create(req.body);
}

const update = (req, res) => {
  console.log('update in user service');
  return service.create(req.body);
}

const remove = (req, res) => {
  console.log('delete in user service');
  return service.create(req.body);
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
