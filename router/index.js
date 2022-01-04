
import Vue from "vue"
import VueRouter from 'vue-router'
import Login from '../src/components/Login.vue'
import home from '../src/components/home.vue'
// import Home from '../view/Home.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias:'/Login',
        component: Login
    },
    {
        path: '/home',
        alias:'/home',
        component: home
    }
    // {
    //     path:'/home',
    //     name:'Hmoe',
    //     redirect:'/Welcome',
    //     component: Home,
    //     children:[
    //         {
    //             path:'/Welcome',
    //             name: 'Welcome',
    //             component:() =>import('../components/Welcome.vue')
    //         },
    //         {
    //             path:'/User',
    //             name: 'User',
    //             component:() =>import('../components/user/User.vue')
    //         },
    //         {
    //             path:'/Rights',
    //             name: 'Rights',
    //             component:() =>import('../components/rights/Rights.vue')
    //         },
    //         {
    //             path:'/Roles',
    //             name: 'Roles',
    //             component:() =>import('../components/rights/Roles.vue')
    //         }
    //     ]

    // }
]

const router=new VueRouter({
    routes
})

export default router