const express = require('express')
const bodyParser = require('body-parser')
const port = 3001
const api = require('./api')
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})
app.use(bodyParser.json())
app.use('/api', api)

app.listen(port, () => {
    console.log("Server is running on port", port)
})