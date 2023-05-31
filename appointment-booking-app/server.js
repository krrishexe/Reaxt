const express = require('express');
const colors = require('colors');
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
dotenv.config();        // --> it will grant access to the .env file to the server


//mongodb connection
connectDB();


//middleware
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/v1/user',require('./routes/userRoutes'))


//port
const port = process.env.PORT || 8080

app.listen(port , ()=>{
    console.log(
        `Server is running on port ${process.env.PORT} in ${process.env.NODE_MODE} mode`.bgMagenta.white
        )
});