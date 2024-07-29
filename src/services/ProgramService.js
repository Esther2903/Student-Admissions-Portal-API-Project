const { Program, University, User } = require('../models/Index');

class ProgramService {
    async createProgram({ name, description, users_id }) {

        const user = await User.findOne(users_id);
        console.log(user);
        if (!user) {
            console.log('User not found');
        }
        const university = await University.findOne({ where: { users_id: user.id } });
        console.log(university);
        if (!university) {
            console.log('No associated university found for the user');
        }
        console.log(user.role);
        if (user.role !== 'admin') {
            throw new Error('User is not authorized to create a program');
        }
        const program = await Program.create({ name, description, university_id: university.id });
        return program;
    }

    async getProgramById(programId, users_id) {
        const user = await User.findByPk(users_id, {
            include: {
                model: University,
                as: 'university'
            }
        });

        if (!user || !user.university || user.role !== 'admin') {
            throw new Error('User is not authorized to view this program');
        }
        const program = await Program.findOne({
            where: {
                id: programId,
                university_id: user.university.id
            }
        });
        if (!program) {
            throw new Error('Program not found or access denied');
        }

        return program;
    }

    async updateProgram(programId, programData, users_id) {
        const user = await User.findByPk(users_id, {
            include: {
                model: University,
                as: 'university'
            }
        });

        if (!user || !user.university || user.role !== 'admin') {
            throw new Error('User is not authorized to update this program');
        }

        const program = await Program.findOne({
            where: {
                id: programId,
                university_id: user.university.id
            }
        });

        if (!program) {
            throw new Error('Program not found or access denied');
        }
        return await program.update(programData);
    }

    async deleteProgram(programId, users_id) {
        const user = await User.findByPk(users_id, {
            include: {
                model: University,
                as: 'university'
            }
        });

        if (!user || !user.university || user.role !== 'admin') {
            throw new Error('User is not authorized to delete this program');
        }

        const program = await Program.findOne({
            where: {
                id: programId,
                university_id: user.university.id
            }
        });

        if (!program) {
            throw new Error('Program not found or access denied');
        }

        return await program.destroy();
    }

    async getAllPrograms(users_id) {
        const user = await User.findByPk(users_id, {
            include: {
                model: University,
                as: 'university'
            }
        });

        if (!user || !user.university || user.role !== 'admin') {
            throw new Error('User is not authorized to view programs');
        }

        return await Program.findAll({
            where: {
                university_id: user.university.id
            }
        });
    }
}

module.exports = new ProgramService();
