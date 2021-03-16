<template>
  <!--列表-->
        <div class="list-container">
            <div class="sortList clearfix">
                <div class="center">
                    <SliderLoop :bannerList="bannerList" :refName="'bannerContainer'"></SliderLoop>
                </div>

                <div class="right">
                    <div class="news">
                        <h4>
                            <em class="fl">尚品汇快报</em>
                            <span class="fr tip">更多 ></span>
                        </h4>
                        <div class="clearix"></div>
                        <ul class="news-list unstyled">
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[公告]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[公告]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                        </ul>
                    </div>
                    <ul class="lifeservices">
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">话费</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">机票</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">电影票</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">游戏</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">彩票</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">加油站</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">酒店</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">火车票</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">众筹</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">理财</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">礼品卡</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">白条</span>
                        </li>
                    </ul>
                    <div class="ads">
                        <img src="./images/ad1.png" />
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { mapState } from 'vuex'
//import Swiper from 'swiper/js/swiper'
//import 'swiper/css/swiper.css'
export default {
    name:'ListContainer',
    
    mounted(){
        this.getBannerList();
        //new Swiper时 数据还未拿到 过早
        //当挂载完成后 就去实例化swiper对象不行 必须在结构完全形成之后才有效果
        //因为实例化时数据还未请求回来 导致结构不能够形成
        //最简单的处理方式：可以给实例化swiper对象添加延迟定时器 虽然可以解决 但是用户体验不好

        //方法一：
        // setTimeout(() => {
        //     //1. swiper的跟容器 2. 配置对象
        //     new Swiper ('.swiper-container', {
        //     //direction: 'vertical', // 垂直切换选项 默认水平
        //     loop: true, // 循环模式选项
            
        //     // 如果需要分页器
        //     pagination: {
        //         el: '.swiper-pagination',
        //     },
            
        //     // 如果需要前进后退按钮
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     },
            
        //     // 如果需要滚动条
        //     scrollbar: {
        //         el: '.swiper-scrollbar',
        //     },
        // })  
        // }, 2000);   
    },
    methods:{
        //拿数据是异步的
        getBannerList(){
            this.$store.dispatch('getBannerList')
        }
    },
    computed:{
        ...mapState({
            bannerList:state=>state.home.bannerList
        })
    },

    //data props传递过来的 computed计算出的 都可以使用
    // watch:{
    //     //请求回来之前是最外层数组是空的 请求回来数组内是有值的 由空->有 不需要深度监视
    //     //数组从0变4
    //     bannerList:{
    //         immediate:true,//立即执行无意义 和floor内部轮播代码保持一致
    //         //数据回来 结构不一定形成
    //         handler(newVal,oldVal){
    //             //监视bannerList内的数据是不是请求回来了
    //             //直接new不行 虽然把数据拿回来了 但是上面的结构是通过v-for遍历数据动态创建div结构 也需要时间

    //             //通常用在当数据更新后需要做一些操作 而这些操作有需要等待页面更新完成才有效 此时需要使用nextTick
    //             this.$nextTick(()=>{
    //                 //等待页面最近一次更新完成之后自动调用
    //                 new Swiper (this.$refs.bannerContainer, {
    //                     loop: true,
    //                     pagination: {
    //                         el: '.swiper-pagination',
    //                     },
    //                     navigation: {
    //                         nextEl: '.swiper-button-next',
    //                         prevEl: '.swiper-button-prev',
    //                     },
    //                     scrollbar: {
    //                         el: '.swiper-scrollbar',
    //                     },
    //                 }) 
    //                 //放在updated(){}里 只要页面更新 就new 效率低
    //             })
                 

    //         }
    //     }
    // }
}
</script>

<style lang="less" scoped>
.list-container {
        width: 1200px;
        margin: 0 auto;

        .sortList {
            height: 464px;
            padding-left: 210px;

            .center {
                box-sizing: border-box;
                width: 740px;
                height: 100%;
                padding: 5px;
                float: left;
            }

            .right {
                float: left;
                width: 250px;

                .news {
                    border: 1px solid #e4e4e4;
                    margin-top: 5px;

                    h4 {
                        border-bottom: 1px solid #e4e4e4;
                        padding: 5px 10px;
                        margin: 5px 5px 0;
                        line-height: 22px;
                        overflow: hidden;
                        font-size: 14px;

                        .fl {
                            float: left;
                        }

                        .fr {
                            float: right;
                            font-size: 12px;
                            font-weight: 400;
                        }
                    }

                    .news-list {
                        padding: 5px 15px;
                        line-height: 26px;

                        .bold {
                            font-weight: 700;
                        }
                    }
                }

                .lifeservices {
                    border-right: 1px solid #e4e4e4;
                    overflow: hidden;
                    display: flex;
                    flex-wrap: wrap;

                    .life-item {
                        border-left: 1px solid #e4e4e4;
                        border-bottom: 1px solid #e4e4e4;
                        margin-right: -1px;
                        height: 64px;
                        text-align: center;
                        position: relative;
                        cursor: pointer;
                        width: 25%;

                        .list-item {
                            background-image: url(./images/icons.png);
                            width: 61px;
                            height: 40px;
                            display: block;
                        }

                        .service-intro {
                            line-height: 22px;
                            width: 60px;
                            display: block;
                        }

                        &:nth-child(1) {
                            .list-item {
                                background-position: 0px -5px;
                            }
                        }

                        &:nth-child(2) {
                            .list-item {
                                background-position: -62px -5px;
                            }
                        }

                        &:nth-child(3) {
                            .list-item {
                                background-position: -126px -5px;
                            }
                        }

                        &:nth-child(4) {
                            .list-item {
                                background-position: -190px -5px;
                            }
                        }

                        &:nth-child(5) {
                            .list-item {
                                background-position: 0px -76px;
                            }
                        }

                        &:nth-child(6) {
                            .list-item {
                                background-position: -62px -76px;
                            }
                        }

                        &:nth-child(7) {
                            .list-item {
                                background-position: -126px -76px;
                            }
                        }

                        &:nth-child(8) {
                            .list-item {
                                background-position: -190px -76px;
                            }
                        }

                        &:nth-child(9) {
                            .list-item {
                                background-position: 0px -146px;
                            }
                        }

                        &:nth-child(10) {
                            .list-item {
                                background-position: -62px -146px;
                            }
                        }

                        &:nth-child(11) {
                            .list-item {
                                background-position: -126px -146px;
                            }
                        }

                        &:nth-child(12) {
                            .list-item {
                                background-position: -190px -146px;
                            }
                        }
                    }
                }

                .ads {
                    margin-top: 5px;

                    img {
                        opacity: 0.8;
                        transition: all 400ms;

                        &:hover {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
</style>