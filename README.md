# Virtual Library Backend Project

Welcome to the Virtual Library backend project. This project is built with Node.js and uses Microsoft SQL Server for the database.

## Getting Started

To get started with this project, please follow the instructions below:

1. Make sure you have Node.js and npm installed.
2. Clone this repository to your local machine.
3. Run `npm install` to install the required node modules.
4. Set up the `.env` file with the necessary environment variables.
5. Execute the SQL scripts in the `Database/migrations` folder to set up the database.
6. Optionally, run the seed scripts from the `Database/seeds` folder to populate your database with initial data.
7. Start the application by running `npm start`.

## Project Structure

This project adheres to the principles of Robert C. Martin's Clean Architecture. The structure is divided into several modules:

- `Configs`: Contains configuration files for different deployment environments.
- `Core`: The heart of the system, including entities and use case interfaces.
- `Entities`: Representations of database tables as JavaScript classes.
- `UseCases`: Application-specific business rules.
- `Interfaces`: Interfaces for the repository layer.
- `Repositories`: Implements repository interfaces, handles data retrieval, and manipulations.
- `Services`: Contains business logic and calls methods from the repository layer.
- `Controllers`: Handles incoming requests, utilizes services, and returns responses.
- `Database`: Contains database configuration, migrations, and seeders.
- `Root`: The starting point of the application, includes global configurations like `.env` and `package.json`.

## Environment Variables

Certain configurations are set through environment variables. Please refer to the `.env.example` file for the list of environment variables required by the application.

## Contribution

If you would like to contribute to this project, please adhere to the following guidelines:

- Write clean, maintainable, and testable code.
- Follow the existing code style and structure.
- Document your code and update the README accordingly.
- Make sure to test your code thoroughly before submitting a pull request.

Thank you for contributing to the Virtual Library backend project!