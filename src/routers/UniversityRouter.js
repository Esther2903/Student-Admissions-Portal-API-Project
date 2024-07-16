const express = require('express')
const universityController = require ('../controllers/UniversityController')
const universityRouter = express.Router()
const upload = require('../middlewares/upload')


universityRouter.post('/', upload.single('logo'), universityController.createUniversity);
universityRouter.get('/:id', universityController.getUniversityById);
universityRouter.put('/:id', upload.single('logo'), universityController.updateUniversity);
universityRouter.delete('/:id', universityController.deleteUniversity);
universityRouter.get('/', universityController.getAllUniversity);


module.exports = universityRouter;
