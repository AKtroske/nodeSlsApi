/*
  Api helper functions for error handling and value checking
*/

function isEmpty(obj) {
  for (var x in obj) {
    return false;
  }
   return true;
}

function errorInvalidInput (res, err, errMsg='', statusCode=400) {
  console.error("ERROR:", err)
  return res.status(statusCode).json({ success: false, error: "Invalid input operation", message: errMsg})
}

function errorRes500 (res, err, errMsg='') {
  console.error("ERROR:", err)
  return res.status(500).json({ success: false, error: "Server Error", message: errMsg})
}

function successRes (res, data, statusCode=200) {
  // Set reponse to our data and then add success to our response object
  response = data;
  response.success = true;
  return res.status(statusCode).json(response)
}

module.exports = {
  isEmpty,
  errorInvalidInput,
  errorRes500,
  successRes
};
