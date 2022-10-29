import IptLogo from '@/components/iptLogo'
import LoginForm from '@/components/loginForm'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Left, PageContainer, Right } from '../styles/pages'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>IPT - Tracker</title>
            </Head>
            <PageContainer>
                <Left>
                    <IptLogo />
                </Left>
                <Right>
                    <LoginForm />
                </Right>
            </PageContainer>
        </>
    )
}

export default Home
