import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import('@/views/Deposit.vue')
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: () => import('@/views/Withdraw.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
