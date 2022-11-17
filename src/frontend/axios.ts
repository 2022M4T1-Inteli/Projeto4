import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_APP_URL
})

instance.defaults.headers.common.Accept = 'application/json'

export default instance
