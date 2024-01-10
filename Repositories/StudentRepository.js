const { IStudentRepository } = require('../core/interfaces/IStudentRepository');

class StudentRepository extends IStudentRepository {
    constructor(database) {
        super();
        this.database = database;
    }

    async addStudent(student) {
        // code to add student to the database
    }

    async getStudentById(id) {
        // code to get a student by id from the database
    }

    async updateStudent(student) {
        // code to update student info in the database
    }

    async deleteStudent(id) {
        // code to delete a student from the database
    }

    async listStudents() {
        // code to list all students from the database
    }

    // other student-related database methods can be added here as needed
}

module.exports = StudentRepository;