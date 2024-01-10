const sql = require('mssql');

const createRentalsTable = async () => {
  try {
    let pool = await sql.connect(dbConfig);
    await pool.request().query(`
      CREATE TABLE Rentals (
        RentalId INT PRIMARY KEY IDENTITY(1,1),
        BookId INT NOT NULL,
        StudentId INT NOT NULL,
        RentalDate DATETIME NOT NULL DEFAULT GETDATE(),
        ExpectedReturnDate DATETIME NULL,
        ActualReturnDate DATETIME NULL,
        CONSTRAINT FK_Rentals_Books FOREIGN KEY (BookId) REFERENCES Books(BookId),
        CONSTRAINT FK_Rentals_Students FOREIGN KEY (StudentId) REFERENCES Students(StudentId)
      )
    `);
    console.log('Created Rentals table successfully.');
  } catch (err) {
    console.error('Error creating Rentals table:', err.message);
  }
};

module.exports = createRentalsTable;