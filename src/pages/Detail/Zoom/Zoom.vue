<template>
  <div class="spec-preview">
    <!-- 
         本质：请求数据是异步操作
         imageList 传过来是undefined
         imageList[0] 传过来是undefined
         解决方案：至少把imageList[0]变为空对象
         {}.imgUrl => undefined但是不报错
     -->
    <img :src="defaultImg.imgUrl" />
    <!-- event承接移动事件 -->
    <div class="event" @mousemove="move"></div>
    <div class="big">
      <img :src="defaultImg.imgUrl" ref="bigImg"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:['imageList'],
    data(){
      return {
        defaultIndex:0
      }
    },
    mounted(){
      //on这边要写回调
      this.$bus.$on('changeBigDefaultIndex',index=>this.defaultIndex = index)
    },
     methods:{
      move(event){
        let mask = this.$refs.mask
        let bigImg = this.$refs.bigImg

        let mouseX = event.offsetX
        let mouseY = event.offsetY
        let maskX = mouseX - mask.offsetWidth/2
        let maskY = mouseY - mask.offsetHeight/2

        if(maskX<0){
          maskX = 0
        }else if(maskX>mask.offsetWidth){
          maskX = mask.offsetWidth
        }
        if(maskY<0){
          maskY = 0
        }else if(maskY>mask.offsetHeight){
          maskY = mask.offsetHeight
        }
        mask.style.left = maskX+'px'
        mask.style.top = maskY+'px'

        bigImg.style.left = -2* maskX + 'px'
        bigImg.style.top = -2* maskY + 'px'
      }
    },
    computed:{
      defaultImg(){
        //imageList是空数组 而空数组[xxx]又是undefined 所以还要对空数组进行处理
        //保证[xxx]出来的不是undefined 最次是一个空对象
        return this.imageList[this.defaultIndex]||{}
      }
    },
   

  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>