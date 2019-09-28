const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()//Call and connect to the db

app.use(express.json({ extended: false })); //Now we can accept body data

//Home page test
app.get('/', (req, res) => {
    res.json({msg: "hello from the backend"})
})
app.post('/', (req, res) => {
    res.json({msg: "you made a user"})
})



// app.get('/', (req, res) => {
//     res.json({id: req.params.id})
// })



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
