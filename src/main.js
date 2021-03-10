import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router //每个组件内部都能通过this.$router获取到路由器对象 通过this.$route获取到当前路由对象
}).$mount('#app')
