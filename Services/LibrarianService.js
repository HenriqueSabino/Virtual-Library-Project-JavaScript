const LibrarianRepository = require('../Repositories/LibrarianRepository');

class LibrarianService {
    constructor() {
        this.librarianRepository = new LibrarianRepository();
    }

    async createLibrarian(librarianData) {
        return await this.librarianRepository.create(librarianData);
    }

    async getLibrarian(id) {
        return await this.librarianRepository.getById(id);
    }

    async updateLibrarian(id, updateData) {
        return await this.librarianRepository.update(id, updateData);
    }

    async deleteLibrarian(id) {
        return await this.librarianRepository.delete(id);
    }

    async listLibrarians() {
        return await this.librarianRepository.getAll();
    }
}

module.exports = LibrarianService;
```
