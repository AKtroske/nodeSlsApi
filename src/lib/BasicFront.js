/*
  BasicFront
  ##########
  Accepts a crud service and maps our standard API helper functoins functions
  with callbacks involving the request and response object. Need constructor to
  provide service context to our callbacks
*/
module.exports = function BuildBasicFront({ service, apiHelper }){
  const {
    isEmpty,
    InvalidInputError,
    InternalError,
    SuccessResp
  } = apiHelper
  return Object.freeze({
      create,
      get,
      search,
      update,
      remove
  })
  function create() {
    return (req, res) => {
      console.log('create front')

      data = req.body
      if (isEmpty(data)){
        InvalidInputError(res, err, 'Missing data')
      }

      service.create(data)
        .then(uid => {
          SuccessResp(res, {uid})
        })
        .catch(e => {
          console.log("error front")
          InternalError(res, err)
        })
    };
  }

  function get() {
    return async (req, res) => {
      console.log('get front');

      const uid = req.params.id;
      if (uid == null){
        InvalidInputError(res, err, 'Missing UID');
      }

      try {
        data = await service.get(uid)
      } catch (err){
        InternalError(res, err)
      }

      SuccessResp(res, data);
    };
  }

  function search() {
    return async (req, res) => {
      console.log('search front');
      // Grab search criteria from query
      criteria = req.query;

      try {
        data = await service.search(criteria)
      } catch (err){
        InternalError(res, err)
      }

      SuccessResp(res, data);
    };
  };

  function update() {
    return async (req, res) => {
      console.log('update front');

      const uid = req.params.id;
      if (uid == null){
        InvalidInputError(res, err, 'Missing UID');
      }

      const data = req.body;
      try {
        uid = await service.update(uid, data)
      } catch (err){
        InternalError(res, err)
      }

      SuccessResp(res, {uid});
    };
  };

  function remove() {
    return async (req, res) => {
      console.log('delete front');

      const uid = req.params.id;
      if (uid == null){
        InvalidInputError(res, err, 'Missing UID');
      }

      try {
        uid = await service.remove(uid)
      } catch (err){
        InternalError(res, err)
      }

      SuccessResp(res, {uid});
    };
  };
}
