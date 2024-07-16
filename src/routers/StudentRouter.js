const express = require('express')
const studentController = require ('../controllers/StudentController')
const studentRouter = express.Router()
const upload = require('../middlewares/upload')


studentRouter.post('/', upload.single('photo_url'), studentController.createStudent);
studentRouter.get('/:id', studentController.getStudentById);
studentRouter.put('/:id', upload.single('photo_url'), studentController.updateStudent);
studentRouter.delete('/:id', studentController.deleteStudent);
studentRouter.get('/', studentController.getAllStudent);


module.exports = studentRouter;
