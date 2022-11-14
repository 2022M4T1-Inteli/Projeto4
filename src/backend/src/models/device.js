const mongoose = require('mongoose')

const deviceSchema = mongoose.Schema({
    deviceId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
},  { timestamps: true })


const Device = mongoose.model('Device', deviceSchema)

module.exports = Device
