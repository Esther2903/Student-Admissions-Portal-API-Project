const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config.js');

const Course = sequelize.define('Course', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    credit: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    level: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    semester: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    university_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    degree_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}); 


module.exports = Course;
  