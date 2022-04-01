const asyncHandler = require('express-async-handler')

const getData = asyncHandler(async(req, res) => {
    res.status(200).json({selection: 'get sword7'})
})

const postData = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Post command missing text.')
    }
    res.status(200).json({selection: 'post sword7'})
})

const putData = asyncHandler(async(req, res) => {
    res.status(200).json({selection: `put sword7 ${req.params.id}`})
})

const delData = asyncHandler(async(req, res) => {
    res.status(200).json({selection: `delete sword7 ${req.params.id}` })
})

module.exports = {
    getData,
    postData,
    putData,
    delData,
}