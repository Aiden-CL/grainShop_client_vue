//安装vue-router
//引入并声明使用vue-router
import vue from 'vue'
import vueRouter from 'vue-router'

import VueRouter from 'vue-router'
import routes from './routers'
vue.use(vueRouter) //每个自定义插件都必须有一个install 这个use就是在调用插件的install方法 称作声明使用插件
//必须暴露一个路由器对象router

//组件中写的this.$router.push()这个push方法是VueRouter原型身上的方法 所以路由器实例化对象可以使用
const originPush = VueRouter.prototype.push //保存原来push方法地址 防止之后还要使用
const originReplace = VueRouter.prototype.replace
//location:传过来的对象 
VueRouter.prototype.push = function (location,resolved,rejected) {
    if (resolved === undefined && rejected === undefined) {
        //originPush不是路由器上的方法 是一个新的函数 与之前的this指向不同 this需指向实例化对象
        return originPush.call(this,location).catch(()=>{})
    } else {
        return originPush.call(this,location,resolved,rejected)
    }
}
VueRouter.prototype.replace = function (location,resolved,rejected) {
    if (resolved === undefined && rejected === undefined) {
        //originPush不是路由器上的方法 是一个新的函数 与之前的this指向不同 this需指向实例化对象
        return originReplace.call(this,location).catch(()=>{})
    } else {
        return originReplace.call(this,location,resolved,rejected)
    }
}
const router = new vueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        //配置路由跳转后滚动的位置 一般为顶部
        //x可省略 因为没有横向滚动条
        return {x:0,y:0}
    }
})
export default router

//在实例化vm对象时 需要把这个暴露出去的路由器对象注册到vue身上 在main里