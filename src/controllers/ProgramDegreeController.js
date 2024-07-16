const ProgramDegreeService = require('../services/ProgramDegreeService');

class ProgramDegreeController {
    async createProgramDegree(req, res) {
        try {
            const programDegreeData = {
                program_id: req.body.program_id,
                degree_id: req.body.degree_id,
            };
            const programDegree = await ProgramDegreeService.createProgramDegree(programDegreeData);
            res.status(201).send(programDegree);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async getProgramDegreeById(req, res) {
        try {
            const programDegree = await ProgramDegreeService.getProgramDegreeById(req.params.id);
            if (!programDegree) {
                return res.status(404).json({ error: 'Program_degree not found' });
            }
            res.status(200).json(programDegree);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async updateProgramDegree(req, res) {
        try {
            const programDegree = await ProgramDegreeService.updateProgramDegree(req.params.id, req.body);
            if (!programDegree) {
                return res.status(404).send({ err: 'Program_degree not found!' });
            }
            res.status(200).send(programDegree);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async deleteProgramDegree(req, res) {
        try {
            const programDegree = await ProgramDegreeService.deleteProgramDegree(req.params.id);
            if (!programDegree) {
                return res.status(404).send({ err: 'Program_degree not found!' });
            }
            res.send({ message: 'Program_degree deleted successfully!' });
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async getAllProgramDegrees(req, res) {
        try {
            const programDegrees = await ProgramDegreeService.getAllProgramDegrees();
            res.send(programDegrees);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }
}

module.exports = new ProgramDegreeController();
