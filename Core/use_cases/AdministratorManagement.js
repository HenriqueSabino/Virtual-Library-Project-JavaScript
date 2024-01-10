class AdministratorManagement {
    constructor(administratorRepository, encryptionService) {
        this.administratorRepository = administratorRepository;
        this.encryptionService = encryptionService;
    }

    async addAdministrator(adminData) {
        const { username, password } = adminData;
        const encryptedPassword = await this.encryptionService.hashPassword(password);
        const newAdmin = await this.administratorRepository.add({
            ...adminData,
            password: encryptedPassword,
        });
        return newAdmin;
    }

    async updateAdministrator(adminId, adminData) {
        const updatedAdmin = await this.administratorRepository.update(adminId, adminData);
        return updatedAdmin;
    }

    async getAdministratorById(adminId) {
        const admin = await this.administratorRepository.getById(adminId);
        return admin;
    }

    async getAllAdministrators() {
        const admins = await this.administratorRepository.getAll();
        return admins;
    }

    async removeAdministrator(adminId) {
        const adminRemoved = await this.administratorRepository.remove(adminId);
        return adminRemoved;
    }
}

module.exports = AdministratorManagement;