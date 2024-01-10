require('dotenv').config();
const express = require('express');
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Import routes or controller handlers
// const bookRoutes = require('./Controllers/BookController');
// const studentRoutes = require('./Controllers/StudentController');
// const librarianRoutes = require('./Controllers/LibrarianController');
// const administratorRoutes = require('./Controllers/AdministratorController');

// Application routes
// app.use('/books', bookRoutes);
// app.use('/students', studentRoutes);
// app.use('/librarians', librarianRoutes);
// app.use('/administrators', administratorRoutes);

// Add a simple route for get request
app.get('/', (req, res) => {
  res.send('Welcome to the Virtual Library System API');
});

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});