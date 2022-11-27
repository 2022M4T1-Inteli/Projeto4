const mongoose = require('mongoose')
const Location = require('../models/location')
require('dotenv').config()

// Data array containing seed data - documents organized by Model
var data = [
    {
        deviceId: '23:42:12:89',
        room: 'Laboratório 12',
        signals: [{
            macAddress: "12:54:23:12",
            strength: 79
        },
        {
            macAddress: "12:54:23:54",
            strength: 12
        },
        {
            macAddress: "12:54:23:11",
            strength: 16
        }],
    },
    {
        deviceId: '23:42:12:87',
        room: 'Laboratório 2',
        signals: [{
            macAddress: "12:54:23:12",
            strength: 79
        },
        {
            macAddress: "12:54:23:54",
            strength: 12
        },
        {
            macAddress: "12:54:23:11",
            strength: 16
        }],
    },
    {
        deviceId: '23:42:12:22',
        room: 'Laboratório 1',
        signals: [{
            macAddress: "12:54:23:12",
            strength: 98
        },
        {
            macAddress: "12:54:23:54",
            strength: 76
        },
        {
            macAddress: "12:54:23:11",
            strength: 90
        }],
    },
   
]

// Connect to MongoDB via Mongoose
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const addLocation = async () => {
    for (let i in data) {
        try {
            const location = new Location(data[i])
            await location.save()
            console.log("Localização adicionada ao banco de dados")
        }
       
        catch (err) {
            console.log(err)
        }
    }
}

addLocation()

