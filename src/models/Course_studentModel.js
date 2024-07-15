const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config.js');

const Course_Student = sequelize.define('Course_Student', {
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    courses_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dateIns: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}); 


module.exports = Course_Student;