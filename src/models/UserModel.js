const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config.js');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('user', 'student', 'admin'),
    },
});

module.exports = User;
