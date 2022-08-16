const dbConfig = require('./db.config')
const Sequelize = require('sequelize')
const dbConnection = require('./db.connection')

//Creating the database
dbConnection.query(
    `CREATE DATABASE IF NOT EXISTS personal_budget_db`,
    function (err, results) {
        console.log(results);
        console.log(err);
    }
)
dbConnection.end()

//Using the ORM
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: process.env.PORT_DB || 3306,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

module.exports = {sequelize, Sequelize}