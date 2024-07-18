const express = require('express');
const ProgramController = require('../controllers/ProgramController');
const programRouter = express.Router();
const { auth, adminAuth } = require ('../middlewares/Auth')


programRouter.post('/', auth, adminAuth, ProgramController.createProgram);
programRouter.get('/:id', auth, ProgramController.getProgramById);
programRouter.put('/:id', auth, ProgramController.updateProgram);
programRouter.delete('/:id', auth, ProgramController.deleteProgram);
programRouter.get('/', auth, ProgramController.getAllPrograms);

module.exports = programRouter;
