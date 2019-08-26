const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const db = 'mongodb://sourvinos:Ncc74656@ds036178.mlab.com:36178/expeditions'
const User = require('../models/user')

mongoose.connect(db, err => {
    if (err)
        console.log('Error connecting to the database', err)
    else
        console.log('Connected to the database')
})

router.get('/', (req, res) => {
    res.send('Hello from the API!')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log("Error writing to the database")
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({
        email: userData.email
    }, (error, user) => {
        if (error)
            console.log('Error reading from the database')
        else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else if (user.password != userData.password) {
                res.status(401).send('Invalid password')
            } else {
                if (user.password == userData.password) {
                    res.status(200).send(user)
                }
            }
        }
    })
})

module.exports = router