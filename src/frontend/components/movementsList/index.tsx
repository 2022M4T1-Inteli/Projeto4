import React from 'react'
import { Badge } from '../badge'
import { Container, Item } from './style'
import Moment from 'react-moment'
import { convertRoom } from 'utils/room'

interface Props {
    locations: Location[]
    noDeviceName?: boolean
}

const MovementsList: React.FC<Props> = ({ locations, noDeviceName }) => {
    let items = <Item padding>Sem atualizações</Item>

    if (locations.length > 0) {
        items = (
            <>
                {locations ? (
                    locations.map(
                        location =>
                            location.room && (
                                <Item padding={!noDeviceName} key={location._id}>
                                    <Badge>
                                        <p>
                                            <Moment format="HH:mm - DD/MM/YYYY">
                                                {location.createdAt}
                                            </Moment>
                                        </p>
                                    </Badge>
                                    {!noDeviceName && (
                                        <p>
                                            {location.deviceName
                                                ? location.deviceName
                                                : location.deviceId}
                                        </p>
                                    )}
                                    <span>
                                        {convertRoom(location.room)}
                                    </span>
                                </Item>
                            )
                    )
                ) : (
                    <Item padding>Nenhuma movimentação</Item>
                )}
            </>
        )
    }

    return <Container>{items}</Container>
}

export default MovementsList
