const BookService = require('../Services/BookService');

class BookController {
  constructor() {
    this.bookService = new BookService();
  }

  async getAllBooks(req, res) {
    try {
      const books = await this.bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getBookById(req, res) {
    try {
      const { bookId } = req.params;
      const book = await this.bookService.getBookById(bookId);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createBook(req, res) {
    try {
      const newBook = await this.bookService.createBook(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateBook(req, res) {
    try {
      const { bookId } = req.params;
      const updatedBook = await this.bookService.updateBook(bookId, req.body);
      res.status(200).json(updatedBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteBook(req, res) {
    try {
      const { bookId } = req.params;
      await this.bookService.deleteBook(bookId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BookController;