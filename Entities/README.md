# Entities Module

This module contains the core business objects of the virtual library system.

## Overview

In the `Entities` module, we define the domain models representing the key concepts of our application. It is critical that these entities encapsulate the most fundamental business rules. They are simple data structures with no dependencies on external libraries or frameworks.

## Entities

The following entities are part of the virtual library system:

- **Book**: Represents a book available for rent in the library.
- **Student**: Represents a student who can rent books.
- **Librarian**: Represents a librarian responsible for managing book rentals and returns.
- **Administrator**: Represents administrative users with permissions to configure system settings and manage other system users.

Each entity is a separate class defined in its own file, outlining its properties and methods necessary for encapsulating the business rules.

## Responsibilities

The `Entities` module is responsible for:

- Defining the structure and attributes of the different entities in the system.
- Encapsulation of the entity-specific business rules that are agnostic to the application's persistence layer and other infrastructure concerns.

Remember, entities should be plain objects without any dependencies on external components or complex logic. They are the foundational blocks upon which the use cases and higher-level components of the system will build.

## Notes to Developers

- As you implement each entity, ensure that they adhere strictly to the business rules and logic provided in the project specifications.
- Refrain from adding unnecessary persistence-related logic or methods that deviate from the core business rules in the entity classes.
- Maintain consistency across all entities, ensuring they follow the same coding standards and naming conventions.
