const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config.js');

const Degree = sequelize.define('Degree', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nb_year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}); 


module.exports = Degree;