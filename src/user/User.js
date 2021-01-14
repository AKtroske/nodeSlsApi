module.exports = function BuildMakeUser ({ Id }) {
  return function MakeUser ({
    uid = Id.makeId(),
    first_name,
    last_name,
    email,
    password,
    gender
  } = {}) {
    // Validate user
    console.log(gender)
    if (!first_name || first_name.length > 50){
      throw new Error('First_name is not a valid length or missing')
    }

    if (!last_name || last_name.length > 50){
      throw new Error('Last_name is not a valid length or missing')
    }

    if (!email || email.length > 75){
      throw new Error('Email is not a valid length or missing')
    }
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!email.match(re)){
      throw new Error('Email is not valid')
    }

    if (gender != 'm' && gender != 'f' && gender != 'other'){
      throw new Error('Gender is not valid')
    }

    if (!password || password.length > 150){
      throw new Error('Password is not a valid length or missing')
    }

    return Object.freeze({
      getUid: () => uid,
      getFirstName: () => first_name,
      getLastName: () => last_name,
      getEmail: () => email,
      getPassword: () => password,
      getGender: () => gender,
    })
  }
}
