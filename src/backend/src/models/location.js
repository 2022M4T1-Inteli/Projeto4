const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    deviceId: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: false
    },
    signals: [{
        macAddress: {
            type: String,
            required: true,
        },
        strength: {
            type: Number,
            required: true,
        }
    }],
    battery: {
        type: Number,
        required: true
    }
},  { timestamps: true })


const Location = mongoose.model('Location', locationSchema)

module.exports = Location
