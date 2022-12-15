import { LatLngExpression } from 'leaflet'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import RoomsJson from '../../utils/rooms.json'

const icon = L.icon({ iconUrl: '/marker-icon.png' })

interface Props {
    rooms?: string[]
}

const Map: React.FC<Props> = ({ rooms }) => {
    const markers: any = []
    if (rooms) {
        rooms?.forEach(room => {
            const roomArray = room.split('/')
            if (RoomsJson[roomArray[0]]) {
                const marker = RoomsJson[roomArray[0]]
                markers.push(marker)
            }
        })
    }

    return (
        <MapContainer
            style={{
                height: '100%'
            }}
            center={[-23.5555, -46.7359]}
            zoom={17}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {markers.map((marker, index) => (
                <Marker key={index} icon={icon} position={marker} />
            ))}
        </MapContainer>
    )
}

export default Map
