const DegreeService = require ('../services/DegreeService')

class DegreeController {

    async createDegree(req, res){
        try{
            const degreeData = {
                name: req.body.name,
                description: req.body.description,
                nb_year: req.body.nb_year,
            }
            const degree = await DegreeService.createDegree(degreeData);
            res.status(201).send(degree)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }


    async updateDegree(req, res){
        try{
            const degree = await DegreeService.updateDegree(req.params.id, req.body)
            if(!degree){
                return res.status(404).send({err : 'Degree not found!'})
            }
            res.status(200).send(degree)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async deleteDegree(req, res){
        try{
            const degree = await DegreeService.deleteDegree(req.params.id)
            if(!degree){
                return res.status(404).send({err : 'Degree not found!'})
            }
            res.send({message: 'degree deleted successfully!'})
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async getDegreeById(req, res){
        try {
            const degree = await DegreeService.getDegreeById(req.params.id);
            if (!degree) {
                return res.status(404).json({ error: 'Degree not found' });
            }
            res.status(200).json(degree);
        } catch (error) {
            res.status(400).send({ error : error.message });
        }
    }

    async getAllDegree(req, res){
        try{
            const degrees = await DegreeService.getAllDegree()
            res.send(degrees)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

}

module.exports = new DegreeController()