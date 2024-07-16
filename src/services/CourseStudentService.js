const { Course_Student } = require('../models/Index');

class CourseStudentService {
    async createCourseStudent({ student_id, courses_id, dateIns }) {
        const courseStudent = await Course_Student.create({ student_id, courses_id, dateIns });
        return courseStudent;
    }

    async getCourseStudentById(courseStudentId) {
        return await Course_Student.findByPk(courseStudentId);
    }

    async updateCourseStudent(courseStudentId, courseStudentData) {
        const courseStudent = await Course_Student.findByPk(courseStudentId);
        if (!courseStudent) {
            throw new Error('Course_Student not found');
        }
        return await courseStudent.update(courseStudentData);
    }

    async deleteCourseStudent(courseStudentId) {
        const courseStudent = await Course_Student.findByPk(courseStudentId);
        if (!courseStudent) {
            throw new Error('Course_Student not found');
        }
        return await courseStudent.destroy();
    }

    async getAllCourseStudents() {
        return await Course_Student.findAll();
    }
}

module.exports = new CourseStudentService();
