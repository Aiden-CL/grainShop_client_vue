<template>
  <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <div  @mouseleave = "moveOutDiv" @mouseenter="isShow = true">
                    <h2 class="all">全部商品分类</h2>
                    <!-- transition名字对应的后期写过渡类的名称前缀 sort-enter/sort-enter-active/sort-enter-to -->
                    <transition name="sort">
                       <div class="sort" v-show="isShow">
                        <!-- 参数不同 -->
                        <div class="all-sort-list2" @click="toSearch">
                            <div class="item" :class="{item_on:index===currentIndex}" 
                            v-for="(c1,index) in categoryList" 
                            :key="c1.categoryId" 
                            @mouseenter="moveInDiv(index)">
                                <h3>
                                    <a href="javascript:;" 
                                    :data-categoryName="c1.categoryName" 
                                    :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                                    <!-- <router-link 
                                    :to="{
                                        name:'search',
                                        query:{
                                            categoryName:c1.categoryName,
                                            category1Id:c1.categoryId
                                            }}">{{c1.categoryName}}</router-link> -->
                                    <!-- <a href="javascript:;" @click="$router.push(
                                        {
                                        name:'search',
                                        query:{
                                            categoryName:c1.categoryName,
                                            category1Id:c1.categoryId
                                            }}
                                    )">{{c1.categoryName}}</a> -->
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                                            <dt>
                                                <a href="javascript:;" 
                                                :data-categoryName="c2.categoryName" 
                                                :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                                                <!-- <router-link :to="{
                                                    name:'search',
                                                    query:{
                                                        categoryName:c2.categoryName,
                                                        category2Id:c2.categoryId
                                                        }
                                                }">{{c2.categoryName}}</router-link> -->
                                                <!-- <a href="javascript:;" @click="$router.push(
                                                    {
                                                    name:'search',
                                                    query:{
                                                        categoryName:c2.categoryName,
                                                        category2Id:c2.categoryId
                                                        }}
                                                )">{{c2.categoryName}}</a> -->
                                            </dt>
                                            <dd>
                                                <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                                    <a href="javascript:;"
                                                    :data-categoryName="c3.categoryName" 
                                                    :data-category3Id="c3.categoryId"
                                                    >{{c3.categoryName}}</a>
                                                    <!-- <router-link :to="{
                                                    name:'search',
                                                    query:{
                                                        categoryName:c3.categoryName,
                                                        category3Id:c3.categoryId
                                                        }
                                                }">{{c3.categoryName}}</router-link> -->
                                                <!-- <a href="javascript:;" @click="$router.push(
                                                    {
                                                    name:'search',
                                                    query:{
                                                        categoryName:c3.categoryName,
                                                        category3Id:c3.categoryId
                                                        }}
                                                )">{{c3.categoryName}}</a> -->
                                                </em>
                                                
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div> 
                    </transition>
                    

                </div>
                
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                
            </div>
        </div>
</template>

<script>
import { mapState } from 'vuex'
//import _ from 'lodash'
import throttle from 'lodash/throttle.js'
export default {
    name:'TypeNav',
    data(){
        return {
            currentIndex:-1,
            isShow:true
        }
    },
    mounted(){
        if(this.$route.path!=='/home'){
            this.isShow = false
        }
        //打开action的开关 才会触发store的action去发请求

        //home和search切换时 会重复发请求
        //this.$store.dispatch('getCategoryList')//此为异步操作
        //dispatch之后 会调用action里的函数发请求 数据是存储在vuex中
    },
    //从vuex中把需要的数据 映射到vue中
    computed:{
        ...mapState({
            //映射的名称必须和state当中的数据名称一致
            categoryList:state=>state.home.categoryList
        })
    },
    methods:{
        moveInDiv:throttle(function(index){
            console.log(index);
            this.currentIndex = index
        },50,{trailing:false}),
        //点击三级分类跳转 事件委托
        toSearch(event){
            //时间委派的回调函数
            //1.用户点击的是不是a
            //2.每个a标签传递的参数是不一样的
            let target = event.target; //点击的元素是target
            let dataset = target.dataset;
            //console.log(dataset);
            //判断
            let {categoryname,category1id,category2id,category3id} = dataset;
            //categoryname存在 肯定为a标签
            if(categoryname){
                //判定点击的一定是a标签 因为categoryname在data-自定义属性了
                let location ={
                    name:'search',
                }
                let query = {
                    categoryName:categoryname
                }
                if(category1id){
                    query.category1Id = category1id
                }else if(category2id){
                    query.category2Id = category2id
                }else{
                    query.category3Id = category3id
                }
                location.query = query
                
                if(this.$route.params){
                    location.params = this.$route.params
                }
                //如果是往搜索页跳用replace
                if(this.$route.path !== '/home'){
                    this.$router.replace(location)
                }else{
                    this.$router.push(location)
                }
                //this.$router.push(location)
            }    
        },
        moveOutDiv(){
            this.currentIndex = -1 
            if(this.$route.path!=='/home'){
            this.isShow = false
            }
        }
    }
}
</script>

<style lang="less" scoped>
.type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                &.sort-enter{
                    opacity:0;
                    height: 0;
                }

                &.sort-enter-to{
                    opacity: 1;
                    height: 461px;
                }

                &.sort-enter-active{
                    transition: all .8s;

                }

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 615px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.item_on {
                            background-color: pink;
                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>