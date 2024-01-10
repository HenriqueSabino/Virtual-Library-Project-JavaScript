# Repositories Module

This module contains the concrete implementations of the repository interfaces defined in the `Interfaces` module for the `virtual library` application. Repositories provide the link between our domain entities and the database, allowing us to abstract away the details of data persistence.

The responsibility of a repository is to retrieve domain entities using some storage mechanism, such as a database. They are designed to understand how to perform Create, Read, Update, and Delete (CRUD) operations in terms of the entities we're working with.

## Contents

- `BookRepository.js`: Implementation of the book repository, handling book-related data persistence and retrieval.
- `StudentRepository.js`: Implementation of the student repository to manage student information storage and access.
- `LibrarianRepository.js`: Code responsible for accessing and manipulating librarian data in the database.
- `AdministratorRepository.js`: Repository that contains the logic to handle CRUD operations for administrators.

Each repository will use the `Node.js` framework to interact with the `Microsoft SQL Server` database, ensuring that the data is stored and retrieved according to the clean architecture principles.