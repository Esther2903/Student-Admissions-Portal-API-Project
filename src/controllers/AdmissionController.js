const AdmissionService = require ('../services/AdmissionService')

class AdmissionController {

    async createAdmission(req, res){
        try{
            const admissionData = {
                motivation_letter: req.files['motivation_letter'] ? req.files['motivation_letter'][0].path: '',
                graduation_year: req.body.graduation_year,
                average_score: req.body.average_score,
                card_url: req.files['card_url'] ? req.files['card_url'][0].path: '',
                student_id: req.body.student_id,
                university_id: req.body.university_id,
                degree_id: req.body.degree_id,
            }
            const admission = await AdmissionService.createAdmission(admissionData);
            res.status(201).send(admission)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }


    async updateAdmission(req, res){
        try{
            const admission = await AdmissionService.updateAdmission(req.params.id, req.body)
            if(!admission){
                return res.status(404).send({err : 'Admission not found!'})
            }
            res.status(200).send(admission)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async deleteAdmission(req, res){
        try{
            const admission = await AdmissionService.deleteAdmission(req.params.id)
            if(!admission){
                return res.status(404).send({err : 'Admission not found!'})
            }
            res.send({message: 'Admission deleted successfully!'})
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async getAdmissionById(req, res){
        try {
            const admission = await AdmissionService.getAdmissionById(req.params.id);
            if (!admission) {
                return res.status(404).json({ error: 'Admission not found' });
            }
            res.status(200).json(admission);
        } catch (error) {
            res.status(400).send({ error : error.message });
        }
    }

    async getAllAdmission(req, res){
        try{
            const admission = await AdmissionService.getAllAdmission()
            res.send(admission)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

}

module.exports = new AdmissionController()