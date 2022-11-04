import React from 'react'
import Layout from '@/components/layout'
import type { NextPage } from 'next'
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
import LastLocalizationsList from '@/components/lastLocalizationsList'
import Map from '@/components/map'

const device = {
    id: 2,
    name: 'Arduino #9436',
    battery: 80,
    localizations: [
        {
            room: 'Laboratório 2',
            time: new Date()
        },
        {
            room: 'Laboratório 3',
            time: new Date()
        },
        {
            room: 'Laboratório 4',
            time: new Date()
        },
        {
            room: 'Laboratório 5',
            time: new Date()
        }
    ]
}

const Device: NextPage = () => {
    return (
        <>
            <Head>
                <title>Device | {device.name}</title>
            </Head>
            <Layout>
                <Container>
                    <Box titleMarginBottom title="Nível da bateria">
                        <BatteryBoxContainer>
                            <CircularProgressbar
                                value={device.battery}
                                text={`${device.battery}%`}
                                styles={buildStyles({
                                    pathColor: '#285CDC',
                                    textColor: '#285CDC',
                                    trailColor: '#d6d6d6'
                                })}
                            />
                        </BatteryBoxContainer>
                    </Box>
                    <Box titleMarginBottom title="Tocar som no dispositivo">
                        <PlaySoundContainer>
                            <PlaySoundButton>Tocar</PlaySoundButton>
                        </PlaySoundContainer>
                    </Box>
                    <Box titleMarginBottom title="Última localização">
                        <LocationContainer>
                            <GoLocation />
                            <span>
                                {
                                    device.localizations[
                                        device.localizations.length - 1
                                    ].room
                                }
                            </span>
                        </LocationContainer>
                    </Box>
                    <Box
                        titleMarginBottom
                        title="Histórico de localizações"
                        style={{ gridColumn: '4/5', gridRow: '1/-1' }}
                    >
                        <LastLocalizationsList
                            localizations={device.localizations}
                        />
                    </Box>
                    <Box
                        titleMarginBottom
                        title="Mapa"
                        style={{ gridColumn: '1/4', gridRow: '2/-1' }}
                    >
                        Mapa
                        {/* <Map /> */}
                    </Box>
                </Container>
            </Layout>
        </>
    )
}

export default Device
