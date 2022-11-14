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
    signals: {
        macAddress: {
            type: String
        },
        strength: {
            type: Number
        }
    }
},  { timestamps: true })


const Location = mongoose.model('Location', locationSchema)

module.exports = Location
