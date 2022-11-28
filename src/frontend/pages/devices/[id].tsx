import React from 'react'
import Layout from '@/components/layout'
import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Box from '@/components/box'
import {
    BatteryBoxContainer,
    Container,
    LocationContainer,
    PlaySoundContainer
} from '@/styles/pages/device'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { PlaySoundButton } from '@/components/button'
import { GoLocation } from 'react-icons/go'
import MovementsList from '@/components/movementsList'
import { LazyMap } from '@/components/map/lazyMap'
import axios from '../../axios'
import RequireAuthentication from '@/HOC/requireAuthentication'

interface Props {
    device: Device
    lastLocation: number
    locations: Location[]
}

const Device = ({ device, lastLocation, locations }: Props) => {
    const handleBuzzer = async () => {
        await axios.get('/buzzer/' + device.deviceId)
    }

    return (
        <>
            <Head>
                <title>Device | {device.name}</title>
            </Head>
            <Layout>
                <Container>
                    <Box noMinHeight titleMarginBottom title="Nível da bateria">
                        <BatteryBoxContainer>
                            <CircularProgressbar
                                value={80}
                                text={`80%`}
                                styles={buildStyles({
                                    pathColor: '#285CDC',
                                    textColor: '#285CDC',
                                    trailColor: '#d6d6d6'
                                })}
                            />
                        </BatteryBoxContainer>
                    </Box>
                    <Box
                        noMinHeight
                        titleMarginBottom
                        title="Tocar som no dispositivo"
                    >
                        <PlaySoundContainer>
                            <PlaySoundButton onClick={handleBuzzer}>
                                Tocar
                            </PlaySoundButton>
                        </PlaySoundContainer>
                    </Box>
                    <Box
                        noMinHeight
                        titleMarginBottom
                        title="Última localização"
                    >
                        <LocationContainer>
                            <GoLocation />
                            <span>Sala {lastLocation}</span>
                        </LocationContainer>
                    </Box>
                    <Box
                        titleMarginBottom
                        noMaxHeight
                        title="Histórico de localizações"
                        style={{ gridColumn: '4/5', gridRow: '1/-1' }}
                    >
                        <MovementsList locations={locations} />
                    </Box>
                    <Box
                        noMaxHeight
                        titleMarginBottom
                        title="Mapa"
                        style={{ gridColumn: '1/4', gridRow: '2/-1' }}
                    >
                        <LazyMap />
                    </Box>
                </Container>
            </Layout>
        </>
    )
}

Device.getInitialProps = async (context: NextPageContext, token: string) => {
    const { data } = await axios.get('/device/' + context.query.id, {
        headers: {
            Cookie: `token=${token};`
        }
    })

    return {
        device: data.device,
        lastLocation: data.lastLocation,
        locations: data.locations
        // will be passed to the page component as props
    }
}

export default RequireAuthentication(Device)
