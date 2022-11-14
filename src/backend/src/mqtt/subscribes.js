const Location = require("../models/location")

const location = async (locationData) => {
    const location = new Location(locationData)
    await location.save()
}

module.exports = {
    location
}