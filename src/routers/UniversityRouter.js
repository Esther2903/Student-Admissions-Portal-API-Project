const express = require('express')
const universityController = require ('../controllers/UniversityController')
const universityRouter = express.Router()
const upload = require('../middlewares/upload')
const { auth, adminAuth } = require ('../middlewares/Auth')


universityRouter.post('/', auth, upload.single('logo'), universityController.createUniversity);
universityRouter.get('/:id', auth, adminAuth, universityController.getUniversityById);
universityRouter.put('/:id', auth, adminAuth, upload.single('logo'), universityController.updateUniversity);
universityRouter.delete('/:id', auth, adminAuth, universityController.deleteUniversity);
universityRouter.get('/', auth, universityController.getAllUniversity);


module.exports = universityRouter;
