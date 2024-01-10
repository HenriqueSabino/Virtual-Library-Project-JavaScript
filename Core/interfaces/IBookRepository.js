class IBookRepository {
  async addBook(book) {
    throw new Error('IBookRepository.addBook method must be implemented');
  }

  async findBookById(id) {
    throw new Error('IBookRepository.findBookById method must be implemented');
  }

  async updateBook(id, bookData) {
    throw new Error('IBookRepository.updateBook method must be implemented');
  }

  async listBooks(filter) {
    throw new Error('IBookRepository.listBooks method must be implemented');
  }

  async deleteBook(id) {
    throw new Error('IBookRepository.deleteBook method must be implemented');
  }
}

module.exports = IBookRepository;