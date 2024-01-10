const { BookRepository } = require('../Repositories/BookRepository');

class BookService {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    async getAllBooks() {
        return await this.bookRepository.getAll();
    }

    async getBookById(id) {
        return await this.bookRepository.getById(id);
    }

    async addBook(bookData) {
        return await this.bookRepository.add(bookData);
    }

    async updateBook(id, bookData) {
        return await this.bookRepository.update(id, bookData);
    }

    async deleteBook(id) {
        return await this.bookRepository.delete(id);
    }

    async changeBookStatus(id, status) {
        return await this.bookRepository.updateStatus(id, status);
    }
}

module.exports = { BookService };