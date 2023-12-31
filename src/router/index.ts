import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/index.vue'
import login from '@/views/login/login.vue'
import caseHome from '@/views/caseHome/caseHome.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/caseHome',
      name: 'caseHome',
      component: caseHome
    }
  ]
})
