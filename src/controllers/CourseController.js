const CourseService = require ('../services/CourseService')

class CourseController {

    async createCourse(req, res){
        try{
            const courseData = {
                name: req.body.name,
                description: req.body.description,
                credit: req.body.credit,
                level: req.body.level,
                semester: req.body.semester, 
                university_id: req.body.university_id, 
                degree_id: req.body.degree_id,
            }
            const course = await CourseService.createCourse(courseData);
            res.status(201).send(course)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }


    async updateCourse(req, res){
        try{
            const course = await CourseService.updateCourse(req.params.id, req.body)
            if(!course){
                return res.status(404).send({err : 'Course not found!'})
            }
            res.status(200).send(course)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async deleteCourse(req, res){
        try{
            const course = await CourseService.deleteCourse(req.params.id)
            if(!course){
                return res.status(404).send({err : 'Course not found!'})
            }
            res.send({message: 'Course deleted successfully!'})
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

    async getCourseById(req, res){
        try {
            const course = await CourseService.getCourseById(req.params.id);
            if (!course) {
                return res.status(404).json({ error: 'Course not found' });
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(400).send({ error : error.message });
        }
    }

    async getAllCoures(req, res){
        try{
            const courses = await CourseService.getAllCoures()
            res.send(courses)
        }catch(err){
            res.status(400).send({ err : err.message })
        }
    }

}

module.exports = new CourseController()