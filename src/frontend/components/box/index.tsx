import React from 'react'
import { Container, Content, Title } from './style'

interface Props {
    title?: string
    children: React.ReactChild
}

const Box: React.FC<Props> = ({ title, children }) => {
    return (
        <Container>
            {title && <Title>{title}</Title>}
            <Content>{children}</Content>
        </Container>
    )
}

export default Box
