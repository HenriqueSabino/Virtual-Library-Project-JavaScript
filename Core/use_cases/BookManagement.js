class BookManagement {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async listAllBooks() {
    return await this.bookRepository.getAllBooks();
  }

  async findBookById(bookId) {
    return await this.bookRepository.getBookById(bookId);
  }

  async addNewBook(bookDetails) {
    return await this.bookRepository.createBook(bookDetails);
  }

  async updateBookDetails(bookId, bookDetails) {
    return await this.bookRepository.updateBook(bookId, bookDetails);
  }

  async deleteBook(bookId) {
    return await this.bookRepository.deleteBook(bookId);
  }

  async rentBook(studentId, bookId) {
    const book = await this.bookRepository.getBookById(bookId);
    if (book.status !== 'Available') {
      throw new Error('Book is not available for rent');
    }
    return await this.bookRepository.rentBookToStudent(studentId, bookId);
  }

  async returnBook(bookId) {
    return await this.bookRepository.changeBookStatus(bookId, 'Available');
  }

  async reserveBook(studentId, bookId) {
    const book = await this.bookRepository.getBookById(bookId);
    if (book.status !== 'Available') {
      throw new Error('Book is not available for reservation');
    }
    return await this.bookRepository.changeBookStatus(bookId, 'Reserved');
  }

  async setBookMaintenanceStatus(bookId) {
    return await this.bookRepository.changeBookStatus(bookId, 'Maintenance');
  }
}

module.exports = BookManagement;