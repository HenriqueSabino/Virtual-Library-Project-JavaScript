class LibrarianManagement {
  constructor(librarianRepository) {
    this.librarianRepository = librarianRepository;
  }

  async addLibrarian(librarianData) {
    // Logic for adding a librarian
    return this.librarianRepository.add(librarianData);
  }

  async updateLibrarian(librarianId, librarianData) {
    // Logic for updating a librarian's details
    return this.librarianRepository.update(librarianId, librarianData);
  }

  async fetchLibrarian(librarianId) {
    // Logic for fetching librarian details
    return this.librarianRepository.findById(librarianId);
  }

  async removeLibrarian(librarianId) {
    // Logic for removing a librarian
    return this.librarianRepository.remove(librarianId);
  }

  async listLibrarians() {
    // Logic for listing all librarians
    return this.librarianRepository.listAll();
  }
}

module.exports = LibrarianManagement;