const { Category, Transaction } = require("../models/association")

//GET
const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({})
        res.json(categories)
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error ocurred while retrieving categories'
        })
    }
}

//GET
const getOneCategory = async (req, res) => {
    const id = req.params.id
    try {
        const category = await Category.findByPk(id)
        res.send(category)
    } catch (err) {
        res.status(500).send({
            message: `Error while retrieving Category with id: ${id}`
        })
    }
}

const getTransactionsByCategory = async (req, res) => {
    const id = req.params.id
    try {
        const transactions = await Transaction.findAll({
            where: {categoryId: id}
        })
        res.send(transactions)
    } catch (err) {
        res.status(500).send({
            message: `Error while retrieving Transactions of Category with id: ${id}`
        })
    }
}

//POST
const postOneCategory = async (req, res) => {
    const { name, typeId } = req.body
    
    if (!name) {
        return res.status(400).send({
            message: 'Category name can not be empty'
        })
    }

    const category = {
        name,
        typeId
    }

    try {
        const savedCategory = await Category.create(category)
        res.status(201).json(savedCategory)
    } catch (err) {
        res.status(500).send({
            message: err.message || 'An error ocurred while creating the category'
        })
    }
}

//DELETE
const deleteCategory = async (req, res) => {
    const id = req.params.id

    try {
        const deletedCategory = await Category.destroy({
            where: {id: id}
        })

        if (deletedCategory == 1) {
            res.send({
                message: 'Category was deleted successfully'
            })
        } else {
            res.send({
                message: `Can not delete Category with id: ${id}. Maybe was not found`
            })
        }


    } catch (err) {
        res.status(500).send({
            message: `Could not delete Category with id: ${id}`
        })
    }
}

module.exports = {
    getAllCategories,
    getOneCategory,
    getTransactionsByCategory,
    postOneCategory,
    deleteCategory
}

