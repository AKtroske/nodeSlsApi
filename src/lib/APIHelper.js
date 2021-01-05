/*
  Api helper functions for error handling and value checking
*/

function isEmpty(obj) {
  for (var x in obj) {
    return false;
  }
   return true;
}

function InvalidInputError (res, err, errMsg='', statusCode=400) {
  console.error("ERROR:", err)
  return res.status(statusCode).json({ success: false, error: "Invalid input operation", message: errMsg})
}

function InternalError (res, err, errMsg='') {
  console.error("ERROR:", err)
  return res.status(500).json({ success: false, error: "Server Error", message: errMsg})
}

function SuccessResp (res, data, statusCode=200) {
  // Set reponse to our data and then add success to our response object
  response = data;
  response.success = true;
  return res.status(statusCode).json(response)
}

function BuildAPIHelper(){
  return {
    isEmpty,
    InvalidInputError,
    InternalError,
    SuccessResp
  }
}

module.exports = BuildAPIHelper;
