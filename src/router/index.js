import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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

export default router
