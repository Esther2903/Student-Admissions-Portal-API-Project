const { Program } = require('../models/Index');

class ProgramService {
    async createProgram({ name, description, university_id }) {
        const program = await Program.create({ name, description, university_id });
        return program;
    }

    async getProgramById(programId) {
        return await Program.findByPk(programId);
    }

    async updateProgram(programId, programData) {
        const program = await Program.findByPk(programId);
        if (!program) {
            throw new Error('Program not found');
        }
        return await program.update(programData);
    }

    async deleteProgram(programId) {
        const program = await Program.findByPk(programId);
        if (!program) {
            throw new Error('Program not found');
        }
        return await program.destroy();
    }

    async getAllPrograms() {
        return await Program.findAll();
    }
}

module.exports = new ProgramService();
