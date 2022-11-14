import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const Map: React.FC = () => {
    return (
        <MapContainer
            style={{
                height: '100%',
            }}
            center={[-23.55638, -46.7359]}
            zoom={17}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
    )
}

export default Map
