//Establish connection DB and export a pool for threads
const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBDATABASE,
  password: process.env.DBPASSWORD,
  port: 5432,
})

// ENV NOT WORKING
// const pool = new Pool({
//   user: 'akahi',
//   host: 'localhost',
//   database: 'node_api',
//   password: 'CHANGE HERE',
//   port: 5432,
// })


pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports = pool


// To access DB using CMD line
//    psql -U postgres (sign in as postgres user - pass .env)
//    \c node_api

// Using user akahi - owner of the database
//    psql -U akahi node_api
