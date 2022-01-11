import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: '/info',
    children: [
      {
        path: '/info',
        name: 'info',
        component: () => import('@/components/admin/Info')
      },
      {
        path: '/write',
        name: 'write',
        component: () => import('@/components/admin/Write')
      },
      {
        path: '/mArticle',
        name: 'mArticle',
        component: () => import('@/components/admin/mArticle')
      },
      {
        path: '/eArticle',
        name: 'eArticle',
        component: () => import('@/components/admin/eArticle')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = window.sessionStorage.getItem('token')
  if (to.path !== '/login') {
    if (!token) {
      // next('/login')
      next()
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
