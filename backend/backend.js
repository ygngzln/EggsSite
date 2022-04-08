const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/middleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 3001

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/swords', require('./routes/route'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}else{
    app.get('/', (req, res) => res.send('Not production'))
}

app.use(errorHandler)

app.listen(port, () => console.log(`Server listening at port ${port}`))