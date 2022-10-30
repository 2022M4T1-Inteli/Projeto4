interface Localization {
    room: string
    time: Date
}

interface Device {
    id: number
    name: string
    battery: number
    localizations: Localization[]
}
