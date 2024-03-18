const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://krish:1212@cluster0.liofgxs.mongodb.net/admin")
        console.log("MongoDB connected successfully to host : " + conn.connection.host )
    } catch (error) {
        console.log("Error connecting to the Db :", error)
    }
}

module.exports = connectDB;