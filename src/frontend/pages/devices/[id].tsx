import React from 'react'
import Layout from '@/components/layout'
import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Box from '@/components/box'
import {
    BatteryBoxContainer,
    Container,
    LocationContainer,
    NoBatteryInfo,
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
import { toast } from 'react-toastify'

interface Props {
    device: Device
    lastLocation: number
    battery: number
    locations: Location[]
}

const Device = ({ device, lastLocation, battery, locations }: Props) => {
    const handleBuzzer = async () => {
        try {
            await axios.get('/buzzer/' + device.deviceId)
            toast.success(
                'Solicitação de toque do dispositivo enviada com sucesso!'
            )
        } catch (err) {
            toast.error('Não foi possível tocar o som do dispositivo!')
        }
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
                            {battery ? (
                                <CircularProgressbar
                                    value={battery}
                                    text={battery + `%`}
                                    styles={buildStyles({
                                        pathColor: '#285CDC',
                                        textColor: '#285CDC',
                                        trailColor: '#d6d6d6'
                                    })}
                                />
                            ) : (
                                <NoBatteryInfo>
                                    Sem informações da bateria
                                </NoBatteryInfo>
                            )}
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
                            {lastLocation ? (
                                <span>Sala {lastLocation}</span>
                            ) : (
                                <span>Nenhuma localização registrada</span>
                            )}
                        </LocationContainer>
                    </Box>
                    <Box
                        titleMarginBottom
                        noMaxHeight
                        title="Histórico de localizações"
                        style={{ gridColumn: '4/5', gridRow: '1/-1' }}
                    >
                        <MovementsList noDeviceName locations={locations} />
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
        battery: data.battery,
        locations: data.locations
        // will be passed to the page component as props
    }
}

export default RequireAuthentication(Device)
