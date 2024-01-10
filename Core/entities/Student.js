class Student {
  constructor(id, firstName, lastName, email, rentalHistory) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.rentalHistory = rentalHistory || [];
  }

  rentBook(book) {
    if (book.isAvailable()) {
      this.rentalHistory.push({
        bookId: book.id,
        rentalDate: new Date(),
        status: 'Rented'
      });
      book.rent();
      return true;
    }
    return false;
  }

  returnBook(book) {
    const rentalInfo = this.rentalHistory.find(
      rental => rental.bookId === book.id && rental.status === 'Rented'
    );

    if (rentalInfo) {
      rentalInfo.returnDate = new Date();
      rentalInfo.status = 'Returned';
      book.return();
      return true;
    }
    return false;
  }
}

module.exports = Student;