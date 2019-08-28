const db = 'mongodb://sourvinos:Ncc74656@ds036178.mlab.com:36178/expeditions'
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const jwt = require('jsonwebtoken')
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
            let payload = {
                subject: registeredUser._id
            }
            let token = jwt.sign(payload, 'SECRETKEY')
            res.status(200).send({
                token
            })
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
                    let payload = {
                        subject: user._id
                    }
                    let token = jwt.sign(payload, 'SECRETKEY')
                    res.status(200).send({
                        token
                    })
                }
            }
        }
    })
})

router.get('/events', (req, res) => {
    let events = [{
        id: 1,
        description: 'Event1'
    }, {
        id: 2,
        description: 'Event 2'
    }]
    res.json(events)
})

router.get('/special', (req, res) => {
    let events = [{
        id: 1,
        description: 'Event1'
    }, {
        id: 2,
        description: 'Event 2'
    }]
    res.json(events)
})

module.exports = router