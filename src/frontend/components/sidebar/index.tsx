import React from 'react'
import { Container, Item, LogoContainer } from './style'

import { RiDashboardLine } from 'react-icons/ri'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { IoLogOutOutline } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from '../../axios'
import { toast } from 'react-toastify'

const Sidebar: React.FC = () => {
    const router = useRouter()

    const logoutHandler = async () => {
        try {
            await axios.post('/users/logout')
            router.push('/login')
            toast.success('Logout realizado com sucesso!')
        } catch (err) {
            router.push('/login')
        }
    }

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
                <IoLogOutOutline
                    onClick={logoutHandler}
                    style={{ marginLeft: '.5rem' }}
                />
            </Item>
        </Container>
    )
}

export default Sidebar
