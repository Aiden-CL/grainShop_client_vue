import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
//import { reqCategoryList } from '@/api'
//import { reqGoodsListInfo } from '@/api'
import store from '@/store'
import '@/mock/mockServer' //引入mock模拟接口
import 'swiper/css/swiper.css'

//reqCategoryList()
Vue.config.productionTip = false

//全局注册：当这个组件被很多个页面都要用到 那么就全局组件
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'

Vue.component(TypeNav.name,TypeNav);
Vue.component(SliderLoop.name,SliderLoop);

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this//谁要数据on 谁数据emit
    //把vm放在Vue的原型上
  },
  render: h => h(App),
  router, //每个组件内部都能通过this.$router获取到路由器对象 通过this.$route获取到当前路由对象
  store
}).$mount('#app')
