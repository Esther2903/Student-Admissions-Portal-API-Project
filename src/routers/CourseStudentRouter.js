const express = require('express');
const CourseStudentController = require('../controllers/CourseStudentController');
const courseStudentRouter = express.Router();

courseStudentRouter.post('/', CourseStudentController.createCourseStudent);
courseStudentRouter.get('/:id', CourseStudentController.getCourseStudentById);
courseStudentRouter.put('/:id', CourseStudentController.updateCourseStudent);
courseStudentRouter.delete('/:id', CourseStudentController.deleteCourseStudent);
courseStudentRouter.get('/', CourseStudentController.getAllCourseStudents);

module.exports = courseStudentRouter;
