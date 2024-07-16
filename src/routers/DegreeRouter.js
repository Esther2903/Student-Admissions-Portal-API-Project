const express = require('express')
const DegreeController = require ('../controllers/DegreeController')
const degreeRouter = express.Router()


degreeRouter.post('/', DegreeController.createDegree);
degreeRouter.get('/:id', DegreeController.getDegreeById);
degreeRouter.put('/:id', DegreeController.updateDegree);
degreeRouter.delete('/:id', DegreeController.deleteDegree);
degreeRouter.get('/', DegreeController.getAllDegree);


module.exports = degreeRouter;
