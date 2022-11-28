import React from 'react'
import Layout from '@/components/layout'
import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Box from '@/components/box'

import { Container } from '@/styles/pages/dashboard'
import Devices from '@/components/devices'

import ConnectedDevices from '@/components/connectedDevices'
import LastDevicesList from '@/components/movementsList'
import { LazyMap } from '@/components/map/lazyMap'
import axios from '../../axios'
import RequireAuthentication from '@/HOC/requireAuthentication'

interface Props {
    devices: Device[]
}

const Admin = ({ devices }: Props) => {
    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <Layout>
                <Container>
                    <Box style={{ gridColumn: '1/3' }}>
                        <Devices devices={devices} admin />
                    </Box>

                    <Box
                        titleMarginBottom
                        title="Mapa do IPT"
                        style={{ gridColumn: '1/3' }}
                    >
                        <LazyMap />
                    </Box>
                </Container>
            </Layout>
        </>
    )
}

Admin.getInitialProps = async (ctx: NextPageContext, token: string) => {
    const { data: devices } = await axios.get('/devices', {
        headers: {
            Cookie: `token=${token};`
        }
    })

    return {
        devices
    }
}

export default RequireAuthentication(Admin, true)
