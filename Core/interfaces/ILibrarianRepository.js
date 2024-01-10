class ILibrarianRepository {
  createLibrarian(librarian) {
    throw new Error('ILibrarianRepository.createLibrarian() is not implemented');
  }

  updateLibrarian(id, librarianData) {
    throw new Error('ILibrarianRepository.updateLibrarian() is not implemented'); 
  }

  getLibrarianById(id) {
    throw new Error('ILibrarianRepository.getLibrarianById() is not implemented');
  }

  getAllLibrarians() {
    throw new Error('ILibrarianRepository.getAllLibrarians() is not implemented');
  }

  deleteLibrarian(id) {
    throw new Error('ILibrarianRepository.deleteLibrarian() is not implemented');
  }
}

module.exports = ILibrarianRepository;