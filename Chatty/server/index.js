const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const userRoutes = require('./routes/userRoutes')
const { connectDB } = require('./db')
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use("/api/auth",userRoutes)     // auth vale sare routes userRoutes me hai

connectDB()

// ;(async ()=>{
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URL)
//         app.on('error',(err)=>{
//             console.log("Error connecting to Mongoose :" , err)
//         })
        
//         app.listen(process.env.PORT, () => {
//             console.log(`Server live on port ${process.env.PORT}`)
//         })
//         console.log(`MongoDB Connected`);
//     } catch (error) {
//         console.log("Error: " + error)
//         throw error
//     }
// })() 
//IIFE
// mongoose.connect(process.env.MONGO_URL).then(() => {
//     console.log("DB connection established")
// }).catch(err => console.log(err));




// FLOW --> INDEX --> ROUTES --> CONTROLLERS --> MODELS.