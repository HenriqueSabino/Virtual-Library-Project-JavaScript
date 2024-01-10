# Controllers Module

This module contains the controllers that serve as the entry point for client requests. They are responsible for handling incoming HTTP requests and responding to the client.

Controllers in this module collaborate with services from the Services module to perform operations and manage the flow of data between the server and the client. Each controller is tied to a specific entity within the system, such as books, students, librarians, and administrators.

The following controllers are available:

- `BookController.js`: Manages actions related to books, such as creating, updating, deleting, and querying book information.

- `StudentController.js`: Handles student-related operations including registration, profile updates, and rental history.

- `LibrarianController.js`: Deals with librarian-specific tasks such as managing librarian accounts and permissions.

- `AdministratorController.js`: Facilitates administrative functions like system settings and high-level user management.

Controllers are designed to keep business logic within the services, maintaining a separation of concerns, and communicate with clients via data transfer objects (DTOs).

The controllers' primary responsibilities include:
- Parsing input
- Authenticating requests
- Authorizing users
- Validating requests
- Passing the input to the appropriate service
- Returning the response to the client

Always ensure that error handling is in place to manage any exceptions or invalid data, providing meaningful feedback to clients when needed.