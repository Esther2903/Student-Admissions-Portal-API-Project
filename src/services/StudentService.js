const {User, Student} = require('../models/Index');

class StudentService {

    async createStudent({firstname, lastname, address, phone_number, dateNaiss, pays, sexe, nationality, photo_url, users_id}){
        const user = await User.findOne({ where: { id: users_id } })
        if (!user) {
            throw new Error('User not found');
        }
        user.role="student";
        await user.save();
        const student = await Student.create({firstname, lastname, address, phone_number, dateNaiss, pays, sexe, nationality, photo_url, users_id})
        return  student;                    
    }

    async getStudentById(studentId){
        return await Student.findByPk(studentId);
    }

    async updateStudent(studentId, studentData) {
        const student = await Student.findByPk(studentId);
        if (!student) {
            throw new Error('Student not found');
        }
        return await student.update(studentData);
    }

    async deleteStudent(studentId) {
        const student = await Student.findByPk(studentId);
        if (!student) {
            throw new Error('Student not found');
        }
        const user = await User.findOne({ where: { id: student.users_id }});
        user.role="user";
        await user.save();
        return await student.destroy();    
    }

    async getAllStudent(){
        return await Student.findAll()
    }
    
}

module.exports = new StudentService();