<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- Footer不是任何时候都要渲染出来的 使用条件渲染 -->
    <!-- 隐藏组件数量过多时 这个写法不太容易 模板中看起来很乱 -->
    <!-- <Footer v-show="$route.path!=='/login' && $route.path!=='/register'"></Footer> -->
    <Footer v-show="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name:'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style>

</style>
