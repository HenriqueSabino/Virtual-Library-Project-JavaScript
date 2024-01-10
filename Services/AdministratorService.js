// AdministratorService.js

class AdministratorService {
  constructor(administratorRepository, logger) {
    this.administratorRepository = administratorRepository;
    this.logger = logger;
  }

  async addAdministrator(adminData) {
    try {
      return await this.administratorRepository.add(adminData);
    } catch (error) {
      this.logger.error('Error in AdministratorService addAdministrator:', error);
      throw error;
    }
  }

  async getAdministratorById(adminId) {
    try {
      return await this.administratorRepository.findById(adminId);
    } catch (error) {
      this.logger.error('Error in AdministratorService getAdministratorById:', error);
      throw error;
    }
  }

  async updateAdministrator(adminId, updateData) {
    try {
      return await this.administratorRepository.update(adminId, updateData);
    } catch (error) {
      this.logger.error('Error in AdministratorService updateAdministrator:', error);
      throw error;
    }
  }

  async deleteAdministrator(adminId) {
    try {
      return await this.administratorRepository.delete(adminId);
    } catch (error) {
      this.logger.error('Error in AdministratorService deleteAdministrator:', error);
      throw error;
    }
  }

  async listAdministrators() {
    try {
      return await this.administratorRepository.list();
    } catch (error) {
      this.logger.error('Error in AdministratorService listAdministrators:', error);
      throw error;
    }
  }
}

module.exports = AdministratorService;