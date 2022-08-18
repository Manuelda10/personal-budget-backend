require('dotenv').config() //Dotenv to detenct the .env variables
const express = require('express') 
const cors = require('cors')
const app = express()

const db = require('./database/db')//Only to show initial data

db.sequelize.sync({force: true})

//Import the routes
const categoriesRouter = require('./routes/categoryRoutes')
const transactionsRouter = require('./routes/transactionRoutes')
const typesRouter = require('./routes/typeRoutes')
const usersRouter = require('./routes/userRouter')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Personal Budget API</h1>')
})

app.use('/api/transactions', transactionsRouter)
app.use('/api/types', typesRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/users', usersRouter)

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})