In accordance with the guidelines for developing the files, here is the `AdministratorController.js` for the module Controllers:

```javascript
const AdministratorService = require('../Services/AdministratorService');

class AdministratorController {
    constructor() {
        this.administratorService = new AdministratorService();
    }

    async createAdministrator(req, res) {
        try {
            const administrator = await this.administratorService.createAdministrator(req.body);
            res.status(201).json(administrator);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAdministrators(req, res) {
        try {
            const administrators = await this.administratorService.getAdministrators();
            res.status(200).json(administrators);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAdministratorById(req, res) {
        try {
            const administrator = await this.administratorService.getAdministratorById(req.params.id);
            res.status(200).json(administrator);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async updateAdministrator(req, res) {
        try {
            const updatedAdministrator = await this.administratorService.updateAdministrator(req.params.id, req.body);
            res.status(200).json(updatedAdministrator);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteAdministrator(req, res) {
        try {
            await this.administratorService.deleteAdministrator(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = AdministratorController;