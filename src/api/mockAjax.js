import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'

const service = axios.create({
    baseURL: '/mock',
    timeout: 10000
})

service.interceptors.request.use(
    (config) => {
        NProgress.start()
        return config
    },
    (error) => {
        NProgress.done()
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        NProgress.done()
        return response.data
    },
    (error) => {
        NProgress.done()
        console.error('Mock request failed:', error.message || 'unknown error')
        return new Promise(() => {})
    }
)

export default service
