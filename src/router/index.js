import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home/index.vue";
const routes = [
  {
    path:'/',
    component: Home
  },
  {
    path: '/plan',
    component: ()=>import('@/views/Plan/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
