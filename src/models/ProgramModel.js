const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config.js');

const Program = sequelize.define('Program', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    university_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}); 


module.exports = Program;
  