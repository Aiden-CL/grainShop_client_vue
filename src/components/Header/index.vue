<template>
  <!-- 头部 -->
  <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
          <div class="container">
              <div class="loginList">
                  <p>尚品汇欢迎您！</p>
                  <p>
                      <span>请</span>
                      <!-- <a href="###">登录</a>
                      <a href="###" class="register">免费注册</a> -->
                      <router-link to="/login">登录</router-link>
                      <router-link to="/register" class="register">免费注册</router-link>
                      <!-- 声明式导航和编程式导航(router.push/replace)
                           最大区别就是声明式导航跳转的时候没办法做额外的逻辑
                           编程式导航 就是在跳转之前可以添加自己的额外的逻辑

                           声明式导航一般是组件标签比较少的时候使用 多的话效率就不高了 组件标签写一个相当于一个组件对象 占用内存
                           编程式导航比声明式导航效率高 组件对象比较多时使用 不适合使用router-link 就可以使用编程式导航了
                       -->

                  </p>
              </div>
              <div class="typeList">
                  <a href="###">我的订单</a>
                  <a href="###">我的购物车</a>
                  <a href="###">我的尚品汇</a>
                  <a href="###">尚品汇会员</a>
                  <a href="###">企业采购</a>
                  <a href="###">关注尚品汇</a>
                  <a href="###">合作招商</a>
                  <a href="###">商家后台</a>
              </div>
          </div>
      </div>
      <!--头部第二行 搜索区域-->
      <div class="bottom">
          <h1 class="logoArea">
              <!-- <a class="logo" title="尚品汇" href="###" target="_blank">
                  <img src="./images/logo.png" alt="">
              </a> -->
              <router-link to="/home" class="logo">
                <img src="./images/logo.png" alt="">
              </router-link>
          </h1>
          <div class="searchArea">
              <form action="###" class="searchForm">
                  <input type="text" id="autocomplete" class="input-error input-xxlarge" 
                    v-model="keyword"
                  />
                  <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">搜索</button>
              </form>
          </div>
      </div>
  </header>
</template>

<script>
export default {
    name:'Header',
    data(){
        return {
            keyword:''
        }
    },
    mounted(){
        this.$bus.$on('clearKeyword',this.clearKeyword)
    },
    methods:{
      //编程式导航
      toSearch(){
          //push()里写的和声明式导航是一样的 路由跳转可以携带的两种参数 params和query
          //params参数是属于路径的一部分 直接写在路径当中 匹配路由的时候是要匹配这个parama参数
          //query参数不属于路径的一部分 拼接在路径的后面 以?分割后面的key=value&key=value 匹配路由的时候不匹配query参数

          //路径传参的三种写法：
          //1. 字符串拼接
        //this.$router.push('/search/'+this.keyword+'?keyword1='+this.keyword.toUpperCase())
        //2. 模板字符串
        //this.$router.push(`/search/${this.keyword}?keyword1=${this.keyword.toUpperCase()}`)
        //3. 对象
        // this.$router.push({
        //     name:'search',
        //     params:{
        //         keyword:this.keyword
        //     },//点击搜索按钮只传params参数
        //     // query:{
        //     //     keyword1:this.keyword.toUpperCase()
        //     // }
        // })
        //.catch(()=>{})
        //NavigationDuplicated: Avoided redundant navigation to current location: "/search/aac?keyword1=AAC".
        //错误原因：vue-router3.1.0以上的版本需要指定成功或者失败的回调处理引入的promise 如果没有传递
        //那么就返回一个promise  内部会判断跳转的路径和参数有没有变 会抛出一个失败的promise
        //解决方法1.调用push时传递成功和失败的回调给内部 让promise可以正常处理
        //可以只传成功的回调函数 可以只传失败的回调去处理

        //this.$router路由器对象 .push()是路由器构造函数原型上的方法

        let location = {
            name:'search',
            params:{
                keyword:this.keyword||undefined
            },
        }
        //跳转之前 看看之前有没有给带query的参数过来 如果有 带上
        if(this.$route.query){
            location.query = this.$route.query
        }

        
        if(this.$route.path !== '/home'){
            this.$router.replace(location)
        }else{
            this.$router.push(location)
        }
        
      },
      clearKeyword(){
          this.keyword = ''
      }
    }
}
</script>

<style lang="less" scoped>
.header {
  &>.top {
      background-color: #eaeaea;
      height: 30px;
      line-height: 30px;

      .container {
          width: 1200px;
          margin: 0 auto;
          overflow: hidden;

          .loginList {
              float: left;

              p {
                  float: left;
                  margin-right: 10px;

                  .register {
                      border-left: 1px solid #b3aeae;
                      padding: 0 5px;
                      margin-left: 5px;
                  }
              }
          }

          .typeList {
              float: right;

              a {
                  padding: 0 10px;

                  &+a {
                      border-left: 1px solid #b3aeae;
                  }
              }

          }

      }
  }

  &>.bottom {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .logoArea {
          float: left;

          .logo {
              img {
                  width: 175px;
                  margin: 25px 45px;
              }
          }
      }

      .searchArea {
          float: right;
          margin-top: 35px;

          .searchForm {
              overflow: hidden;

              input {
                  box-sizing: border-box;
                  width: 490px;
                  height: 32px;
                  padding: 0px 4px;
                  border: 2px solid #ea4a36;
                  float: left;

                  &:focus {
                      outline: none;
                  }
              }

              button {
                  height: 32px;
                  width: 68px;
                  background-color: #ea4a36;
                  border: none;
                  color: #fff;
                  float: left;
                  cursor: pointer;

                  &:focus {
                      outline: none;
                  }
              }
          }
      }
  }
}
</style>