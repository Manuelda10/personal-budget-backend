const { Transaction } = require("../models/association")
const jwt = require('jsonwebtoken')

//GET
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll({
            order: [["id", "DESC"]]
        })
        res.json(transactions)
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error ocurred while retrieving transactions'
        })
    }
}

//GET
const getOneTransaction = async (req, res) => {
    const id = req.params.id
    try {
        const transaction = await Transaction.findByPk(id)
        res.send(transaction)
    } catch (err) {
        res.status(500).send({
            message: `Error while retrieving Transaction with id: ${id}`
        })
    }
}

//POST
const postOneTransaction = async (req, res) => {
    const { concept, amount, date, categoryId, typeId } = req.body
    const {userId} = req

    try {
        if (!concept) {
            return res.status(400).send({
                message: 'Concept can not be empty'
            })
        }

        const transaction = {
            concept,
            amount,
            date,
            categoryId,
            typeId,
            userId
        }

        console.log(transaction)

        //Save the transaction: It has to be created after creating a type and category
        const savedTransaction = await Transaction.create(transaction)
        res.status(201).json(savedTransaction)
    } catch (err) {
        res.status(500).send({
            message: 'An error ocurred while creating the transaction'
        })
    }
}

//PUT
const updateTransaction = async (req, res) => {
    const id = req.params.id
    const { concept, amount, date, categoryId } = req.body
    try {
        const updatedTransaction = await Transaction.update({ concept, amount, date, categoryId }, {
            where: {id: id}
        })
        res.send(updatedTransaction)
    } catch (err) {
        res.status(500).send({
            message: `Error updating Transaction with id ${id}`
        })
    }
}

//DELETE
const deleteTransaction = async (req, res) => {
    const id = req.params.id

    try {
        const deletedTransaction = await Transaction.destroy({
            where: {id:id}
        })

        if (deletedTransaction == 1) {
            res.send({
                message: 'Transaction was deleted successfully'
            })
        } else {
            res.send({
                message: `Can not delete Transaction with id: ${id}. Maybe was not found`
            })
        }
    } catch (err) {
        res.status(500).send({
            message: `Could not delete Transaction with id: ${id}`
        })
    }
}

module.exports = {
    getAllTransactions,
    getOneTransaction,
    postOneTransaction,
    updateTransaction,
    deleteTransaction
}