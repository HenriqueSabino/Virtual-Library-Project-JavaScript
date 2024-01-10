# Database Module

This module contains the configurations, migrations, and seeds for the database used in the virtual library system. The database is structured to support the registration and management of books, students, librarians, and administrators.

## Configurations

- `dbConfig.js` contains the database connection settings that the system uses to connect to Microsoft SQL Server.

## Migrations

Migration files are responsible for creating the database schema. The included migration files are:

- `createBooksTable.js`
- `createStudentsTable.js`
- `createLibrariansTable.js`
- `createAdministratorsTable.js`
- `createRentalsTable.js`

## Seeds

Seed files are used to populate the database with initial data for testing and development purposes. The included seeds are:

- `booksSeed.js`
- `studentsSeed.js`
- `librariansSeed.js`
- `administratorsSeed.js`

**Note:** It's important to execute migrations before running seed files to ensure that the tables exist in the database. Additionally, sensitive data should not be stored directly in these files. Use environment variables or other secure methods for handling sensitive information.