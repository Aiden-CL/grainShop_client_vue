//发送到本地

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'

const service = axios.create({
    baseURL: '/mock',
    timeout:2000
});
service.interceptors.request.use(
    (config) => {
        NProgress.start() 
        return config 
})
service.interceptors.response.use(
    (response) => {
        NProgress.done()
        return response.data
    },
    (error) => {
        NProgress.done()
        alert('ajax failed' + error.message || 'unknow')
        return new Promise(()=>{}) 
    }
)
export default service