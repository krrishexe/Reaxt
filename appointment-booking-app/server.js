const express = require('express');
const colors = require('colors');
const morgan = require('morgan')
const dotenv = require('dotenv');

const app = express();
dotenv.config();        // --> it will grant access to the .env file to the server

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.get('/', (req,res)=>{
    res.status(200).send({
        message: "Welcome to the API"
    })
})


const port = process.env.PORT || 8080

app.listen(port , ()=>{
    console.log(
        `Server is running on port ${process.env.PORT} in ${process.env.NODE_MODE} mode`.bgMagenta.white
        )
});