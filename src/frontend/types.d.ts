interface Location {
    _id: string
    room: string
    deviceName?: string
    deviceId?: string
    createdAt: Date
    updatedAt: Date
}

interface Device {
    _id: number
    name: string
    deviceId: string
    locations: Location[]
}

interface User {
    _id: number
    firstName: string
    lastName: string
    email: string
    admin: boolean
    token: string
    createdAt: Date
    updatedAt: Date
}

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        components: {
            MuiContainer: { styleOverrides: { root: { fontSize: number } } }
            MuiDataGrid: { styleOverrides: { root: { border: string } } }
        }
    }
    // permitir configuração usando `createTheme`
    interface ThemeOptions {
        components?: {
            MuiContainer: { styleOverrides: { root: { fontSize: number } } }
            MuiDataGrid: { styleOverrides: { root: { border: string } } }
        }
    }
}
