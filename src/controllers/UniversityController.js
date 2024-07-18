const universityService = require ('../services/UniversityService')

class UniversityController {

    async createUniversity(req, res) {
        try {
            const universityData = {
                name: req.body.name,
                description: req.body.description,
                location: req.body.location,
                contactUniversity: req.body.contactUniversity,
                logo: req.file ? req.file.path : '',
                pays: req.body.pays,
                website: req.body.website,
                established_year: req.body.established_year
            };

            const university = await universityService.createUniversity(universityData, req.user.id);
            res.status(201).send(university);
        } catch (err) {
            res.status(400).send({ err: err.message });
        }
    }
    
    async updateUniversity(req, res){
        try{
            const university = await universityService.updateUniversity(req.params.id, req.body, req.user.id)
            if(!university){
                return res.status(404).send({err : 'University not found!'})
            }
            res.status(200).send(university)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async deleteUniversity(req, res){
        try{
            const university = await universityService.deleteUniversity(req.params.id, req.user.id)
            if(!university){
                return res.status(404).send({err : 'University not found!'})
            }
            res.send({message: 'University deleted successfully!'})
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async getUniversityById(req, res){
        try {
            const university = await universityService.getUniversityById(req.params.id, req.user.id);
            if (!university) {
                return res.status(404).json({ error: 'University not found' });
            }
            res.status(200).json(university);
        } catch (error) {
            res.status(400).send({ error : error.message });
        }
    }

    async getAllUniversity(req, res){
        try{
            const university = await universityService.getAllUniversity()
            res.send(university)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

}

module.exports = new UniversityController()