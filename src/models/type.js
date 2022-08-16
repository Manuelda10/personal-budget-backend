const { sequelize, Sequelize } = require('../database/db')

const Type = sequelize.define('type', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
})

module.exports = Type