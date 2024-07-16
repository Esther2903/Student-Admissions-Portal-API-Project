const {Admission} = require('../models/Index');

class AdmissionService {

    async createAdmission({motivation_letter, graduation_year, average_score, card_url, student_id, university_id, degree_id}){
        const admission = await Admission.create({motivation_letter, graduation_year, average_score, card_url, student_id, university_id, degree_id})
        return  admission;                    
    }

    async getAdmissionById(admissionId){
        return await Admission.findByPk(admissionId);
    }

    async updateAdmission(admissionId, admissionData) {
        const admission = await Admission.findByPk(admissionId);
        if (!admission) {
            throw new Error('Admission not found');
        }
        return await admission.update(admissionData);
    }

    async deleteAdmission(admissionId) {
        const admission = await Admission.findByPk(admissionId);
        if (!admission) {
            throw new Error('Admission not found');
        }
        return await admission.destroy();    
    }

    async getAllAdmission(){
        return await Admission.findAll()
    }
    
}

module.exports = new AdmissionService();