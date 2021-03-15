//安装vue-router
//引入并声明使用vue-router
import vue from 'vue'
import vueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import VueRouter from 'vue-router'
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
    routes: [
        {
            path: '/home',
            component: Home //注册路由组件
        },
        {
            path: '/login',
            component: Login, //注册路由组件
            //路由的元配置项 可以在这个对象中配置一些数据 在this.$route路由对象里可以获取
            meta: {
                isHide:true
            }
        },
        {
            path: '/register',
            component: Register, //注册路由组件
            meta: {
                isHide:true
            }
        },
        {
            path: '/search/:keyword?',
            component: Search,//注册路由组件
            name: 'search',
            //如果不写props可以正常传参 props可以简化组件中获取参数 路由映射到组件内的属性
            //true:把匹配到的params参数作为属性映射到组件
            //props:{} 映射组件中额外需要的一些静态属性
            //props:true,
            //这个route接受到的是路由器对象 允许手动映射
            props(route) {
                return {
                    keyword: route.params.keyword,
                    keyword1: route.query.keyword1
                }
            }
        },
        //重定向路由
        {
            path: '/',
            redirect:'/home'
        }
    ]
})
export default router

//在实例化vm对象时 需要把这个暴露出去的路由器对象注册到vue身上 在main里