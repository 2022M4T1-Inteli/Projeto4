import React from 'react'
import { Container, Item, LogoContainer } from './style'

import { RiDashboardLine } from 'react-icons/ri'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { IoLogOutOutline } from 'react-icons/io5'
import { FaUsersCog } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useUser } from '@/context/user'

const Sidebar: React.FC = () => {
    const router = useRouter()
    const { user, handleLogout } = useUser()

    return (
        <Container>
            <LogoContainer>IPT</LogoContainer>
            <Item active={router.pathname == '/dashboard'}>
                <Link href={'/dashboard'}>
                    <RiDashboardLine />
                </Link>
            </Item>
            {user?.admin && (
                <>
                <Item active={router.pathname == '/admin'}>
                    <Link href={'/admin'}>
                        <MdOutlineAdminPanelSettings />
                    </Link>
                </Item>
                <Item active={router.pathname == '/users'}>
                    <Link href={'/users'}>
                        <FaUsersCog />
                    </Link>
                </Item>
                </>
            )}

            <Item style={{ marginTop: 'auto' }}>
                <IoLogOutOutline
                    onClick={() => handleLogout('/login')}
                    style={{ marginLeft: '.5rem' }}
                />
            </Item>
        </Container>
    )
}

export default Sidebar
