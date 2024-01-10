# Core Module

This module is the heart of the Virtual Library backend application. It contains all the fundamental business logic built into entities and use cases which form the system's data model and business rules.

## Entities

The entities are the high-level data models that represent the core business objects in the system.

- `Book.js`: Represents a book in the library with attributes like title, author, ISBN, and status.
- `Student.js`: Represents a student using the library, including personal details and rental history.
- `Librarian.js`: Represents a librarian with the capability to manage books and student data.
- `Administrator.js`: An extended user with comprehensive management rights over all system entities and settings.

## Use Cases

The use cases define the business actions that can be performed within the system. They orchestrate the flow of data to and from the entities and towards the outer layers of the system.

- `BookManagement.js`: Logic related to book registration, update, and query operations.
- `StudentManagement.js`: Logic associated with student registration, update, and query operations.
- `LibrarianManagement.js`: Use cases concerning librarian CRUD operations.
- `AdministratorManagement.js`: Use cases for managing administrator privileges and settings.
- `RentalManagement.js`: Logic for handling the lending and returning of books.

## Interfaces

Interfaces define the contracts for the data access layer, which are to be implemented by the repositories in the outer layers. This allows for the inversion of dependencies in line with the Clean Architecture principles.

- `IBookRepository.js`: Interface for book data access.
- `IStudentRepository.js`: Interface for student data access.
- `ILibrarianRepository.js`: Interface for librarian data access.
- `IAdministratorRepository.js`: Interface for administrator data access.

The separation enforced here ensures the adaptability, maintainability, and scalability of the application as it grows and evolves over time.