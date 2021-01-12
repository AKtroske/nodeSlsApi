/*
  Basic framework for CRUD operations - create, get, search, update, remove
*/
module.exports = function BuildBasicCrud({ repo }){
  return Object.freeze({
    create,
    get,
    search,
    update,
    remove
  })

  function create(data) {
    console.log('create crud');
    repo.create(data);
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
}
