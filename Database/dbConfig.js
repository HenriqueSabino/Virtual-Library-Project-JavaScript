const { config } = require('dotenv');

config(); // Initialize dotenv

const dbConfig = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'virtual_library_dev',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mssql',
    options: {
      encrypt: true,
      enableArithAbort: true
    }
  },
  test: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'virtual_library_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mssql',
    options: {
      encrypt: true,
      enableArithAbort: true
    }
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mssql',
    options: {
      encrypt: true,
      enableArithAbort: true
    }
  }
};

module.exports = dbConfig;