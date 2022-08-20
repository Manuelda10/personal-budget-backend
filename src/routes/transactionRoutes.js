const express = require('express')
const transactionsRouter = express.Router()
const transactionController = require('../controllers/transactionController')
const userExtractor = require('../middleware/userExtractor')

transactionsRouter
    .get('/', userExtractor, transactionController.getAllTransactions)
    .get('/:id', userExtractor, transactionController.getOneTransaction)
    .post('/', userExtractor, transactionController.postOneTransaction)
    .put('/:id', userExtractor, transactionController.updateTransaction)
    .delete('/:id', userExtractor, transactionController.deleteTransaction)

module.exports = transactionsRouter