const {Degree} = require('../models/Index');

class DegreeService {

    async createDegree({name, description, nb_year}){
        const degree = await Degree.create({name, description, nb_year})
        return  degree;                    
    }

    async getDegreeById(degreeId){
        return await Degree.findByPk(degreeId);
    }

    async updateDegree(degreeId, degreeData) {
        const degree = await Degree.findByPk(degreeId);
        if (!degree) {
            throw new Error('Degree not found');
        }
        return await degree.update(degreeData);
    }

    async deleteDegree(degreeId) {
        const degree = await Degree.findByPk(degreeId);
        if (!degree) {
            throw new Error('Degree not found');
        }
        return await degree.destroy();    
    }

    async getAllDegree(){
        return await Degree.findAll()
    }
    
}

module.exports = new DegreeService();