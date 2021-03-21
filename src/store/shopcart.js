import { reqAddOrUpdateShopCart } from "@/api"

const state = {

}
const mutations = {

}
const actions = {
    //async内一般都有异步操作
    //async函数返回值是promise对象 不看return
    //但是返回的promise对象是成功还是失败要看return
    //return的值决定了promise成功还是失败
    //非promise
    //1.正常值 async函数返回的promise 成功的结果就是返回值
    //2.抛异常 async函数返回的promise 失败的原因就是抛出的原因
    //promise
    //1.成功的Promise async函数返回的promise也是成功的 成功的结果是return的promise成功的结果
    //2.失败的Promise async函数返回的promise也是失败的 失败的原因是return的promise失败的原因
    async getAddOrUpdateShopCart({commit},{skuId,skuNum}) {
        const result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}