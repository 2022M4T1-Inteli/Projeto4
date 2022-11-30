const User = require('../models/user')
const express = require('express')
const { authMiddleware, adminMiddleware } = require('../middleware/auth')
const router = express.Router()

router.post('/users/login', async (req, res) => {
    try {
        // Procurar usuário
        const user = await User.findByCredentials(req.body.email, req.body.password)

        // Gerar token
        const token = await user.generateAuthToken()

        const userResponse = user.toObject()
        delete userResponse.password
        userResponse.token = token

        // Colocar token em Cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 2 * 60 * 60 * 1000, // 2 Hours
            path: '/',
            sameSite: process.env.NODE_ENV !== 'development' ? 'none' : 'lax',
        })

        res.send(userResponse)
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

router.post('/users/logout', authMiddleware, async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 2 * 60 * 60 * 1000,
            path: '/',
            sameSite: process.env.NODE_ENV !== 'development' ? 'none' : 'lax',
        })
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', authMiddleware, async (req, res) => {
    res.send(req.user)
})

router.get('/users/admin', adminMiddleware, async (req, res) => {
    res.send(req.user)
})

router.get('/users', adminMiddleware, async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/users/create', adminMiddleware, async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email })
        if (userExists) {
            throw new Error('Um usuário com esse email já existe!')
        }

        const user = new User(req.body)
        await user.save()
        res.send(user)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})

router.delete('/user/:id', adminMiddleware, async (req, res) => {
    try {
        if (req.user._id == req.params.id) {
            throw new Error('Um usuário não pode deletar si mesmo!')
        }

        await User.findByIdAndDelete(req.params.id)
        res.send()
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})

module.exports = router
