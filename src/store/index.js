import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import user from './user'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        home,
        user,
        search,
        detail,
        shopcart
    }
})

export default store
