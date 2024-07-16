const {User, University} = require('../models/Index');

class UniversityService {

    async createUniversity({name, description, location, contactUniversity, logo, pays, website, established_year, users_id}){
        const user = await User.findOne({ where: { id: users_id } })
        if (!user) {
            throw new Error('User not found');
        }
        user.role="admin";
        await user.save();
        const university = await University.create({name, description, location, contactUniversity, logo, pays, website, established_year, users_id})
        return  university;                    
    }

    async getUniversityById(universityId){
        return await University.findByPk(universityId);
    }

    async updateUniversity(universityId, universityData) {
        const university = await University.findByPk(universityId);
        if (!university) {
            throw new Error('University not found');
        }
        return await university.update(universityData);
    }

    async deleteUniversity(universityId) {
        const university = await University.findByPk(universityId);
        if (!university) {
            throw new Error('Student not found');
        }
        const user = await User.findOne({ where: { id: university.users_id }});
        user.role="user";
        await user.save();
        return await university.destroy();    
    }

    async getAllUniversity(){
        return await University.findAll()
    }
    
}

module.exports = new UniversityService();