const express = require('express');
const CourseProgramController = require('../controllers/CourseProgramController');
const courseProgramRouter = express.Router();

courseProgramRouter.post('/', CourseProgramController.createCourseProgram);
courseProgramRouter.get('/:id', CourseProgramController.getCourseProgramById);
courseProgramRouter.put('/:id', CourseProgramController.updateCourseProgram);
courseProgramRouter.delete('/:id', CourseProgramController.deleteCourseProgram);
courseProgramRouter.get('/', CourseProgramController.getAllCoursePrograms);

module.exports = courseProgramRouter;
