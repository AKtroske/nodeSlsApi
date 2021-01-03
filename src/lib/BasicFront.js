/*
  Basic front for CRUD operations to handle request and response objects
*/

// API helper
const {
  isEmpty,
  InvalidInputError,
  InternalError,
  SuccessResp
} = require('./APIHelper')

/* BasicFront constructor
  Accepts a basic or modified crud service and maps our standard CRUD functions
  with callbacks involving the request and response object. Need constructor to
  provide this context to ur callbacks
*/

function create() {
  return (req, res) => {
    console.log('create front');

    data = req.body;

    if (isEmpty(data)){
      InvalidInputError(res, err, 'Missing data');
    };

    try {
      uid = this.crudService.create(data);
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

    // Return
    try {
      data = this.crudService.get(uid)
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
      data = this.crudService.search(criteria)
    } catch (err){
      InternalError(res, err)
    }

    SuccessResp(res, data);
  };
};

function update(req, res) {
  return (req, res) => {
    console.log('update front');

    const uid = req.params.id;
    if (uid == null){
      InvalidInputError(res, err, 'Missing UID');
    }

    const data = req.body;
    // Verify valid data

    try {
      resp = this.crudService.update(uid, data)
    } catch (err){
      InternalError(res, err)
    }

    SuccessResp(res, resp);
  };
};

function remove(req, res) {
  return (req, res) => {
    console.log('delete front');

    const uid = req.params.id;

    if (uid == null){
      InvalidInputError(res, err, 'Missing UID');
    }

    // Return
    try {
      data = this.crudService.remove(uid)
    } catch (err){
      InternalError(res, err)
    }

    SuccessResp(res, data);
  };
};

function BasicFront(crudService){
  this.crudService = crudService;
  this.create = create;
  this.get = get;
  this.search = search;
  this.update = update;
  this.remove = remove;
};

module.exports = BasicFront;
