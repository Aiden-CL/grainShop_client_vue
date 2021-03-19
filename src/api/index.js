//是所有接口请求函数 每个函数里面都是往对应的接口发请求
//想要哪个数据 就调用对应的这个接口请求函数
//一共多少个接口 就对应多少个接口请求函数


import Ajax from './ajax'
import mockAjax from './mockAjax'
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
//请求获取模拟的banner数据 默认get请求
export const reqBannerList = () => {
    return mockAjax({
        url: '/banner',
        method:'get'
    })
}

export const reqFloorList = () => {
    return mockAjax({
        url: '/floor',
        method:'get'
    })
}

//请求获取search商品列表数据
// /api/list 请求方式post 返回的是对象{}
export const reqGoodsListInfo=(searchParams)=>{
    return Ajax({
        url:'/list',
        method:'post',
        data:searchParams
    })
}
//reqGoodsListInfo({})//不能不传 需要传一个空对象 后期需要初始化参数