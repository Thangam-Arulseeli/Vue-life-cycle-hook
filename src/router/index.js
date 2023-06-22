import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import LifeCycleCompostionAPI from '@/components/LifeCycleCompostionAPI.vue'
import LifeCyleOptionsAPI from '@/components/LifeCycleOptionsAPI.vue'

const routes = [
  {
    path: '/',
    name: 'lcoapi',
    component: LifeCyleOptionsAPI
  },
  {
    path: '/lifecyclecapi',
    name: 'lccapi',
    component: LifeCycleCompostionAPI
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
