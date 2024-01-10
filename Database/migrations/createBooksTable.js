const createBooksTable = `
  CREATE TABLE IF NOT EXISTS Books (
    id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(255) NOT NULL,
    author NVARCHAR(255) NOT NULL,
    isbn NVARCHAR(13) UNIQUE NOT NULL,
    status NVARCHAR(50) NOT NULL DEFAULT 'Available'
  );
`;

module.exports = createBooksTable;