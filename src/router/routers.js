import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
//模块化routes
export default [
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

    {
        //携带params参数 参数是id 发请求拿商品 根据商品id 通过search页传到详情页
        path: '/detail/:goodsId?',//?代表params参数可传可不传
        component: Detail
    },
    {
        //携带params参数 参数是id 发请求拿商品 根据商品id 通过search页传到详情页
        path: '/addcartsuccess',//?代表params参数可传可不传
        component: AddCartSuccess
    },
    //重定向路由
    {
        path: '/',
        redirect:'/home'
    }
]