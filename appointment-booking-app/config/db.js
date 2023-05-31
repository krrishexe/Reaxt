const mongoose = require('mongoose')
const colors= require('colors')

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected...${mongoose.connection.host}`.green.inverse)
    } catch (error) {
        console.log(`Error connecting to MongoDB ${error.message}`.bgred.white)
    }
}

module.exports = connectDB