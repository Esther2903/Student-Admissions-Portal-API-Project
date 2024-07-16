const express = require('express')
const AdmissionController = require ('../controllers/AdmissionController')
const admissionRouter = express.Router()
const upload = require('../middlewares/upload')


admissionRouter.post('/', upload.single('motivation_letter', 'card_url'), AdmissionController.createAdmission);
admissionRouter.get('/:id', AdmissionController.getAdmissionById);
admissionRouter.put('/:id', upload.single('motivation_letter', 'card_url'), AdmissionController.updateAdmission);
admissionRouter.delete('/:id', AdmissionController.deleteAdmission);
admissionRouter.get('/', AdmissionController.getAllAdmission);


module.exports = admissionRouter;
