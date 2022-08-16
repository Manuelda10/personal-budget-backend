const { Type, Transaction, Category } = require("../models/association")

//GET
const getAllTypes = async (req, res) => {
    try {
        const types = await Type.findAll({})
        res.json(types)
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error ocurred while retrieving types'
        })
    }
}

//GET
const getOneType = async (req, res) => {
    const id = req.params.id
    try {
        const type = await Type.findByPk(id)
        res.send(type)
    } catch (err) {
        res.status(500).send({
            message: `Error while retrieving Transaction with id: ${id}`
        })
    }
}

//GET
const getTransactionsByType = async (req, res) => {
    const idType = req.params.id
    try {
        const transactions = await Transaction.findAll({ where: { typeId: idType } })
        res.json(transactions)
    } catch (err) {
        res.status(500).send({
            message: `Error retrieving transactions of Type with id: ${idType}`
        })
    }
}

//GET
const getCategoriesByType = async (req, res) => {
    const idType = req.params.id
    try {
        const categories = await Category.findAll({ where: { typeId: idType } })
        res.json(categories)
    } catch (err) {
        res.status(500).send({
            message: `Error retrieving categorires of Type with id: ${idType}`
        })
    }
}

//POST
const postOneType = async (req, res) => {
    const { name } = req.body
    
    if (!name) {
        return res.status(400).send({
            message: 'Name of a type can not be empty'
        })
    }

    const type = {
        name: name
    }

    try {
        const savedType = await Type.create(type)
        res.status(201).json(savedType)
    } catch (err) {
        res.status(500).send({
            message: err.message || 'An error ocurred while creating the type'
        })
    }
}

//DELETE
const deleteType = async (req, res) => {
    const id = req.params.id

    try {
        const deletedType = await Type.destroy({
            where: {id: id}
        })

        if (deletedType == 1) {
            res.send({
                message: 'Type was deleted successfully'
            })
        } else {
            res.send({
                message: `Can not delete Type with id: ${id}. Maybe was not found`
            })
        }
    } catch (err) {
        res.status(500).send({
            message: `Could not delete Type with id: ${id}`
        })
    }
}

module.exports = {
    getAllTypes,
    getOneType,
    getTransactionsByType,
    getCategoriesByType,
    postOneType,
    deleteType
}