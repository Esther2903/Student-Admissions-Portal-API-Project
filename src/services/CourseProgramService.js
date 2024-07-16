const { Course_Program } = require('../models/Index');

class CourseProgramService {
    async createCourseProgram({ program_id, courses_id }) {
        const courseProgram = await Course_Program.create({ program_id, courses_id });
        return courseProgram;
    }

    async getCourseProgramById(courseProgramId) {
        return await Course_Program.findByPk(courseProgramId);
    }

    async updateCourseProgram(courseProgramId, courseProgramData) {
        const courseProgram = await Course_Program.findByPk(courseProgramId);
        if (!courseProgram) {
            throw new Error('Course_Program not found');
        }
        return await courseProgram.update(courseProgramData);
    }

    async deleteCourseProgram(courseProgramId) {
        const courseProgram = await Course_Program.findByPk(courseProgramId);
        if (!courseProgram) {
            throw new Error('Course_Program not found');
        }
        return await courseProgram.destroy();
    }

    async getAllCoursePrograms() {
        return await Course_Program.findAll();
    }
}

module.exports = new CourseProgramService();
