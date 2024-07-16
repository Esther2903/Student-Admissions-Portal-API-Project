const sequelize = require('../config/db_config');
const User = require('./UserModel');
const University = require('./UniversiteModel');
const Student = require('./StudentModel');
const Course = require('./CourseModel');
const Admission = require('./AdmissionModel');
const Degree = require('./DegreeModel');
const Course_Student = require('./Course_studentModel');
const Program = require('./ProgramModel');
const Program_degree = require('./Program_degreeModel');
const Course_Program = require('./Courses_programModel');

User.hasOne(Student);
Student.belongsTo(User, { 
    foreignKey: {
        name: 'users_id', 
    }
});
User.hasOne(University);
University.belongsTo(User, {
  foreignKey: {
    name: 'users_id',
  },
});

University.hasMany(Course, { foreignKey: 'university_id' });
Course.belongsTo(University);

Degree.hasMany(Course, { foreignKey: 'degree_id' });
Course.belongsTo(Degree);

Student.hasMany(Admission, { foreignKey: 'student_id' });
Admission.belongsTo(Student);

University.hasMany(Admission, { foreignKey: 'university_id' });
Admission.belongsTo(University);

Degree.hasMany(Admission, {foreignKey: 'degree_id'});
Admission.belongsTo(Degree);

Student.belongsToMany(Course, {through: Course_Student, foreignKey: 'student_id'});
Course.belongsToMany(Student, { through: Course_Student, foreignKey: 'courses_id' });

University.hasMany(Program, { foreignKey: 'university_id' });
Program.belongsTo(University);

Program.belongsToMany(Degree, {through: Program_degree, foreignKey: 'program_id'});
Degree.belongsToMany(Program, {through: Program_degree, foreignKey: 'degree_id'});

Course.belongsToMany(Program, {through:  Course_Program, foreignKey: 'courses_id'});
Program.belongsToMany(Course, {through:  Course_Program, foreignKey: 'program_id'});

sequelize.sync({ alter: true }).then(() => {
    console.log('Database & tables created!');
});
module.exports = {
    User,
    University,
    Student,
    Course,
    Admission,
    Degree,
    Course_Student,
    Program,
    Program_degree,
    Course_Program,
};
