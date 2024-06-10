const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_app_db', 'tu_usuario', 'tu_contraseña', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
