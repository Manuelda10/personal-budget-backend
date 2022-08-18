const bcrypt = require('bcrypt')
const { User } = require('../models/association')

const postOneUser = async (req, res) => {
    const { username, password } = req.body

    if (!username) {
        return res.status(400).send({
            message: 'Username can not be empty'
        })
    } 

    if (!password) {
        return res.status(400).send({
            message: 'Password can not be empty'
        })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = {
        username,
        password: passwordHash
    }

    try {
        const savedUser = await User.create(user)
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).send({
            message: 'An error ocurred while creating the new user'
        })
    }
} 

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({})
        res.json(users)
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error ocurred while retrieving users'
        })
    }
}

module.exports = {
    postOneUser,
    getAllUsers
}