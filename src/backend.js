const express = require('express')
const dotenv = require('dotenv').config({path:__dirname+'/.env'})
const port = process.env.PORT || 3000

const app = express()

app.listen(port, () => console.log(`Server listening at port ${port}`))