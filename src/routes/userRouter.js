const express = require('express')
const usersRouter = express.Router()
const userController = require('../controllers/userController')

usersRouter
    .get('/', userController.getAllUsers)
    .post('/', userController.postOneUser)

module.exports = usersRouter