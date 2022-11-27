
interface Location {
    _id: string
    room: string
    deviceName?: string
    createdAt: Date
    updatedAt: Date
}

interface Device {
    _id?: number
    name: string
    deviceId: string
    locations: Location[]
}
