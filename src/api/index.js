//是所有接口请求函数 每个函数里面都是往对应的接口发请求
//想要哪个数据 就调用对应的这个接口请求函数
//一共多少个接口 就对应多少个接口请求函数


import Ajax from './ajax'
//请求获取三级分类列表数据 GET
export const reqCategoryList = () => {
    //axios中请求的参数一共有几种: params,query,body
    //axios是第三方插件 是原生XHR和promise封装的发送ajax请求的工具
    //axios本身是一个函数 也就是函数对象
    //注意请求参数
    return Ajax({
        url: '/product/getBaseCategoryList',
        method:'get'
    })
}
