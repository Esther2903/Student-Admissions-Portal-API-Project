const express = require('express');
const ProgramDegreeController = require('../controllers/ProgramDegreeController');
const programDegreeRouter = express.Router();

programDegreeRouter.post('/', ProgramDegreeController.createProgramDegree);
programDegreeRouter.get('/:id', ProgramDegreeController.getProgramDegreeById);
programDegreeRouter.put('/:id', ProgramDegreeController.updateProgramDegree);
programDegreeRouter.delete('/:id', ProgramDegreeController.deleteProgramDegree);
programDegreeRouter.get('/', ProgramDegreeController.getAllProgramDegrees);

module.exports = programDegreeRouter;
