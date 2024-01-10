class Book {
  constructor({ id, title, author, isbn, status }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = status; // Available, Rented, Reserved, Maintenance
  }
}

module.exports = Book;