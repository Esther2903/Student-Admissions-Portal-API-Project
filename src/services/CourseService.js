const {Course} = require('../models/Index');

class CourseService {

    async createCourse({name, description, credit, level, semester, university_id, degree_id}){
        const course = await Course.create({name, description, credit, level, semester, university_id, degree_id})
        return  course;                    
    }

    async getCourseById(courseId){
        return await Course.findByPk(courseId);
    }

    async updateCourse(courseId, courseData) {
        const course = await Course.findByPk(courseId);
        if (!course) {
            throw new Error('Course not found');
        }
        return await course.update(courseData);
    }

    async deleteCourse(courseId) {
        const course = await Course.findByPk(courseId);
        if (!course) {
            throw new Error('Course not found');
        }
        return await course.destroy();    
    }

    async getAllCoures(){
        return await Course.findAll()
    }
    
}

module.exports = new CourseService();