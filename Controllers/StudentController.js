const StudentService = require('../Services/StudentService');

class StudentController {
  constructor() {
    this.studentService = new StudentService();
  }

  async list(req, res) {
    try {
      const students = await this.studentService.getAllStudents();
      res.json(students);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async get(req, res) {
    try {
      const student = await this.studentService.getStudentById(req.params.id);
      if (!student) {
        return res.status(404).send('Student not found');
      }
      res.json(student);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async create(req, res) {
    try {
      const newStudent = await this.studentService.createStudent(req.body);
      res.status(201).json(newStudent);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async update(req, res) {
    try {
      const updatedStudent = await this.studentService.updateStudent(req.params.id, req.body);
      if (!updatedStudent) {
        return res.status(404).send('Student not found');
      }
      res.json(updatedStudent);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async delete(req, res) {
    try {
      await this.studentService.deleteStudent(req.params.id);
      res.status(200).send('Student deleted');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = StudentController;