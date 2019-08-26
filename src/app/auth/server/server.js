const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const api = require('./api')
const app = express()

app.use(bodyParser.json())

app.use('/api', api)

app.listen(port, () => {
  console.log("Server is running on port", port)
})
