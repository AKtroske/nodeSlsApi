/*
  Basic framework for CRUD operations - create, get, search, update, remove
*/

const create = (data, res, ...args) => {
  console.log('create');
  console.log(data);
  res.send('crud create');
}

const get = (data, res, ...args) => {
  console.log('get');
  console.log(data);
  res.send('crud get');
}

const search = (data, res, ...args) => {
  console.log('search');
  console.log(data);
  res.send('crud search');
}

const update = (data, res, ...args) => {
  console.log('update');
  console.log(data);
  res.send('crud update');
}

const remove = (data, res,...args) => {
  console.log('delete');
  console.log(data);
  res.send('crud remove');
}

// Basic Crud prototype
const BasicCrud = {
  create : create,
  get : get,
  search : search,
  update : update,
  remove : remove
};

module.exports = BasicCrud;
