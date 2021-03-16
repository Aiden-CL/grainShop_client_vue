<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!-- 根据数据动态创建floor -->
    <!-- 遍历出的数据要传给floor组件 使用props 接收的是属性 -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
    
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex'
//import { mapActions } from 'vuex'
export default {
    name:'Home',
    components:{ListContainer,Recommend,Rank,Like,Floor,Brand},
    mounted(){
      this.getFloorList()
    },
    methods:{
      getFloorList(){
        this.$store.dispatch('getFloorList')
      }
      //...mapActions(['getFloorList'])
    },
    computed:{
      ...mapState({
        floorList:state=>state.home.floorList
      })
    }
}
</script>

<style lang="less" scoped>

</style>