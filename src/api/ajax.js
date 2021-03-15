//主要是对axios进行二次封装 让axios封装后发请求自带一些额外效果
//对axios进行二次封装发送任意的请求都能达到最终以下目的：
//配置基础路径和超时限制
//添加进度条信息 nprogress
//返回的响应不再需要从data属性中拿数据 而是响应就是我们要的数据
//统一处理请求错误 具体请求也可以选择处理或不处理

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'
//创建新的axios实例 可以和本来的axios具有同样的功能 都可以去发请求
const service = axios.create({
    //代理转发的标志 以'/api'开始的请求要转发
    baseURL: '/api',//基础路径=所有接口路径公共的部分
    timeout:2000 //超时时间 10s没有请求成功 就报timeout
});

//请求拦截器和响应拦截器 目的：给axios添加额外的功能
//拦截请求报文 在没出去的时候拦截住 修改请求头、增加额外功能
service.interceptors.request.use(
    //请求拦截器成功的回调 要么给请求头添加信息 要么添加额外的功能
    (config) => {
        NProgress.start() //中间增加额外的功能
        return config //处理完仍然是要返回的
})
service.interceptors.response.use(
    (response) => {
        //拦截器响应成功的回调 接收成功的响应报文 进入前端之前拦截
        NProgress.done()
        return response.data//直接返回前台数据
    },
    (error) => {
        NProgress.done()
        //发请求失败 统一处理
        alert('ajax failed' + error.message || 'unknow')
        //错误需不需要后面还能继续处理 关键看这里怎么写
        //继续处理
        //return Promise.reject(new Error('request failed'))
        //如果后面不在对这个错误进行处理
        return new Promise(()=>{}) //中断promise链
    }
)
export default service