const express = require('express');
const cors = require('cors');
const userRoute = require('./src/routers/UserRouter');
const studentRoute = require('./src/routers/StudentRouter')
const universityRoute = require('./src/routers/UniversityRouter')
const degreeRoute = require('./src/routers/DegreeRouter')
const courseRoute = require('./src/routers/CourseRouter')
const admissionRoute = require('./src/routers/AdmissionRouter')
const courseStudentRoute = require('./src/routers/CourseStudentRouter');
const programRoute = require('./src/routers/ProgramRouter');
const programDegreeRoute = require('./src/routers/ProgramDegreeRouter');


require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000


app.use(express.json());
app.use(cors())

app.use('/api/users', userRoute);
app.use('/api/students', studentRoute);
app.use('/api/university', universityRoute);
app.use('/api/degree', degreeRoute);
app.use('/api/courses', courseRoute);
app.use('/api/admissions', admissionRoute);
app.use('/api/course-student', courseStudentRoute);
app.use('/api/program', programRoute);
app.use('/api/program-degree', programDegreeRoute);

app.get("/", (req, res) => {
        res.send("Welcome to my web server, this is my Student Admissions Portal API");
});

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))