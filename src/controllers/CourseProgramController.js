const CourseProgramService = require('../services/CourseProgramService');

class CourseProgramController {
    async createCourseProgram(req, res) {
        try {
            const courseProgramData = {
                program_id: req.body.program_id,
                courses_id: req.body.courses_id,
            };
            const courseProgram = await CourseProgramService.createCourseProgram(courseProgramData);
            res.status(201).send(courseProgram);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async getCourseProgramById(req, res) {
        try {
            const courseProgram = await CourseProgramService.getCourseProgramById(req.params.id);
            if (!courseProgram) {
                return res.status(404).json({ error: 'Course_Program not found' });
            }
            res.status(200).json(courseProgram);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async updateCourseProgram(req, res) {
        try {
            const courseProgram = await CourseProgramService.updateCourseProgram(req.params.id, req.body);
            if (!courseProgram) {
                return res.status(404).send({ err: 'Course_Program not found!' });
            }
            res.status(200).send(courseProgram);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async deleteCourseProgram(req, res) {
        try {
            const courseProgram = await CourseProgramService.deleteCourseProgram(req.params.id);
            if (!courseProgram) {
                return res.status(404).send({ err: 'Course_Program not found!' });
            }
            res.send({ message: 'Course_Program deleted successfully!' });
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }

    async getAllCoursePrograms(req, res) {
        try {
            const coursePrograms = await CourseProgramService.getAllCoursePrograms();
            res.send(coursePrograms);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }
}

module.exports = new CourseProgramController();
