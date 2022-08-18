const Category = require('./category')
const Transaction = require('./transaction')
const Type = require('./type')
const User = require('./user')

Type.hasMany(Category, {onDelete: 'CASCADE'})
Category.belongsTo(Type, {onDelete: 'CASCADE'})

Type.hasMany(Transaction, {onDelete: 'CASCADE'})
Transaction.belongsTo(Type, {onDelete: 'CASCADE'})

Category.hasMany(Transaction, {onDelete: 'CASCADE'})
Transaction.belongsTo(Category, { onDelete: 'CASCADE' })

User.hasMany(Transaction, { onDelete: 'CASCADE' })
Transaction.belongsTo(User, {onDelete: 'CASCADE'})

module.exports = { Category, Transaction, Type, User }

