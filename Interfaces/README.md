# Interfaces Module

This module defines the core interfaces that are used throughout the system to ensure proper implementation of the dependency inversion principle and to encapsulate the various data exchanges and manipulations across different modules.

### Overview

Interfaces are contracts that define the functionalities that a class must implement. By programming to interfaces, we make our code more flexible and scalable. They are a crucial element of Robert C. Martin's Clean Architecture principles, as they allow high-level components to remain independent of low-level components through abstraction.

### Structure

Each interface typically corresponds to a repository that will be implemented in the persistence layer (or another layer as needed). They define the essential CRUD operations and possibly additional methods that are required by the use cases for manipulating entities such as Books, Students, Librarians, and Administrators.

### Key Interfaces

- `IBookRepository`: Interface for book data interaction.
- `IStudentRepository`: Interface for student data interaction.
- `ILibrarianRepository`: Interface for librarian data interaction.
- `IAdministratorRepository`: Interface for administrator data interaction.

Additional interfaces may be created as needed when new use cases and entities are added to the system.

### Usage

When creating a new repository, it should implement the corresponding interface from this module. For example, a `SQLBookRepository` would implement the `IBookRepository` interface.

### Implementation

The actual implementation of these interfaces occurs in another module, typically 'Repositories' or similar. That implementation would interact with the database or any other form of persistence.

This separation allows the core business logic to change without changing how data is persisted and accessed, and vice versa.

Remember, interfaces define what needs to be done, not how it's to be done. Implementations take care of the 'how'.