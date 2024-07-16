const express = require('express')
const CourseController = require ('../controllers/CourseController')
const courseRouter = express.Router()


courseRouter.post('/', CourseController.createCourse);
courseRouter.get('/:id', CourseController.getCourseById);
courseRouter.put('/:id', CourseController.updateCourse);
courseRouter.delete('/:id', CourseController.deleteCourse);
courseRouter.get('/', CourseController.getAllCoures);


module.exports = courseRouter;
