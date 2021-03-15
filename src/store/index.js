//1. 安装vuex
//2. 引入并声明使用vuex
import vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import user from './user'
vue.use(Vuex) //引入并声明使用 -> 官方插件需要做的
const state = {

}
const mutations = {

}
//和vue组件用户交互 通知mutation修改数据 action对象中的方法 就是vue和vuex交互的桥梁 
//vue用dispatch去调用actions相对应的方法 actions通知mutation改数据
const actions = {

}
//简化数据操作 请求回来的数据有点负责 可以通过getters简化
const getters = {

}

//3. 往外暴露一个store对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    //合并home里和user里的小store
    // state:{
    //     home: {},
    //     user:{}
    // }
    modules: {
        home,
        user
    }
}) 
export default store
//4. 将store对象配置注册到vue当中