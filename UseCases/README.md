# Use Cases Module

This directory contains all the use case implementations for the virtual library system. The business logic of the application resides here. Each use case represents a specific action or sequence of actions performed by the users, such as rental management, user registration, and book updates.

## Structure

- The use cases are created as classes or functions that orchestrate the flow of data to and from the entities, and direct those entities to use their enterprise-wide business rules to achieve the goals of the use case.
- Each use case should be a high-level policy in the system and should not be concerned with lower-level details such as data access or I/O.

## Responsibilities

- This module translates requests from the UI/Controller layer into operations on the entities and domain logic.
- It holds the application-specific business rules and controls the application's workflow.

## Files

Each use case has its own file, grouped logically if necessary. Each file defines a use case for the system, such as:

- Managing book inventory (adding, updating, deleting books)
- Handling student accounts (registration, updating details)
- Processing rentals (renting, returning, reserving books)

Remember to implement the dependency inversion principle, ensuring that these use cases depend on abstractions, not on lower-level modules like the database or external services.