const mongoose = require('mongoose')

const schemaSwords = mongoose.Schema({
    sword: {
        type: Number,
        required: [true, "Please select a sword"]
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('Sword', schemaSwords)