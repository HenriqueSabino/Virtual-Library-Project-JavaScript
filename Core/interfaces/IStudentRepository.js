class IStudentRepository {
    create(student) {
        throw new Error("IStudentRepository method create not implemented");
    }

    findById(id) {
        throw new Error("IStudentRepository method findById not implemented");
    }

    findAll() {
        throw new Error("IStudentRepository method findAll not implemented");
    }

    update(student) {
        throw new Error("IStudentRepository method update not implemented");
    }

    delete(id) {
        throw new Error("IStudentRepository method delete not implemented");
    }

    // Additional methods related to the student rental history could be added here if necessary
}
module.exports = IStudentRepository;