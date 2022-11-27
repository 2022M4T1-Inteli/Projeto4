const User = require("../models/user")
const express = require('express')
const { authMiddleware, adminMiddleware } = require("../middleware/auth")
const router = express.Router()

router.post('/users/login', async (req, res) => {
    try {
        // Procurar usuário
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        )

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
            sameSite: process.env.NODE_ENV !== 'development' ? 'none' : 'lax'
        })

        res.send(userResponse)
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

router.post('/users/logout', authMiddleware, async (req, res) => {
    try {
        // req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token)
        // await req.user.save()
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 2 * 60 * 60 * 1000,
            path: '/',
            sameSite: process.env.NODE_ENV !== 'development' ? 'none' : 'lax'
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

module.exports = router