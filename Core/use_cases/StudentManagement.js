class StudentManagement {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async registerStudent(studentDetails) {
    // Handle registration logic
    return this.studentRepository.create(studentDetails);
  }

  async updateStudent(studentId, updateDetails) {
    // Handle update logic
    return this.studentRepository.update(studentId, updateDetails);
  }

  async removeStudent(studentId) {
    // Handle removal logic
    return this.studentRepository.delete(studentId);
  }

  async listStudents() {
    // Handle listing students logic
    return this.studentRepository.findAll();
  }

  async findStudentById(studentId) {
    // Handle finding a single student logic
    return this.studentRepository.findById(studentId);
  }

  async findStudentRentals(studentId) {
    // Handle listing student's rental history logic
    return this.studentRepository.findRentalsById(studentId);
  }
}

module.exports = StudentManagement;