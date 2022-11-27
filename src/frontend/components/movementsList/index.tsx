import React from 'react'
import { Badge } from '../badge'
import { Container, Item } from './style'
import Moment from 'react-moment'

interface Props {
    locations: Location[]
}

const MovementsList: React.FC<Props> = ({ locations }) => {
    let items = <Item>Sem atualizações</Item>

    if (locations.length > 0) {
        items = (
            <>
                {locations.map(location => (
                    <Item key={location._id}>
                        <Badge>
                            <p>
                                <Moment format="hh:mm - DD/MM/YYYY">
                                    {location.createdAt}
                                    {/* {location.locations[
                                        location.locations.length - 1
                                    ].createdAt.toString()} */}
                                </Moment>
                            </p>
                        </Badge>
                        {location.deviceName && <p>{location.deviceName}</p>}
                        <span>Sala {location.room}</span>
                    </Item>
                ))}
            </>
        )
    }

    return <Container>{items}</Container>
}

export default MovementsList
