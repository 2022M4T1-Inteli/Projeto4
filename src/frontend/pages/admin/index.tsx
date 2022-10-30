import React from 'react'
import Layout from '@/components/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@/components/box'

import { Container } from '@/styles/pages/dashboard'
import Devices from '@/components/devices'

import ConnectedDevices from '@/components/connectedDevices'
import LastDevicesList from '@/components/lastDevicesList'

const devices: Device[] = [
    {
        id: 1,
        name: 'Arduino #8943',
        battery: 80,
        localizations: [
            {
                room: 'Laboratório 1',
                time: new Date()
            }
        ]
    },
    {
        id: 2,
        name: 'Arduino #9436',
        battery: 80,
        localizations: [
            {
                room: 'Laboratório 2',
                time: new Date()
            }
        ]
    },
    {
        id: 2,
        name: 'Arduino #9436',
        battery: 80,
        localizations: [
            {
                room: 'Laboratório 2',
                time: new Date()
            }
        ]
    },
    {
        id: 2,
        name: 'Arduino #9436',
        battery: 80,
        localizations: [
            {
                room: 'Laboratório 2',
                time: new Date()
            }
        ]
    },
    {
        id: 2,
        name: 'Arduino #9436',
        battery: 80,
        localizations: [
            {
                room: 'Laboratório 2',
                time: new Date()
            }
        ]
    },
    {
        id: 2,
        name: 'Arduino #9436',
        battery: 80,
        localizations: [
            {
                room: 'Laboratório 2',
                time: new Date()
            }
        ]
    },
    {
        id: 2,
        name: 'Arduino #9436',
        battery: 80,
        localizations: [
            {
                room: 'Laboratório 2',
                time: new Date()
            }
        ]
    },
    {
        id: 2,
        name: 'Arduino #9436',
        battery: 80,
        localizations: [
            {
                room: 'Laboratório 2',
                time: new Date()
            }
        ]
    },
    {
        id: 2,
        name: 'Arduino #9436',
        battery: 80,
        localizations: [
            {
                room: 'Laboratório 2',
                time: new Date()
            }
        ]
    },
    {
        id: 2,
        name: 'Arduino #9436',
        battery: 80,
        localizations: [
            {
                room: 'Laboratório 2',
                time: new Date()
            }
        ]
    }
]

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <Layout>
                <Container>
                    <Box style={{ gridColumn: '1/3' }}>
                        <Devices />
                    </Box>

                    <Box
                        titleMarginBottom
                        title="Dispositivos conectados"
                        style={{ gridColumn: '1/3' }}
                    >
                        a
                    </Box>
                </Container>
            </Layout>
        </>
    )
}

export default Home
