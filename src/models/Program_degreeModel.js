const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config.js');

const Program_degree = sequelize.define('Program_degree', {
    program_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    degree_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}); 


module.exports = Program_degree;