const LibrarianService = require('../Services/LibrarianService');

class LibrarianController {
  constructor() {
    this.librarianService = new LibrarianService();
  }

  async createLibrarian(req, res) {
    try {
      const librarianData = req.body;
      const librarian = await this.librarianService.createLibrarian(librarianData);
      res.status(201).json(librarian);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getLibrarians(req, res) {
    try {
      const librarians = await this.librarianService.getAllLibrarians();
      res.json(librarians);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getLibrarian(req, res) {
    try {
      const { id } = req.params;
      const librarian = await this.librarianService.getLibrarianById(id);
      if (!librarian) {
        return res.status(404).json({ message: 'Librarian not found' });
      }
      res.json(librarian);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateLibrarian(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedLibrarian = await this.librarianService.updateLibrarian(id, updateData);
      if (!updatedLibrarian) {
        return res.status(404).json({ message: 'Librarian not found' });
      }
      res.json(updatedLibrarian);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteLibrarian(req, res) {
    try {
      const { id } = req.params;
      const deleted = await this.librarianService.deleteLibrarian(id);
      if (!deleted) {
        return res.status(404).json({ message: 'Librarian not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = LibrarianController;