import React from 'react'
import { Badge } from '../badge'
import { Container, Item } from './style'
import Moment from 'react-moment'

interface Props {
    devices: Device[]
}

const LastDevicesList: React.FC<Props> = ({ devices }) => {
    return (
        <Container>
            {devices.map(device => (
                <Item key={device.id}>
                    <Badge>
                        <Moment format='hh:mm - DD/MM/YYYY'>
                            {device.localizations[
                                device.localizations.length - 1
                            ].time.toString()}
                        </Moment>
                    </Badge>
                    <p>{device.name}</p>
                    <span>
                        {
                            device.localizations[
                                device.localizations.length - 1
                            ].room
                        }
                    </span>
                </Item>
            ))}
        </Container>
    )
}

export default LastDevicesList
