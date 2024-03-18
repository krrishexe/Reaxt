const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./db/index')
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')

app.use(express.json())
app.use(cors())


app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.get('/', (req, res) => {
    res.send("helllo world")
})

connectDB().then(() => {
    app.listen(3000, () => {
        console.log("Server listening on port http://localhost:3000")
    })
}).catch((err)=>{
    console.log(err)
})