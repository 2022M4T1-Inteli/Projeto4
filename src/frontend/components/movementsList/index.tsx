import React from 'react'
import { Badge } from '../badge'
import { Container, Item } from './style'
import Moment from 'react-moment'

interface Props {
    locations: Location[]
    noDeviceName?: boolean
}

const MovementsList: React.FC<Props> = ({ locations, noDeviceName }) => {
    let items = <Item>Sem atualizações</Item>

    if (locations.length > 0) {
        items = (
            <>
                {locations.map(location =>
                    location.room ? (
                        <Item key={location._id}>
                            <Badge>
                                <p>
                                    <Moment format="hh:mm - DD/MM/YYYY">
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
                            <span>Sala {location.room}</span>
                        </Item>
                    ) : (
                        <Item>Nenhuma movimentação</Item>
                    )
                )}
            </>
        )
    }

    return <Container>{items}</Container>
}

export default MovementsList
