const express = require('express');
const userRoute = require('./routers/UserRouter');
const studentRoute = require('./routers/StudentRouter')
const universityRoute = require('./routers/UniversityRouter')
const degreeRoute = require('./routers/DegreeRouter')
const courseRoute = require('./routers/CourseRouter')
const admissionRoute = require('./routers/AdmissionRouter')
const courseStudentRoute = require('./routers/CourseStudentRouter');
const programRoute = require('./routers/ProgramRouter');
const programDegreeRoute = require('./routers/ProgramDegreeRouter');
const courseProgramRoute = require('./routers/CourseProgramRouter');


const router = express();

router.use('/users', userRoute);
router.use('/students', studentRoute);
router.use('/university', universityRoute);
router.use('/degree', degreeRoute);
router.use('/courses', courseRoute);
router.use('/admissions', admissionRoute);
router.use('/course-student', courseStudentRoute);
router.use('/program', programRoute);
router.use('/program-degree', programDegreeRoute);
router.use('/course-program', courseProgramRoute);

module.exports = router;