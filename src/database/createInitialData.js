const { Category, Type, Transaction } = require('../models/association')

//Function to create initial data without get a conflict

const createInitialData = () => {
    Type.bulkCreate([
        { name: "Income" },
        { name: "Expenses"}
    ])

    Category.bulkCreate([
        {name: "Paycheck", typeId: 1 },
        {name: "Investment", typeId: 1},
        {name: "Bonus", typeId: 1},
        {name: "Interest", typeId: 1},
        {name: "Reimbursement", typeId: 1},
        { name: "Sell", typeId: 1 },
        { name: "Housing", typeId: 2 },
        { name: "Transportation", typeId: 2 },
        { name: "Food", typeId: 2 },
        { name: "Utilities", typeId: 2 },
        { name: "Healthcare", typeId: 2 },
        { name: "Saving", typeId: 2 },
        { name: "Personal", typeId: 2 },
        { name: "Entertainment", typeId: 2 },
        {name: "Miscellaneous", typeId: 2}
    ])

    Transaction.bulkCreate([
        { concept: "Concept 1", amount: 1250.23, date: "2022-07-15", typeId: 1, categoryId: 1 },
        { concept: "Concept 2", amount: 753.28, date: "2022-06-13", typeId: 1, categoryId: 2 },
        { concept: "Concept 3", amount: 420.50, date: "2022-05-22", typeId: 1, categoryId: 3 },
        { concept: "Concept 4", amount: 150.23, date: "2022-04-20", typeId: 1, categoryId: 4 },
        { concept: "Concept 5", amount: 1500.23, date: "2022-03-07", typeId: 1, categoryId: 5 },
        { concept:"Concept 6", amount:320.80, date:"2022-02-03", typeId: 1, categoryId: 6},
        { concept:"Concept 7", amount:180.70, date:"2022-01-14", typeId: 1, categoryId: 2},
        { concept:"Concept 8", amount:200.60, date:"2022-07-25", typeId: 1, categoryId: 3},
        { concept:"Concept 9", amount:250.20, date:"2022-06-21", typeId: 1, categoryId: 1},
        { concept:"Concept 10", amount:420.30, date:"2022-05-18", typeId: 1, categoryId: 4},
        { concept:"Concept 11", amount:120.80, date:"2022-04-15", typeId: 2, categoryId: 7},
        { concept:"Concept 12", amount:200.60, date:"2022-03-12", typeId: 2, categoryId: 8},
        { concept:"Concept 13", amount:150.30, date:"2022-02-09", typeId: 2, categoryId: 9},
        { concept:"Concept 14", amount:250.80, date:"2022-01-18", typeId: 2, categoryId: 10},
        { concept:"Concept 15", amount:420.30, date:"2022-07-15", typeId: 2, categoryId: 11},
        { concept:"Concept 16", amount:380.50, date:"2022-06-01", typeId: 2, categoryId: 12},
        { concept:"Concept 17", amount:1500.60, date:"2022-05-21", typeId: 2, categoryId: 13},
        { concept:"Concept 18", amount:420.30, date:"2022-04-15", typeId: 2, categoryId: 14},
        { concept:"Concept 19", amount:180.50, date:"2022-03-12", typeId: 2, categoryId: 15},
        { concept:"Concept 20", amount:220.70, date:"2022-02-07", typeId:2, categoryId:7}
    ])
}

module.exports = createInitialData