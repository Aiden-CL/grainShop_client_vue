const Home = () => import('@/pages/Home')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const Search = () => import('@/pages/Search')
const Detail = () => import('@/pages/Detail')
const AddCartSuccess = () => import('@/pages/AddCartSuccess')

export default [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        meta: {
            isHide: true
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            isHide: true
        }
    },
    {
        path: '/search/:keyword?',
        component: Search,
        name: 'search',
        props(route) {
            return {
                keyword: route.params.keyword,
                keyword1: route.query.keyword1
            }
        }
    },
    {
        path: '/detail/:goodsId?',
        component: Detail
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess
    },
    {
        path: '/',
        redirect: '/home'
    }
]
