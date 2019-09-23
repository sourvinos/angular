const db = 'mongodb://sourvinos:Ncc74656@ds036178.mlab.com:36178/expeditions'
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')

mongoose.connect(db, {
    useNewUrlParser: true
}).then(
    () => {
        console.log('Connected to the database!')
    },
    err => {
        console.log('Error! Could not connect')
    }
);

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
        description: 'Event2'
    }]
    res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
    let events = [{
        id: 1,
        description: 'Event1'
    }, {
        id: 2,
        description: 'Event2'
    }]
    res.json(events)
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) return res.status(401).send('Unauthorized request')
    let token = req.headers.authorization.split(' ')[1]
    if (!token) return res.status(401).send('Unauthorized request')
    let payload = jwt.verify(token, 'SECRETKEY')
    if (!payload) return res.status(401).send('Unauthorized request')
    req.userId = payload.subject.next()
}

module.exports = router