const { DataTypes } = require('sequelize');
const sequelize = require('./Config/DataBase');

const Patient = sequelize.define('Patient', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true 
        }
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true 
        }
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true 
        }
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    }
}, {
    timestamps: false 
});


sequelize.sync()
    .then(() => {
        console.log('Patient table created successfully!');
    })
    .catch((error) => {
        console.error('Unable to create table : ', error);
    });

module.exports = Patient;
