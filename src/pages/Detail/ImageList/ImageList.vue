<template>
  <div class="swiper-container" ref="imageSwiper">
    <div class="swiper-wrapper">
      <!-- active缺参考数据 移入哪个哪个显示三级分类 -->
      <div class="swiper-slide" v-for="(image,index) in imageList"
      :key="image.id">
        <img :src="image.imgUrl"
        :class="{active:defaultIndex===index}"
        @click="changeDefaultIndex(index)">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  export default {
    name: "ImageList",
    props:['imageList'],
    data(){
      return {
        defaultIndex:0
      }
    },
    methods:{
      //点击下图将切换高亮显示 并把对应的下标传递给Zoom 让Zoom切换图片
      changeDefaultIndex(index){
        this.defaultIndex = index
        this.$bus.$emit('changeBigDefaultIndex',index)
      }
    },
    watch:{
        //请求回来之前是最外层数组是空的 请求回来数组内是有值的 由空->有 不需要深度监视
        //数组从0变4
        imageList:{
            immediate:true,//立即执行无意义 和floor内部轮播代码保持一致
            //数据回来 结构不一定形成
            handler(newVal,oldVal){
                //监视bannerList内的数据是不是请求回来了
                //直接new不行 虽然把数据拿回来了 但是上面的结构是通过v-for遍历数据动态创建div结构 也需要时间

                //通常用在当数据更新后需要做一些操作 而这些操作有需要等待页面更新完成才有效 此时需要使用nextTick
                this.$nextTick(()=>{
                    //等待页面最近一次更新完成之后自动调用
                    new Swiper (this.$refs.imageSwiper, {
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        slidesPerView:3,//每屏3看到了几张
                        slidesPerGroup:2//切的时候几张
                    }) 
                })
                 

            }
        }
    }

  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        // &:hover {
        //   border: 2px solid #f60;
        //   padding: 1px;
        // }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>