const express = require('express')
const router = express.Router()
const _ = require('lodash')

const { User } = require('../models/user')
const { authenticateUser } = require('../middlewares/authentication')


router.get('/', authenticateUser,function(req, res) {
    User.find({}).then((users) => {
        res.send(users)
    })
})

// localhost:3001/users/register
router.post('/register', function(req, res) {
    const body = req.body
    const user = new User(body)
    console.log('userController', user.isNew)
    // pre-hook --> password encryption
    user.save()
        .then(function(user){
            console.log('userController', user.isNew)
            // res.send(user)
            res.send(_.pick(user, ['_id', 'username', 'email', 'createdAt']))
        })
        .catch(function(err){
            res.send(err)
        })
})

// localhost:3001/users/login
router.post('/login', function(req, res) {
    const body = req.body

    // findByCredentials - is a user-defined static methods
    // generateToken - is a user-defined instance methods
    User.findByCredentials(body.email, body.password)
        .then(function(user){
            return user.generateToken()
            // res.send(user)
        })
        .then(function(token){
            res.send({ token })
        })
        .catch(function(err){
            res.send(err)
        })
})

// localhost:3001/users/account
router.get('/account', authenticateUser, function(req, res){
    const token = req.header('x-auth')
    User.findByToken(token).then((user) => {
        res.send(_.pick(user, ['_id', 'username', 'email', 'createdAt']))
    }).catch(err => res.send("Error"))
    // res.send(_.pick(user, ['_id', 'username', 'email', 'createdAt']))
})

// localhost:3001/users/logout
router.delete('/logout', authenticateUser, function(req, res){
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull: {tokens: { token: token }}})
        .then(function(){
            res.send({notice: 'successfully logged out'})
        })
        .catch(function(err){
            res.send(err)
        })
})

module.exports = {
    usersRouter: router
}