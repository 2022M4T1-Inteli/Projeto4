import React from 'react'
import Layout from '@/components/layout'
import Head from 'next/head'
import Box from '@/components/box'

import { Container } from '@/styles/pages/user'

import axios from '../../axios'
import RequireAuthentication from '@/HOC/requireAuthentication'
import { NextPageContext } from 'next'
import Users from '@/components/users'

interface Props {
    users: User[]
}

const User = ({ users }: Props) => {
    return (
        <>
            <Head>
                <title>Usuários</title>
            </Head>
            <Layout>
                <Container>
                    <Box noMaxHeight title="Usuários" titleMarginBottom>
                        <Users users={users} />
                    </Box>
                </Container>
            </Layout>
        </>
    )
}

User.getInitialProps = async (ctx: NextPageContext, token: string) => {
    const { data: users } = await axios.get('/users', {
        headers: {
            Cookie: `token=${token};`
        }
    })
    console.log(users)
    return {
        users
    }
}

export default RequireAuthentication(User, true)
