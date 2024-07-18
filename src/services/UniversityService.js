const {User, University} = require('../models/Index');

class UniversityService {

    async createUniversity({ name, description, location, contactUniversity, logo, pays, website, established_year }, users_id) {
        try {
            const user = await User.findByPk(users_id);
            if (!user) {
                throw new Error('User not found');
            }
            user.role = "admin";
            await user.save();

            const university = await University.create({
                name,
                description,
                location,
                contactUniversity,
                logo,
                pays,
                website,
                established_year,
                users_id: user.id
            });

            return university;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getUniversityById(universityId, users_id){
        const university = await University.findByPk(universityId);
        if (!university || university.users_id !== users_id) {
            throw new Error('University not found or access denied');
        }
        return university;
    }

    async updateUniversity(universityId, universityData, users_id) {
        const university = await University.findByPk(universityId);
        if (!university || university.users_id !== users_id) {
            throw new Error('University not found or access denied');
        }
        return await university.update(universityData);
    }

    async deleteUniversity(universityId, users_id) {
        const university = await University.findByPk(universityId);
        if (!university || university.users_id !== users_id) {
            throw new Error('University not found or access denied');
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

