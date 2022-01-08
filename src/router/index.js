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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
