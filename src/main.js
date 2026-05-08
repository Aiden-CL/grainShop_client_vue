import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store'
import '@/mock/mockServer'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'

Vue.component(TypeNav.name, TypeNav)
Vue.component(SliderLoop.name, SliderLoop)
Vue.component(Pagination.name, Pagination)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
