const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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

const loginUser = async (req, res) => {
    const { username, password } = req.body
    
    try {
        const user = await User.findOne({ where: { username } })
        
        const passwordCorrect = user === null
            ? false
            : await bcrypt.compare(password, user.password)
        
        if (!(user && passwordCorrect)) {
            res.status(401).json({
                error: 'Invalid user or password'
            })
        } else {
            const userForToken = {
                id: user.id,
                username: user.username
            }

            const token = jwt.sign(userForToken, process.env.SECRET)

            res.send({
                name: user.username,
                token
            })
        }
        
    } catch (err) {
        res.status(500).send({
            message: 'An error ocurred while login the user'
        })
    }
    
}

module.exports = {
    postOneUser,
    getAllUsers,
    loginUser
}