import React from 'react'
import Moment from 'react-moment'
import { Badge } from '../badge'
import { Container } from './style'

interface Props {
    localizations: Localization[]
}

const LastLocalizationsList: React.FC<Props> = ({ localizations }) => {
    return (
        <Container>
            {localizations.map((localization, index) => (
                <div key={index}>
                    <Badge>
                        <Moment format="hh:mm - DD/MM/YYYY">
                            {localization.time}
                        </Moment>
                    </Badge>
                    <p>{localization.room}</p>
                </div>
            ))}
        </Container>
    )
}

export default LastLocalizationsList
