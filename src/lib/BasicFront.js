/* BasicFront
  Accepts a crud service and maps our standard CRUD functions
  with callbacks involving the request and response object. Need constructor to
  provide service context to our callbacks
*/

module.exports = function BuildBasicFront({ crudService, APIHelper }){
  return () => {
    const service = crudService;
    const {
      isEmpty,
      InvalidInputError,
      InternalError,
      SuccessResp
    } = APIHelper;

    BasicFront = {
      create : create,
      get : get,
      search :search,
      update : update,
      remove : remove
    }
    return BasicFront
  }
};

function create() {
  return (req, res) => {
    console.log('create front');

    data = req.body;
    if (isEmpty(data)){
      InvalidInputError(res, err, 'Missing data');
    };

    try {
      uid = service.create(data);
    } catch (err){
      InternalError(res, err);
    };

    resp = {
      uid : uid
    };

    SuccessResp(res, resp);
  };
}

function get() {
  return (req, res) => {
    console.log('get front');

    const uid = req.params.id;
    if (uid == null){
      InvalidInputError(res, err, 'Missing UID');
    }

    try {
      data = service.get(uid)
    } catch (err){
      InternalError(res, err)
    }

    SuccessResp(res, data);
  };
}

function search() {
  return (req, res) => {
    console.log('search front');
    // Grab search criteria from query
    criteria = req.query;

    try {
      data = service.search(criteria)
    } catch (err){
      InternalError(res, err)
    }

    SuccessResp(res, data);
  };
};

function update() {
  return (req, res) => {
    console.log('update front');

    const uid = req.params.id;
    if (uid == null){
      InvalidInputError(res, err, 'Missing UID');
    }

    const data = req.body;
    try {
      resp = service.update(uid, data)
    } catch (err){
      InternalError(res, err)
    }

    SuccessResp(res, resp);
  };
};

function remove() {
  return (req, res) => {
    console.log('delete front');

    const uid = req.params.id;
    if (uid == null){
      InvalidInputError(res, err, 'Missing UID');
    }

    try {
      data = service.remove(uid)
    } catch (err){
      InternalError(res, err)
    }

    SuccessResp(res, data);
  };
};
