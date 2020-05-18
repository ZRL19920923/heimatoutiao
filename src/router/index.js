import Vue from 'vue'

import VueRouter from 'vue-router'

// 引入业务组件
import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/lg' },
    { path: '/lg', name: 'login', component: Login }
  ]
})
export default router
