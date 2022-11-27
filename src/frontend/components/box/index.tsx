import React from 'react'
import { Container, Content, Title } from './style'

interface Props {
    title?: string
    children: React.ReactChild
    style?: React.CSSProperties
    titleMarginBottom?: boolean
    noMinHeight?: boolean
    noMaxHeight?: boolean
}

const Box: React.FC<Props> = ({
    title,
    children,
    style,
    titleMarginBottom,
    noMinHeight,
    noMaxHeight
}) => {
    return (
        <Container noMaxHeight={noMaxHeight} noMinHeight={noMinHeight} style={style}>
            {title && (
                <Title titleMarginBottom={titleMarginBottom}>{title}</Title>
            )}
            <Content>{children}</Content>
        </Container>
    )
}

export default Box
