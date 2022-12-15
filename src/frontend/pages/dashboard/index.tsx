import React from 'react'
import Layout from '@/components/layout'
import type { NextPageContext } from 'next'
import Head from 'next/head'
import Box from '@/components/box'

import { Container } from '@/styles/pages/dashboard'
import Devices from '@/components/devices'

import ConnectedDevices from '@/components/batteryChart'
import MovementsList from '@/components/movementsList'
import { LazyMap } from '@/components/map/lazyMap'
import axios from '../../axios'
import RequireAuthentication from '@/HOC/requireAuthentication'

interface Props {
    devices: Device[]
    locations: Location[]
}

const Home = ({ devices, locations }: Props) => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Layout>
                <Container>
                    <Box style={{ gridColumn: '1/3', gridRow: '1/2' }}>
                        <Devices devices={devices} />
                    </Box>

                    <Box title="Número de dispositivos">
                        <ConnectedDevices />
                    </Box>
                    <Box titleMarginBottom title="Últimas atualizações">
                        <MovementsList locations={locations} />
                    </Box>

                    <Box
                        titleMarginBottom
                        title="Mapa"
                        style={{ gridColumn: '1/3', gridRow: '3/4' }}
                    >
                        <LazyMap />
                    </Box>
                </Container>
            </Layout>
        </>
    )
}

Home.getInitialProps = async (ctx: NextPageContext, token: string) => {
    const { data: devices } = await axios.get('/devices', {
        headers: {
            Cookie: `token=${token};`
        }
    })

    const { data: locations } = await axios.get('/locations?limit=10', {
        headers: {
            Cookie: `token=${token};`
        }
    })

    return {
        devices,
        locations
    }
}

export default RequireAuthentication(Home)
