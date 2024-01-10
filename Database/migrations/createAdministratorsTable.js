const sql = require('mssql');

// Configuration object for your database
const config = {
  user: 'admin',
  password: 'your_password',
  server: 'your_server', 
  database: 'your_database',
  options: {
    encrypt: true // Use this if you're on Windows Azure
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
};