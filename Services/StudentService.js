class StudentService {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async getStudentById(id) {
    return this.studentRepository.findById(id);
  }

  async registerStudent(studentData) {
    // Additional validation and logic before saving could be placed here
    return this.studentRepository.create(studentData);
  }

  async updateStudent(id, studentData) {
    return this.studentRepository.update(id, studentData);
  }

  async deleteStudent(id) {
    return this.studentRepository.delete(id);
  }

  // Additional student-related business logic could be added here
}
module.exports = StudentService;