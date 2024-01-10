class RentalManagement {
    constructor(bookRepository, studentRepository) {
        this.bookRepository = bookRepository;
        this.studentRepository = studentRepository;
    }

    rentBook(bookId, studentId) {
        const book = this.bookRepository.findById(bookId);
        const student = this.studentRepository.findById(studentId);
        if (book.status !== 'Available' || !student) {
            throw new Error('Book is not available or Student not found');
        }
        book.status = 'Rented';
        this.bookRepository.update(bookId, { status: 'Rented' });
        this.studentRepository.addRentalToHistory(studentId, bookId);
    }

    returnBook(bookId) {
        const book = this.bookRepository.findById(bookId);
        if (book.status !== 'Rented') {
            throw new Error('Book is not rented out');
        }
        book.status = 'Available';
        this.bookRepository.update(bookId, { status: 'Available' });
    }
}

module.exports = RentalManagement;