const express = require('express')
const app = express()

//Home page test
app.get('/:id', (req, res) => {
    res.json({id: req.params.id})
})
app.get('/', (req, res) => {
    res.json({id: "hello"})
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
