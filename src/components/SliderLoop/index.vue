<template>
  
    <div class="swiper-container" :ref="refName">
        <div class="swiper-wrapper">
            <div class="swiper-slide" 
            v-for="(banner,index) in bannerList" 
            :key="banner.id">
                <img :src="banner.imgUrl" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
    
  
</template>

<script>
import Swiper from 'swiper/js/swiper'
export default {
    name:'SliderLoop',
    props:['bannerList','refName'],
    watch:{
        //请求回来之前是最外层数组是空的 请求回来数组内是有值的 由空->有 不需要深度监视
        //数组从0变4
        bannerList:{
            immediate:true,//立即执行无意义 和floor内部轮播代码保持一致
            //数据回来 结构不一定形成
            handler(newVal,oldVal){
                //监视bannerList内的数据是不是请求回来了
                //直接new不行 虽然把数据拿回来了 但是上面的结构是通过v-for遍历数据动态创建div结构 也需要时间

                //通常用在当数据更新后需要做一些操作 而这些操作有需要等待页面更新完成才有效 此时需要使用nextTick
                this.$nextTick(()=>{
                    //等待页面最近一次更新完成之后自动调用
                    new Swiper (this.$refs[this.refName], {
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        // scrollbar: {
                        //     el: '.swiper-scrollbar',
                        // },
                    }) 
                    //放在updated(){}里 只要页面更新 就new 效率低
                })
                 

            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>