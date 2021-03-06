const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const fig = await mongoose.connect(process.env.MONGO)
        console.log(`MongoDB has been connnected at ${fig.connection.host}`)
    } catch (e){
        console.log(e)
        process.exit(1)
    }
}

module.exports = connectDB