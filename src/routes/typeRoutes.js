const express = require('express')
const typesRouter = express.Router()
const typeController = require('../controllers/typeController')

typesRouter
    .get('/', typeController.getAllTypes)
    .get('/:id', typeController.getOneType)
    .get('/:id/transactions', typeController.getTransactionsByType)
    .get('/:id/categories', typeController.getCategoriesByType)
    .post('/', typeController.postOneType)
    .delete('/:id', typeController.deleteType)

module.exports = typesRouter
