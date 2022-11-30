const Location = require("../models/location")
const Device = require("../models/device")

const location = async (locationData) => {
    try {
        const location = new Location(locationData)
       
        await location.save()

        const deviceExists = await Device.findOne({deviceId: locationData.deviceId })
        
        if (!deviceExists){
            const device = new Device({deviceId: locationData.deviceId})
            await device.save()
        }

        console.log("Registro de localização salvo no banco de dados.")
    } catch (err) {
        console.error("Erro ao salvar registro de localização no banco de dados.")
        console.log(err)
    }
 
}

module.exports = {
    location
}