const asyncHandler = require('express-async-handler')

const Sword = require('../model/model')

const getData = asyncHandler(async(req, res) => {
    const sword = await Sword.find()

    res.status(200).json(sword)
})

const postData = asyncHandler(async(req, res) => {
    if(!req.body.sword){
        res.status(400)
        throw new Error('Posting data missing sword number')
    }

    const sword = await Sword.create({
        sword: req.body.sword,
    });

    res.status(200).json(sword)
})

const putData = asyncHandler(async(req, res) => {
    const sword = await Sword.findById(req.params.id)

    if(!sword){
        res.status(400)
        throw new Error('Not found in database')
    }

    const updatedSword = await Sword.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedSword)
})

const delData = asyncHandler(async(req, res) => {
    const sword = await Sword.findById(req.params.id)

    if(!sword){
        res.status(400)
        throw new Error('Not found in database')
    }

    const updatedSword = await Sword.findByIdAndDelete(req.params.id, req.body);

    res.status(200).json({
        "deletedID": updatedSword._id,
        "deleted": true,
        "deletedValue": updatedSword.sword
    })
})

module.exports = {
    getData,
    postData,
    putData,
    delData,
}