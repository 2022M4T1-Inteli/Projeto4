import React from 'react'
import Sidebar from '../sidebar'
import { Container, PageContainer } from './style'

interface Props {
    children: React.ReactChild
}

const Layout: React.FC<Props> = props => {
    return (
        <PageContainer>
            <Sidebar />
            <Container>{props.children}</Container>
        </PageContainer>
    )
}

export default Layout
