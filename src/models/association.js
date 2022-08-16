const Category = require('./category')
const Transaction = require('./transaction')
const Type = require('./type')

Type.hasMany(Category, {onDelete: 'CASCADE'})
Category.belongsTo(Type, {onDelete: 'CASCADE'})

Type.hasMany(Transaction, {onDelete: 'CASCADE'})
Transaction.belongsTo(Type, {onDelete: 'CASCADE'})

Category.hasMany(Transaction, {onDelete: 'CASCADE'})
Transaction.belongsTo(Category, { onDelete: 'CASCADE' })

module.exports = { Category, Transaction, Type }

