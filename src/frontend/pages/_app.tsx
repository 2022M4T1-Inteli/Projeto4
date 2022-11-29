/* eslint-disable @typescript-eslint/no-empty-function */
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global'
import { theme } from 'styles/theme'
import {
    ThemeProvider as MuiThemeProvider,
    createTheme
} from '@mui/material/styles'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import 'styles/npstyle.css'
import 'leaflet/dist/leaflet.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import withContexts from '@/HOC/withContexts'
import { useEffect } from 'react'
import axios from '../axios'
import { useUser } from '@/context/user'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
    const CustomFontTheme = createTheme({
        typography: {
            fontSize: 24
        },
        components: {
            MuiContainer: {
                styleOverrides: {
                    root: {
                        fontSize: 16
                    }
                }
            },
            MuiDataGrid: {
                styleOverrides: {
                    root: {
                        border: 'none'
                    }
                }
            }
        }
    })

    const { setUser } = useUser()

    useEffect(() => {
        axios
            .get('/users/me')
            .then(res => setUser(res.data))
            .catch(e => {})
    }, [setUser])

    return (
        <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={CustomFontTheme}>
                <Component {...pageProps} />
                <GlobalStyle />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </MuiThemeProvider>
        </ThemeProvider>
    )
}

export default withContexts(MyApp)
