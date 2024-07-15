const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config.js');

const Course_Program = sequelize.define('Course_Program', {
    program_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    courses_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}); 


module.exports = Course_Program;