const { ILibrarianRepository } = require("../core/interfaces/ILibrarianRepository");

class LibrarianRepository extends ILibrarianRepository {
    constructor(database) {
        super();
        this.database = database;
    }

    async addLibrarian(librarian) {
        // Implementation for adding a new librarian to the database
    }

    async getLibrarian(id) {
        // Implementation for retrieving a librarian by ID from the database
    }

    async updateLibrarian(id, librarian) {
        // Implementation for updating a librarian's details in the database
    }

    async deleteLibrarian(id) {
        // Implementation for deleting a librarian from the database
    }

    async listLibrarians() {
        // Implementation for listing all librarians in the database
    }
}

module.exports = LibrarianRepository;