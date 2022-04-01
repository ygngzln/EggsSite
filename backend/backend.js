const express = require('express')
const dotenv = require('dotenv').config({path:__dirname+'/.env'})
const port = process.env.PORT || 3000

const app = express()
app.get('/api/goals', (req, res) => {
    // res.send("GET GOOD L")
    res.status(200).json({"12908310293012": 'the cake'})
})

app.listen(port, () => console.log(`Server listening at port ${port}`))