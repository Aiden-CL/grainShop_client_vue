import { reqCategoryList ,reqBannerList,reqFloorList} from '@/api'
const state = {
    //初始化状态数据
    categoryList: [],
    bannerList: [],
    floorList:[]
}
//同步修改数据
const mutations = {
    RECEIVE_CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    RECEIVE_BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    RECEIVE_FLOORLIST(state, floorList) {
        state.floorList = floorList
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
    },
    //action函数的第一个参数必须是commit(store对象)
    async getBannerList({commit}) {
        const result = await reqBannerList()
        //201请求成功但没有数据 参数失败
        //200判断数据是否正确的标志
        if (result.code === 200) {
            commit('RECEIVE_BANNERLIST',result.data)
        }
    },
    async getFloorList({commit}) {
        const result = await reqFloorList()
        if (result.code === 200) {
            commit('RECEIVE_FLOORLIST',result.data)
        }
    },
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}