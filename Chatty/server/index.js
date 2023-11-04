const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const userRoutes = require('./routes/userRoutes')
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use("/api/auth",userRoutes)     // auth vale sare routes userRoutes me hai

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB connection established")
}).catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log(`Server live on port ${process.env.PORT}`)
})


// FLOW --> INDEX --> ROUTES --> CONTROLLERS --> MODELS.