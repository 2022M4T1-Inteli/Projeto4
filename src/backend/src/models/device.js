const mongoose = require('mongoose')

const deviceSchema = mongoose.Schema({
    deviceId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false
    }
},  { timestamps: true })

deviceSchema.virtual('locations', {
    ref: 'Location',
    localField: 'deviceId',
    foreignField: 'deviceId'
})

const Device = mongoose.model('Device', deviceSchema)

module.exports = Device
