import React from 'react'
import { Container, Item, LogoContainer } from './style'

import { RiDashboardLine } from 'react-icons/ri'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { IoLogOutOutline } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar: React.FC = () => {
    const router = useRouter()

    return (
        <Container>
            <LogoContainer>IPT</LogoContainer>
            <Item active={router.pathname == '/dashboard'}>
                <Link href={'/dashboard'}>
                    <RiDashboardLine />
                </Link>
            </Item>
            <Item active={router.pathname == '/admin'}>
                <Link href={'/admin'}>
                    <MdOutlineAdminPanelSettings />
                </Link>
            </Item>
            <Item style={{ marginTop: 'auto' }}>
                <Link href="/login">
                    <IoLogOutOutline style={{ marginLeft: '.5rem' }} />
                </Link>
            </Item>
        </Container>
    )
}

export default Sidebar
