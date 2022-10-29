import Layout from '@/components/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@/components/box'
import { Container } from '@/styles/pages/dashboard'
import Devices from '@/components/devices'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Layout>
                <Container>
                    <Box>
                        <Devices />
                    </Box>
                </Container>
            </Layout>
        </>
    )
}

export default Home
