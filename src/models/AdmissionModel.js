const { DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/db_config.js');

const Admission = sequelize.define('Admission', {
    motivation_letter: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    graduation_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
        allowNull: false,
        defaultValue: 'pending',
    },
    average_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    card_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    student_id: {
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
    },
});

module.exports = Admission;