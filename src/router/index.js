//安装vue-router
//引入并声明使用vue-router
import vue from 'vue'
import vueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
vue.use(vueRouter) //每个自定义插件都必须有一个install 这个use就是在调用插件的install方法 称作声明使用插件
//必须暴露一个路由器对象router
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
            path: '/search',
            component: Search//注册路由组件
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