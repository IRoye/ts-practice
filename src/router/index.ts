/*
 * @Description: 
 * @Author: yuyi
 * @Date: 2024-06-16 14:24:42
 * @LastEditors: yuyi
 * @LastEditTime: 2024-06-16 14:42:03
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/enum',
      name: 'Enum',
      component: () => import('../views/Enum.vue')
    }
  ]
})

export default router
