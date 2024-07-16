const { Program_degree } = require('../models/Index');

class ProgramDegreeService {
    async createProgramDegree({ program_id, degree_id }) {
        const programDegree = await Program_degree.create({ program_id, degree_id });
        return programDegree;
    }

    async getProgramDegreeById(programDegreeId) {
        return await Program_degree.findByPk(programDegreeId);
    }

    async updateProgramDegree(programDegreeId, programDegreeData) {
        const programDegree = await Program_degree.findByPk(programDegreeId);
        if (!programDegree) {
            throw new Error('Program_degree not found');
        }
        return await programDegree.update(programDegreeData);
    }

    async deleteProgramDegree(programDegreeId) {
        const programDegree = await Program_degree.findByPk(programDegreeId);
        if (!programDegree) {
            throw new Error('Program_degree not found');
        }
        return await programDegree.destroy();
    }

    async getAllProgramDegrees() {
        return await Program_degree.findAll();
    }
}

module.exports = new ProgramDegreeService();
