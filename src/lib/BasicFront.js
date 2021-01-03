/*
  Basic front for CRUD operations to handle request and response objects
*/

// API helper
const {
  isEmpty,
  errorInvalidInput,
  errorRes500,
  successRes
} = require('./APIHelper')

/* BasicFront constructor
  Accepts a basic or modified crud service and maps our standard CRUD functions
  with callbacks involving the request and response object. Need constructor to
  provide this context to ur callbacks
*/
function BasicFront(crudService){
  this.crudService = crudService;
  this.create = create;
  this.get = get;
  this.search = search;
  this.update = update;
  this.remove = remove;
};

function create() {
  return (req, res) => {
    console.log('create front');

    data = req.body;

    if (isEmpty(data)){
      errorInvalidInput(res, err, 'Missing data');
    };

    try {
      uid = this.crudService.create(data);
    } catch (err){
      errorRes500(res, err);
    };

    resp = {
      uid : uid
    };

    successRes(res, resp);
  };
}

function get() {
  return (req, res) => {
    console.log('get front');

    const uid = req.params.id;

    if (uid == null){
      errorInvalidInput(res, err, 'Missing UID');
    }

    // Return
    try {
      data = this.crudService.get(uid)
    } catch (err){
      errorRes500(res, err)
    }

    successRes(res, data);
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
      errorRes500(res, err)
    }

    successRes(res, data);
  };
};

function update(req, res) {
  return (req, res) => {
    console.log('update front');

    const uid = req.params.id;
    if (uid == null){
      errorInvalidInput(res, err, 'Missing UID');
    }

    const data = req.body;
    // Verify valid data

    try {
      resp = this.crudService.update(uid, data)
    } catch (err){
      errorRes500(res, err)
    }

    successRes(res, resp);
  };
};

function remove(req, res) {
  return (req, res) => {
    console.log('delete front');

    const uid = req.params.id;

    if (uid == null){
      errorInvalidInput(res, err, 'Missing UID');
    }

    // Return
    try {
      data = this.crudService.remove(uid)
    } catch (err){
      errorRes500(res, err)
    }

    successRes(res, data);
  };
};

module.exports = BasicFront;
