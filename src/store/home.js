import { reqCategoryList } from '@/api'
const state = {
    //初始化状态数据
    categoryList: []
}
//同步修改数据
const mutations = {
    RECEIVE_CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
//异步发请求 1. 发请求 2. vue和vuex的桥梁
const actions = {
    //第一个参数代表store对象 结构commit值
    async getCategoryList({commit}) {
        //发请求 result：整个对象
        const result = await reqCategoryList()//reqCategoryList()得到的是promise await可以等待到promise成功的结果
        if (result.code === 200) {
            commit('RECEIVE_CATEGORYLIST',result.data)
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