import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const routers = [
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    children: routers
  }]
})
export default router