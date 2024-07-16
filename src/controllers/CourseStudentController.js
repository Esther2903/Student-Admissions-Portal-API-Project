const CourseStudentService = require('../services/CourseStudentService');

class CourseStudentController {
    async createCourseStudent(req, res) {
        try {
            const courseStudentData = {
                student_id: req.body.student_id,
                courses_id: req.body.courses_id,
                dateIns: req.body.dateIns,
            };
            const courseStudent = await CourseStudentService.createCourseStudent(courseStudentData);
            res.status(201).send(courseStudent);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async getCourseStudentById(req, res) {
        try {
            const courseStudent = await CourseStudentService.getCourseStudentById(req.params.id);
            if (!courseStudent) {
                return res.status(404).json({ error: 'Course_Student not found' });
            }
            res.status(200).json(courseStudent);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async updateCourseStudent(req, res) {
        try {
            const courseStudent = await CourseStudentService.updateCourseStudent(req.params.id, req.body);
            if (!courseStudent) {
                return res.status(404).send({ err: 'Course_Student not found!' });
            }
            res.status(200).send(courseStudent);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async deleteCourseStudent(req, res) {
        try {
            const courseStudent = await CourseStudentService.deleteCourseStudent(req.params.id);
            if (!courseStudent) {
                return res.status(404).send({ err: 'Course_Student not found!' });
            }
            res.send({ message: 'Course_Student deleted successfully!' });
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async getAllCourseStudents(req, res) {
        try {
            const courseStudents = await CourseStudentService.getAllCourseStudents();
            res.send(courseStudents);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }
}

module.exports = new CourseStudentController();
