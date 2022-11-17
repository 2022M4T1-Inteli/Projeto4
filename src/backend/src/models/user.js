const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid')
                }
            }
        },
        password: {
            type: String,
            trim: true,
            required: true,
            minlength: 7,
            select: false
        },
        admin: {
            type: Boolean,
            required: true,
            default: false
        },
    },
    { timestamps: true }
)

userSchema.methods.generateAuthToken = async function () {
    const user = this

    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 2 * 60 * 60
    })
    // user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async function (email, password) {
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        throw new Error('Não foi possivel entrar')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Não foi possivel entrar')
    }

    return user
}

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
