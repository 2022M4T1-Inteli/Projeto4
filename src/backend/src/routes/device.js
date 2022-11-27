const express = require('express')
const { authMiddleware } = require('../middleware/auth')
const Device = require('../models/device')
const Location = require('../models/location')
const router = express.Router()

router.get('/devices', authMiddleware, async (req, res) => {
    try {
        const devices = await Device.find({}).populate('locations')

        const devicesList = []
        for (let i in devices) {
            const device = devices[i].toObject()
            const lastLocation = await Location.findOne({ deviceId: devices[i].deviceId })
            device.room = lastLocation.room
            const locations = await Location.find({deviceId: devices[i].deviceId}, {signals: 0})
            device.locations = locations
            devicesList.push(device)
            // await devices[i].populate('locations').execPopulate()
        }

        res.send(devicesList)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.get('/locations', authMiddleware, async (req, res) => {
    try {
        const locations = await Location.find({room: {$ne: null}}, {signals: 0}).sort({createdAt: -1}).limit(req.query.limit).exec()

        for (let i in locations) {
            const device = await Device.findOne({ deviceId: locations[i].deviceId })
            locations[i].deviceName = device.name
        }
        res.send(locations)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.get('/device/:id', authMiddleware, async (req, res) => {
    try {
        const device = await Device.findOne({ _id: req.params.id })
        const locations = await Location.find({ deviceId: device.deviceId }, {signals: 0}).sort({createdAt: -1}).exec()
        const lastLocation = locations[locations.length - 1].room

        res.send({ locations, device, lastLocation })
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.patch('/device/:id', authMiddleware, async (req,res) => {
    try{
        const updateDevice = await Device.updateOne({_id: req.params.id}, {$set: {deviceId: req.body.deviceId, name: req.body.name}})
        const updatedDevice = new Device(updateDevice)
        await updatedDevice.save()
        res.send(updatedDevice)
    }catch{
        res.status(500).send(err)
    }
})


module.exports = router
