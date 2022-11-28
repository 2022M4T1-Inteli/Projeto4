import React from 'react'
import axios from '../axios'
import Router from 'next/router'
import Sidebar from '../components/sidebar'
import { parseCookies } from 'nookies'

const RequireAuthentication = (WrappedComponent, isAdmin?: boolean) => {
    return class extends React.Component {
        static async getInitialProps(ctx) {
            let token: string | null = null
            if (ctx.req) {
                const { token: tokenFromCookies } = parseCookies(ctx)
                token = tokenFromCookies
            }

            try {
                let user = null
                if (isAdmin) {
                    // if (ctx.req) {
                        const { data } = await axios.get('/users/admin', {
                            headers: {
                                Cookie: `token=${token};`
                            }
                        })

                        user = data
                    // } else {
                    //     const { data } = await axios.get('/users/admin')
                    //     user = data
                    // }
                } else {
                    // if (ctx.req) {
                        const response = await axios.get('/users/me', {
                            headers: {
                                Cookie: `token=${token};`
                            }
                        })
                        user = response.data
                    // } else {
                    //     const { data } = await axios.get('/users/me')
                    //     user = data
                    // }
                }

                if (WrappedComponent.getInitialProps) {
                    const pageProps = await WrappedComponent.getInitialProps(
                        ctx,
                        token
                    )
                    return { ...pageProps, user }
                }

                return { user }
            } catch (err) {
                console.log(err)
                if (ctx.req) {
                    ctx.res.writeHead(302, {
                        Location: '/login'
                    })
                    ctx.res.end()
                } else {
                    Router.push('/login')
                }
            }
            return {}
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

export default RequireAuthentication
