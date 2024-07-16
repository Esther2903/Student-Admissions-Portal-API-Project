const studentService = require ('../services/StudentService')

class StudentController {

    async createStudent(req, res){
        try{
            const studentData = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                address: req.body.address,
                phone_number: req.body.phone_number,
                dateNaiss: req.body.dateNaiss,
                pays: req.body.pays,
                sexe: req.body.sexe,
                nationality: req.body.nationality,
                photo_url: req.file ? req.file.path: '', 
                users_id: req.body.users_id
            }
            const student = await studentService.createStudent(studentData);
            res.status(201).send(student)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }


    async updateStudent(req, res){
        try{
            const student = await studentService.updateStudent(req.params.id, req.body)
            if(!student){
                return res.status(404).send({err : 'Status not found!'})
            }
            res.status(200).send(student)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async deleteStudent(req, res){
        try{
            const student = await studentService.deleteStudent(req.params.id)
            if(!student){
                return res.status(404).send({err : 'User not found!'})
            }
            res.send({message: 'user deleted successfully!'})
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async getStudentById(req, res){
        try {
            const student = await studentService.getStudentById(req.params.id);
            if (!student) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.status(200).json(student);
        } catch (error) {
            res.status(400).send({ error : error.message });
        }
    }

    async getAllStudent(req, res){
        try{
            const students = await studentService.getAllStudent()
            res.send(students)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

}

module.exports = new StudentController()