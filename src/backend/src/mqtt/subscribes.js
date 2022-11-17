const Location = require("../models/location")

const location = async (locationData) => {
    try {
        const location = new Location(locationData)
        await location.save()
        console.log("Registro de localização salvo no banco de dados.")
    } catch (err) {
        console.error("Erro ao salvar registro de localização no banco de dados.")
    }
 
}

module.exports = {
    location
}