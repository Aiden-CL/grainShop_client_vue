import {reqGoodsListInfo} from '@/api'
//state和getters是不关心是否请求数据

//state初始化状态数据和为了以后保存回来的动态数据
//刷新页面时 相当于项目重新启动 那么vuex所有的state都要重新被初始化数据
//vue和vuex是两个独立的东西 vuex里的数据(state和getters)是不关心vue组件是否创建成功
//vuex的state和getters会自动执行
//mutations和actions是会和vue关联的
//所以当用户在vue组件中发请求数据回来之前 用户映射到组件内的数据是初始化的数据
//或是根据初始化的state数据计算而来的
const state = {
    goodsListInfo:{}
}
const mutations = {
    RECEIVE_GOODSLISTINFO(state,goodsListInfo){
        state.goodsListInfo = goodsListInfo
    }
}
const actions = {
    async getGoodsListInfo({commit},searchParams){
        const result = await reqGoodsListInfo(searchParams)
        if(result.code === 200){
            commit('RECEIVE_GOODSLISTINFO',result.data)
        }
    }
}
//简化 之后再取不需要goodsListInfo.xxx.xxx
const getters = {
    attrsList(state){
        //防止初始化时拿到的是undefined 所以要||[]
        return state.goodsListInfo.attrsList || []
    },
    goodsList(state){
        return state.goodsListInfo.goodsList || []
    },
    trademarkList(state){
        return state.goodsListInfo.trademarkList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}