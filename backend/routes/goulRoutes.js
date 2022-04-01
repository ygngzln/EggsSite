const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({selection: 'sword7'})
})

module.exports = router;