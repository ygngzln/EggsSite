const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/middleware')
const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/route'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server listening at port ${port}`))