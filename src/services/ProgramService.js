const { Program, University, User } = require('../models/Index');

class ProgramService {
    async createProgram({ name, description, users_id }) {
        try {
            const user = await User.findOne(users_id);
            console.log(user);
            if (!user) {
                throw new Error('User not found');
            }

            const university = await University.findOne({ where: { users_id: user.id } });
            if (!university) {
                throw new Error('No associated university found for the user');
            }

            if (user.role !== 'admin') {
                throw new Error('User is not authorized to create a program');
            }

            const program = await Program.create({ name, description, university_id: university.id });
            return program;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getProgramById(programId, users_id) {
        try {
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
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async updateProgram(programId, programData, users_id) {
        try {
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
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deleteProgram(programId, users_id) {
        try {
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

            await program.destroy();
            return { message: 'Program deleted successfully' };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getAllPrograms(users_id) {
        try {
            const user = await User.findByPk(users_id, {
                include: {
                    model: University,
                    as: 'university_id'
                }
            });

            if (!user || !user.university_id || user.role !== 'admin') {
                throw new Error('User is not authorized to view programs');
            }

            return await Program.findAll({
                where: {
                    university_id: user.university.id
                }
            });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = new ProgramService();
