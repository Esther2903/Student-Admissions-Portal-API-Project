const ProgramService = require('../services/ProgramService');

class ProgramController {
    async createProgram(req, res) {
        try {
            const programData = {
                name: req.body.name,
                description: req.body.description,
                university_id: req.body.university_id,
            };
            const program = await ProgramService.createProgram(programData);
            res.status(201).send(program);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async getProgramById(req, res) {
        try {
            const program = await ProgramService.getProgramById(req.params.id);
            if (!program) {
                return res.status(404).json({ error: 'Program not found' });
            }
            res.status(200).json(program);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async updateProgram(req, res) {
        try {
            const program = await ProgramService.updateProgram(req.params.id, req.body);
            if (!program) {
                return res.status(404).send({ err: 'Program not found!' });
            }
            res.status(200).send(program);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async deleteProgram(req, res) {
        try {
            const program = await ProgramService.deleteProgram(req.params.id);
            if (!program) {
                return res.status(404).send({ err: 'Program not found!' });
            }
            res.send({ message: 'Program deleted successfully!' });
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async getAllPrograms(req, res) {
        try {
            const programs = await ProgramService.getAllPrograms();
            res.send(programs);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }
}

module.exports = new ProgramController();
