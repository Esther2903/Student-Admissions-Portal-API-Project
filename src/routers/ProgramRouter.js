const express = require('express');
const ProgramController = require('../controllers/ProgramController');
const programRouter = express.Router();

programRouter.post('/', ProgramController.createProgram);
programRouter.get('/:id', ProgramController.getProgramById);
programRouter.put('/:id', ProgramController.updateProgram);
programRouter.delete('/:id', ProgramController.deleteProgram);
programRouter.get('/', ProgramController.getAllPrograms);

module.exports = programRouter;
